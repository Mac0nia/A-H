'use client';

import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log('AnimatedBackground mounted');
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas not found');
      return;
    }

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) {
      console.error('Could not get 2d context');
      return;
    }

    // Set canvas size to match window size
    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      const scale = window.devicePixelRatio;
      
      // Set display size
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      
      // Set actual size scaled
      canvas.width = Math.floor(innerWidth * scale);
      canvas.height = Math.floor(innerHeight * scale);
      
      // Scale context
      ctx.scale(scale, scale);
      
      console.log(`Canvas resized to ${innerWidth}x${innerHeight} with scale ${scale}`);
      createDots();
    };

    // Create dots grid
    const dotSize = 1.2; 
    const spacing = 20; 
    let dots: { x: number; y: number }[] = [];

    const createDots = () => {
      dots = [];
      const cols = Math.floor(window.innerWidth / spacing);
      const rows = Math.floor(window.innerHeight / spacing);
      
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const randomOffset = spacing * 0.15; 
          const offsetX = (Math.random() - 0.5) * randomOffset;
          const offsetY = (Math.random() - 0.5) * randomOffset;
          
          dots.push({
            x: i * spacing + offsetX,
            y: j * spacing + offsetY
          });
        }
      }
      console.log(`Created ${dots.length} dots`);
    };

    // Track mouse position
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    // Animation loop
    const draw = () => {
      // Clear canvas with background
      ctx.fillStyle = '#1a1a1a'; 
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw dots
      dots.forEach(dot => {
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 80; 

        // Draw base dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = '#333333'; 
        ctx.fill();

        // Draw glow if mouse is near
        if (distance < maxDistance) {
          const intensity = Math.pow(1 - (distance / maxDistance), 2); 
          const glowSize = dotSize * 3.5; 
          
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, glowSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(218, 165, 32, ${intensity * 0.35})`; 
          ctx.fill();
        }
      });

      requestAnimationFrame(draw);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    draw();

    // Cleanup
    return () => {
      console.log('Cleaning up AnimatedBackground');
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#1a1a1a]">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
