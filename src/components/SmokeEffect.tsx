"use client";

import React, { useEffect, useRef } from 'react';

const SmokeEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMouseDown = useRef(false);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const colors = [
      'rgba(0, 74, 124, 0.5)',   // Brand Blue
      'rgba(243, 112, 33, 0.5)',  // Brand Orange
      'rgba(109, 110, 113, 0.5)', // Brand Grey
      'rgba(6, 182, 212, 0.4)',   // Cyan
      'rgba(139, 92, 246, 0.4)',  // Violet
      'rgba(236, 72, 153, 0.4)',  // Pink
    ];

    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      velocity: { x: number; y: number };
      alpha: number;
      decay: number;
      expansion: number;
      blur: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        // Start larger for a more billowy, smoke-like feel
        this.size = Math.random() * 15 + 10;
        this.color = colors[Math.floor(Math.random() * colors.length)];

        // Slower, more upward-tending velocity (mimicking smoke)
        const angle = (Math.random() * Math.PI) + Math.PI; // Upward 180 degrees
        const speed = Math.random() * 1.5 + 0.2;
        this.velocity = {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed - 0.5 // Bias towards going up
        };

        this.alpha = 0.6;
        this.decay = Math.random() * 0.005 + 0.003; // Slower decay
        this.expansion = Math.random() * 1.5 + 1.0; // Expand more
        this.blur = Math.random() * 20 + 10;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;

        // Create a soft, billowy puff using a radial gradient
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;

        // Add significant blur for that "smoke" texture
        ctx.filter = `blur(${this.blur}px)`;

        ctx.fill();
        ctx.restore();
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= this.decay;
        this.size += this.expansion;
        this.blur += 0.2; // Smoke gets blurrier as it expands

        // Gentle air resistance
        this.velocity.x *= 0.99;
        this.velocity.y *= 0.99;
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown.current = true;
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isMouseDown.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Clear with a tiny bit of persistence for extra smoothness
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isMouseDown.current) {
        // Emit more particles while holding for a thicker smoke trail
        for (let i = 0; i < 2; i++) {
          particles.push(new Particle(mousePos.current.x, mousePos.current.y));
        }
      }

      particles = particles.filter(p => p.alpha > 0);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
};

export default SmokeEffect;
