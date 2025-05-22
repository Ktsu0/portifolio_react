import { useRef, useEffect } from 'react';
import startBreakout from './breakoutEngine';
import './breakout.css';

function BreakoutCanvas({ onGameOver }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

   
    startBreakout(canvas, onGameOver);

    
    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [onGameOver]);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={150}
      className="breakout-canvas"
    />
  );
}

export default BreakoutCanvas;
