"use client";

import React, { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  life: number;
  maxLife: number;
}

const COLORS = [
  'rgba(249, 115, 22, 0.7)',  // Orange
  'rgba(168, 85, 247, 0.7)',  // Purple
  'rgba(34, 197, 94, 0.7)',   // Green
  'rgba(59, 130, 246, 0.7)',   // Blue
  'rgba(234, 179, 8, 0.7)',    // Yellow
  'rgba(236, 72, 153, 0.7)',   // Pink
  'rgba(6, 182, 212, 0.7)',    // Cyan
];

const BubbleEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const isMouseDownRef = useRef(false);
  const mousePosRef = useRef({ x: 0, y: 0 });

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

    const createBubble = (x: number, y: number, isBurst = false) => {
      const count = isBurst ? 15 : 2;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = isBurst ? Math.random() * 8 + 2 : Math.random() * 4 + 1;
        const radius = Math.random() * 15 + 5;
        const maxLife = Math.random() * 60 + 40;

        bubblesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          life: maxLife,
          maxLife,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isMouseDownRef.current) {
        createBubble(mousePosRef.current.x, mousePosRef.current.y);
      }

      for (let i = bubblesRef.current.length - 1; i >= 0; i--) {
        const b = bubblesRef.current[i];
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.98;
        b.vy *= 0.98;
        b.vy -= 0.05; // Slight float up
        b.life--;

        if (b.life <= 0) {
          bubblesRef.current.splice(i, 1);
          continue;
        }

        const opacity = b.life / b.maxLife;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color.replace('0.7)', `${opacity * 0.7})`);
        ctx.fill();

        // Shine/Highlight on bubble
        ctx.beginPath();
        ctx.arc(b.x - b.radius * 0.3, b.y - b.radius * 0.3, b.radius * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.4})`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDownRef.current = true;
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      createBubble(e.clientX, e.clientY, true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isMouseDownRef.current = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isMouseDownRef.current = true;
        const touch = e.touches[0];
        mousePosRef.current = { x: touch.clientX, y: touch.clientY };
        createBubble(touch.clientX, touch.clientY, true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mousePosRef.current = { x: touch.clientX, y: touch.clientY };
      }
    };

    const handleTouchEnd = () => {
      isMouseDownRef.current = false;
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ background: 'transparent' }}
    />
  );
};

export default BubbleEffect;
