"use client";

import React, { useEffect, useRef } from 'react';

const FluidSimulation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true, depth: false, antialias: false });
    if (!gl) {
        console.error("WebGL not supported");
        return;
    }

    // --- Shaders ---
    const baseVertexShader = `
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;
      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const copyShader = `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      void main () {
        gl_FragColor = texture2D(uTexture, vUv);
      }
    `;

    const clearShader = `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;
      void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `;

    const displayShader = `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a * 0.8); // Slight transparency
      }
    `;

    const splatShader = `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspect;
      uniform vec2 point;
      uniform vec3 color;
      uniform float radius;
      void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspect;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
      }
    `;

    const advectionShader = `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform float dt;
      uniform float dissipation;
      void main () {
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        gl_FragColor = dissipation * texture2D(uSource, coord);
      }
    `;

    const divergenceShader = `
      precision highp float;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `;

    const pressureShader = `
      precision highp float;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;
      void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float div = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - div) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `;

    const gradientSubtractShader = `
      precision highp float;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B) * 0.5;
        gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `;

    // --- Helper Functions ---
    function createShader(gl: WebGLRenderingContext, source: string, type: number) {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error(gl.getShaderInfoLog(shader));
      }
      return shader;
    }

    function createProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
      const program = gl.createProgram()!;
      gl.attachShader(program, createShader(gl, vsSource, gl.VERTEX_SHADER));
      gl.attachShader(program, createShader(gl, fsSource, gl.FRAGMENT_SHADER));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
          console.error(gl.getProgramInfoLog(program));
      }
      return program;
    }

    const programs = {
      splat: createProgram(gl, baseVertexShader, splatShader),
      copy: createProgram(gl, baseVertexShader, copyShader),
      clear: createProgram(gl, baseVertexShader, clearShader),
      display: createProgram(gl, baseVertexShader, displayShader),
      advection: createProgram(gl, baseVertexShader, advectionShader),
      divergence: createProgram(gl, baseVertexShader, divergenceShader),
      pressure: createProgram(gl, baseVertexShader, pressureShader),
      gradientSubtract: createProgram(gl, baseVertexShader, gradientSubtractShader),
    };

    // --- Framebuffers and Textures ---
    function createFBO(gl: WebGLRenderingContext, w: number, h: number) {
      gl.activeTexture(gl.TEXTURE0);
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

      const fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

      return { texture, fbo, width: w, height: h };
    }

    function createDoubleFBO(gl: WebGLRenderingContext, w: number, h: number) {
      let fbo1 = createFBO(gl, w, h);
      let fbo2 = createFBO(gl, w, h);
      return {
        get read() { return fbo1; },
        get write() { return fbo2; },
        swap() { [fbo1, fbo2] = [fbo2, fbo1]; }
      };
    }

    const simRes = 128;
    const dyeRes = 512;
    let density = createDoubleFBO(gl, dyeRes, dyeRes);
    let velocity = createDoubleFBO(gl, simRes, simRes);
    let divergence = createFBO(gl, simRes, simRes);
    let pressure = createDoubleFBO(gl, simRes, simRes);

    const blit = (target: WebGLFramebuffer | null) => {
      gl.bindFramebuffer(gl.FRAMEBUFFER, target);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    // --- Vertex Data ---
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

    const aPositionLoc = gl.getAttribLocation(programs.copy, "aPosition");
    gl.enableVertexAttribArray(aPositionLoc);
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 0, 0);

    // --- Simulation State ---
    let splats: { x: number, y: number, dx: number, dy: number, color: number[] }[] = [];
    let isMouseDown = false;
    let shouldBurst = false;
    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;
    let colorCycle = 0;

    const hsvToRgb = (h: number, s: number, v: number) => {
      let r = 0, g = 0, b = 0;
      let i = Math.floor(h * 6);
      let f = h * 6 - i;
      let p = v * (1 - s);
      let q = v * (1 - f * s);
      let t = v * (1 - (1 - f) * s);
      switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
      }
      return [r, g, b];
    };

    const addSplat = (x: number, y: number, dx: number, dy: number) => {
      const color = hsvToRgb(colorCycle, 1.0, 1.0);
      colorCycle += 0.005;
      if (colorCycle > 1) colorCycle = 0;
      splats.push({ x, y, dx, dy, color });
    };

    const handleInput = (x: number, y: number, isBurst = false) => {
      const rect = canvas.getBoundingClientRect();
      const posX = x / rect.width;
      const posY = 1.0 - y / rect.height;
      const dx = (x - lastX) * 10.0;
      const dy = (lastY - y) * 10.0;
      addSplat(posX, posY, dx, dy);
      if (isBurst) {
        for(let i=0; i<30; i++) {
            const angle = Math.random() * Math.PI * 2;
            const force = Math.random() * 30;
            addSplat(posX + (Math.random()-0.5)*0.03, posY + (Math.random()-0.5)*0.03, Math.cos(angle)*force, Math.sin(angle)*force);
        }
      }
      lastX = x;
      lastY = y;
    };

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      shouldBurst = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleMouseUp = () => { isMouseDown = false; };
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.targetTouches.length > 0) {
        isMouseDown = true;
        shouldBurst = true;
        const touch = e.targetTouches[0];
        mouseX = touch.clientX;
        mouseY = touch.clientY;
        lastX = touch.clientX;
        lastY = touch.clientY;
        if (e.cancelable) e.preventDefault();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.targetTouches.length > 0) {
        const touch = e.targetTouches[0];
        mouseX = touch.clientX;
        mouseY = touch.clientY;
        if (e.cancelable) e.preventDefault();
      }
    };

    const handleTouchEnd = () => { isMouseDown = false; };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    let animationId: number;
    const update = () => {
      if (!canvas || !gl) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      // If mouse is held down, provide a continuous splat
      if (isMouseDown) {
        handleInput(mouseX, mouseY, shouldBurst);
        shouldBurst = false;
      } else {
        // Sync lastX/lastY even when not clicking so there's no jump on click
        lastX = mouseX;
        lastY = mouseY;
      }

      gl.viewport(0, 0, simRes, simRes);

      // 1. Splat
      splats.forEach(splat => {
        // Splat Velocity
        gl.useProgram(programs.splat);
        gl.uniform1f(gl.getUniformLocation(programs.splat, "aspect"), canvas.width / canvas.height);
        gl.uniform2f(gl.getUniformLocation(programs.splat, "point"), splat.x, splat.y);
        gl.uniform3f(gl.getUniformLocation(programs.splat, "color"), splat.dx, splat.dy, 0.0);
        gl.uniform1f(gl.getUniformLocation(programs.splat, "radius"), 0.0002);
        gl.uniform1i(gl.getUniformLocation(programs.splat, "uTarget"), 0);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, velocity.read.texture);
        blit(velocity.write.fbo);
        velocity.swap();

        // Splat Dye
        gl.viewport(0, 0, dyeRes, dyeRes);
        gl.uniform3f(gl.getUniformLocation(programs.splat, "color"), splat.color[0], splat.color[1], splat.color[2]);
        gl.uniform1f(gl.getUniformLocation(programs.splat, "radius"), 0.0001);
        gl.bindTexture(gl.TEXTURE_2D, density.read.texture);
        blit(density.write.fbo);
        density.swap();
        gl.viewport(0, 0, simRes, simRes);
      });
      splats = [];

      // 2. Advection
      gl.useProgram(programs.advection);
      gl.uniform2f(gl.getUniformLocation(programs.advection, "texelSize"), 1.0 / simRes, 1.0 / simRes);
      gl.uniform1f(gl.getUniformLocation(programs.advection, "dt"), 0.016);
      gl.uniform1f(gl.getUniformLocation(programs.advection, "dissipation"), 0.97); // Fades faster
      gl.uniform1i(gl.getUniformLocation(programs.advection, "uVelocity"), 0);
      gl.uniform1i(gl.getUniformLocation(programs.advection, "uSource"), 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, velocity.read.texture);
      blit(velocity.write.fbo);
      velocity.swap();

      gl.uniform1f(gl.getUniformLocation(programs.advection, "dissipation"), 0.98); // Dye fades slightly slower
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, velocity.read.texture);
      gl.uniform1i(gl.getUniformLocation(programs.advection, "uVelocity"), 0);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, density.read.texture);
      gl.uniform1i(gl.getUniformLocation(programs.advection, "uSource"), 1);
      gl.viewport(0, 0, dyeRes, dyeRes);
      blit(density.write.fbo);
      density.swap();
      gl.viewport(0, 0, simRes, simRes);

      // 3. Divergence
      gl.useProgram(programs.divergence);
      gl.uniform2f(gl.getUniformLocation(programs.divergence, "texelSize"), 1.0 / simRes, 1.0 / simRes);
      gl.uniform1i(gl.getUniformLocation(programs.divergence, "uVelocity"), 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, velocity.read.texture);
      blit(divergence.fbo);

      // 4. Pressure
      gl.useProgram(programs.clear);
      gl.uniform1i(gl.getUniformLocation(programs.clear, "uTexture"), 0);
      gl.uniform1f(gl.getUniformLocation(programs.clear, "value"), 0.5);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, pressure.read.texture);
      blit(pressure.write.fbo);
      pressure.swap();

      gl.useProgram(programs.pressure);
      gl.uniform2f(gl.getUniformLocation(programs.pressure, "texelSize"), 1.0 / simRes, 1.0 / simRes);
      gl.uniform1i(gl.getUniformLocation(programs.pressure, "uDivergence"), 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, divergence.texture);
      for (let i = 0; i < 20; i++) {
        gl.uniform1i(gl.getUniformLocation(programs.pressure, "uPressure"), 1);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, pressure.read.texture);
        blit(pressure.write.fbo);
        pressure.swap();
      }

      // 5. Gradient Subtract
      gl.useProgram(programs.gradientSubtract);
      gl.uniform2f(gl.getUniformLocation(programs.gradientSubtract, "texelSize"), 1.0 / simRes, 1.0 / simRes);
      gl.uniform1i(gl.getUniformLocation(programs.gradientSubtract, "uPressure"), 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, pressure.read.texture);
      gl.uniform1i(gl.getUniformLocation(programs.gradientSubtract, "uVelocity"), 1);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, velocity.read.texture);
      blit(velocity.write.fbo);
      velocity.swap();

      // 6. Display
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(programs.display);
      gl.uniform1i(gl.getUniformLocation(programs.display, "uTexture"), 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, density.read.texture);
      blit(null);

      animationId = requestAnimationFrame(update);
    };

    update();

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
      style={{ background: 'transparent' }}
    />
  );
};

export default FluidSimulation;
