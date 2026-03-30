import { useRef, useEffect } from 'react';

export default function GridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let offset = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 80;
      const color = 'rgba(0, 255, 255, 0.06)';
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines (scrolling)
      for (let y = (offset % gridSize) - gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Random glowing particles
      const time = Date.now() * 0.001;
      for (let i = 0; i < 30; i++) {
        const x = Math.sin(time * 0.3 + i * 1.7) * canvas.width * 0.4 + canvas.width * 0.5;
        const y = Math.cos(time * 0.2 + i * 2.1) * canvas.height * 0.4 + canvas.height * 0.5;
        const radius = Math.sin(time + i) * 1.5 + 2;
        const alpha = Math.abs(Math.sin(time * 0.5 + i)) * 0.5;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(0, 255, 255, 0.8)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      offset += 0.5;
      animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
