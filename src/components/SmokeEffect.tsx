"use client";

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
}

const COLORS = [
  'rgba(0, 74, 124, ',   // Brand Blue
  'rgba(243, 112, 33, ',  // Brand Orange
  'rgba(14, 165, 233, ',  // Sky Blue
  'rgba(168, 85, 247, ',  // Purple
  'rgba(34, 197, 94, ',   // Green
  'rgba(236, 72, 153, ',  // Pink
];

const SmokeEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const isPressingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const createParticle = (x: number, y: number, isBurst = false) => {
      const count = isBurst ? 15 : 2;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.2;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5, // Slight upward bias
          size: Math.random() * 5 + 5,
          opacity: 0.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          life: 1.0,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isPressingRef.current) {
        createParticle(mousePosRef.current.x, mousePosRef.current.y);
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.vy -= 0.01; // Smoke floats up
        p.size += 0.4; // Smoke expands
        p.life -= 0.012; // Life decays

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        p.opacity = p.life * 0.5;

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, p.color + p.opacity + ')');
        gradient.addColorStop(0.5, p.color + (p.opacity * 0.3) + ')');
        gradient.addColorStop(1, p.color + '0)');
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    const handleMouseDown = (e: MouseEvent) => {
      isPressingRef.current = true;
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      createParticle(e.clientX, e.clientY, true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isPressingRef.current = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      isPressingRef.current = true;
      const touch = e.touches[0];
      mousePosRef.current = { x: touch.clientX, y: touch.clientY };
      createParticle(touch.clientX, touch.clientY, true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      mousePosRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = () => {
      isPressingRef.current = false;
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    window.addEventListener('contextmenu', handleContextMenu);

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('contextmenu', handleContextMenu);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default SmokeEffect;
