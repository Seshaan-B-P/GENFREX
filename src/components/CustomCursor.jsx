import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const ambientRef = useRef(null);
  const badgeTextRef = useRef(null);

  // Mouse coords and lerp states
  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const ambientPos = useRef({ x: -100, y: -100 });
  const activeModeRef = useRef('default'); // 'default', 'hover', 'drag', 'view', 'explore'
  const isVisibleRef = useRef(false);
  const isMouseDownRef = useRef(false);

  // Local state only for text rendering inside badge
  const [badgeContent, setBadgeContent] = useState('');

  useEffect(() => {
    // Disable on touch devices
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // Hide default cursor across document
    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (followerRef.current) followerRef.current.style.opacity = '1';
        if (ambientRef.current) ambientRef.current.style.opacity = '1';
      }

      // Check context awareness
      const target = e.target;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      const clickableTarget = target.closest('button, a, [role="button"], input, select, textarea');

      if (cursorTarget) {
        const mode = cursorTarget.getAttribute('data-cursor');
        if (mode === 'drag') {
          activeModeRef.current = 'drag';
          setBadgeContent('⟲ DRAG');
        } else if (mode === 'view') {
          activeModeRef.current = 'view';
          setBadgeContent('VIEW ↗');
        } else if (mode === 'explore') {
          activeModeRef.current = 'explore';
          setBadgeContent('EXPLORE ★');
        } else {
          activeModeRef.current = 'hover';
          setBadgeContent('');
        }
      } else if (clickableTarget) {
        activeModeRef.current = 'hover';
        setBadgeContent('');
      } else {
        activeModeRef.current = 'default';
        setBadgeContent('');
      }
    };

    const handleMouseDown = () => {
      isMouseDownRef.current = true;
    };

    const handleMouseUp = () => {
      isMouseDownRef.current = false;
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (followerRef.current) followerRef.current.style.opacity = '0';
      if (ambientRef.current) ambientRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (followerRef.current) followerRef.current.style.opacity = '1';
      if (ambientRef.current) ambientRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // 60-120fps RAF loop with zero React re-render lag
    let animId;
    const loop = () => {
      const { x: targetX, y: targetY } = mousePos.current;

      // 1. Instant precision micro-dot (0ms lag)
      if (dotRef.current) {
        const dotScale = isMouseDownRef.current ? 0.75 : 1;
        const hideDot = activeModeRef.current === 'drag' || activeModeRef.current === 'view' || activeModeRef.current === 'explore';
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(${hideDot ? 0 : dotScale})`;
      }

      // 2. Fluid Follower badge / ring (smooth spring damping lerp)
      const fDx = targetX - followerPos.current.x;
      const fDy = targetY - followerPos.current.y;
      followerPos.current.x += fDx * 0.18;
      followerPos.current.y += fDy * 0.18;

      if (followerRef.current) {
        const mode = activeModeRef.current;
        let scale = 1;
        let width = '28px';
        let height = '28px';
        let borderRadius = '9999px';
        let bg = 'rgba(255, 255, 255, 0.04)';
        let border = '1px solid rgba(255, 255, 255, 0.2)';
        let backdrop = 'blur(2px)';
        let shadow = 'none';

        if (mode === 'hover') {
          width = '48px';
          height = '48px';
          bg = 'rgba(0, 102, 255, 0.12)';
          border = '1px solid rgba(0, 209, 255, 0.6)';
          shadow = '0 0 15px rgba(0, 102, 255, 0.3)';
          if (isMouseDownRef.current) scale = 0.85;
        } else if (mode === 'drag') {
          width = '84px';
          height = '34px';
          borderRadius = '9999px';
          bg = 'rgba(5, 5, 5, 0.88)';
          border = '1px solid rgba(0, 209, 255, 0.8)';
          shadow = '0 0 20px rgba(0, 209, 255, 0.4)';
          backdrop = 'blur(8px)';
          if (isMouseDownRef.current) scale = 0.92;
        } else if (mode === 'view') {
          width = '82px';
          height = '34px';
          borderRadius = '9999px';
          bg = 'rgba(5, 5, 5, 0.88)';
          border = '1px solid rgba(0, 102, 255, 0.8)';
          shadow = '0 0 20px rgba(0, 102, 255, 0.4)';
          backdrop = 'blur(8px)';
          if (isMouseDownRef.current) scale = 0.92;
        } else if (mode === 'explore') {
          width = '96px';
          height = '34px';
          borderRadius = '9999px';
          bg = 'rgba(5, 5, 5, 0.88)';
          border = '1px solid rgba(0, 209, 255, 0.8)';
          shadow = '0 0 20px rgba(0, 209, 255, 0.4)';
          backdrop = 'blur(8px)';
          if (isMouseDownRef.current) scale = 0.92;
        }

        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        followerRef.current.style.width = width;
        followerRef.current.style.height = height;
        followerRef.current.style.borderRadius = borderRadius;
        followerRef.current.style.background = bg;
        followerRef.current.style.border = border;
        followerRef.current.style.backdropFilter = backdrop;
        followerRef.current.style.webkitBackdropFilter = backdrop;
        followerRef.current.style.boxShadow = shadow;
      }

      // 3. Fluid Ambient Glow layer (soft, luminous trailing light)
      const aDx = targetX - ambientPos.current.x;
      const aDy = targetY - ambientPos.current.y;
      ambientPos.current.x += aDx * 0.08;
      ambientPos.current.y += aDy * 0.08;

      if (ambientRef.current) {
        ambientRef.current.style.transform = `translate3d(${ambientPos.current.x}px, ${ambientPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* 1. Fluid Ambient Glow Trail (Atmospheric Blue Halo) */}
      <div
        ref={ambientRef}
        className="pointer-events-none fixed top-0 left-0 z-[9996] w-64 h-64 rounded-full opacity-0 transition-opacity duration-500 will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.16) 0%, rgba(0, 209, 255, 0.06) 40%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* 2. Context-Aware Dynamic Follower Ring & Pill Badge */}
      <div
        ref={followerRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] opacity-0 flex items-center justify-center transition-[width,height,border-radius,background,border,box-shadow] duration-200 ease-out will-change-transform overflow-hidden select-none"
      >
        {badgeContent && (
          <span
            ref={badgeTextRef}
            className="font-mono text-[10px] font-black tracking-widest text-accent-cyan uppercase whitespace-nowrap px-2"
          >
            {badgeContent}
          </span>
        )}
      </div>

      {/* 3. Instant Precision Micro-Dot (0ms Hardware-Accelerated Pointer) */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-accent-cyan opacity-0 transition-opacity duration-300 will-change-transform"
        style={{
          boxShadow: '0 0 10px #00D1FF, 0 0 20px #0066FF',
        }}
      />
    </>
  );
}
