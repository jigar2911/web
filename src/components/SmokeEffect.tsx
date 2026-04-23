"use client";

import React, { useEffect, useRef } from 'react';

const SmokeEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    // More vibrant and colorful smoke colors
    const colors = [
      '#3b82f6', // Blue
      '#ef4444', // Red
      '#10b981', // Green
      '#f59e0b', // Amber
      '#8b5cf6', // Violet
      '#ec4899', // Pink
      '#06b6d4', // Cyan
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

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        // Start with small size and expand
        this.size = Math.random() * 5 + 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        // Random velocity for "burst" effect
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1;
        this.velocity = {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed
        };
        this.alpha = 0.8;
        this.decay = Math.random() * 0.015 + 0.008;
        this.expansion = Math.random() * 1.5 + 0.5;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        // Create a blurry smoke look using shadows or gradients if needed,
        // but arc is faster for many particles
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;

        // Add a bit of glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;

        ctx.fill();
        ctx.restore();
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= this.decay;
        this.size += this.expansion;
        // Slow down over time (friction)
        this.velocity.x *= 0.98;
        this.velocity.y *= 0.98;
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createSmoke = (e: MouseEvent) => {
      // More particles for a better effect
      for (let i = 0; i < 30; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    const animate = () => {
      // Semi-transparent clear to create a slight trail effect if desired,
      // but clearRect is cleaner for performance
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter(p => p.alpha > 0);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousedown', createSmoke);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousedown', createSmoke);
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
