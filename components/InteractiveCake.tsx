'use client';

import { useState, useRef, useEffect } from 'react';

export default function InteractiveCake() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [cakeCut, setCakeCut] = useState(false);
  const [message, setMessage] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const blowCandles = () => {
    if (candlesBlown) return;
    setCandlesBlown(true);
    setTimeout(() => {
      setMessage("wish made? good. now don't tell anyone what it was ♡");
    }, 1100);
  };

  const cutCake = () => {
    if (cakeCut) return;
    setCakeCut(true);
    setMessage("a little sweetness for someone who makes the world sweeter just by being himself.");
    createConfetti();
  };

  const createConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const colors = ['#D72F4B', '#F36F83', '#F9C7D0', '#FADDE1', '#FFD700', '#FF69B4'];
    const shapes = ['circle', 'square', 'heart', 'star'];
    const confettiPieces: any[] = [];

    class ConfettiPiece {
      x: number;
      y: number;
      size: number;
      color: string;
      shape: string;
      speedY: number;
      speedX: number;
      rotation: number;
      rotationSpeed: number;
      gravity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = -20;
        this.size = Math.random() * 12 + 6;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        this.speedY = Math.random() * 4 + 2;
        this.speedX = Math.random() * 4 - 2;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
        this.gravity = 0.15;
      }

      update() {
        this.speedY += this.gravity;
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        
        // Slight air resistance
        this.speedX *= 0.99;
        
        return this.y <= canvas!.height;
      }

      draw() {
        ctx!.save();
        ctx!.translate(this.x, this.y);
        ctx!.rotate((this.rotation * Math.PI) / 180);
        ctx!.fillStyle = this.color;
        
        if (this.shape === 'circle') {
          ctx!.beginPath();
          ctx!.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx!.fill();
        } else if (this.shape === 'square') {
          ctx!.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else if (this.shape === 'heart') {
          // Draw heart
          ctx!.font = `${this.size * 2}px Arial`;
          ctx!.textAlign = 'center';
          ctx!.textBaseline = 'middle';
          ctx!.fillText('♡', 0, 0);
        } else if (this.shape === 'star') {
          // Draw star
          ctx!.font = `${this.size * 2}px Arial`;
          ctx!.textAlign = 'center';
          ctx!.textBaseline = 'middle';
          ctx!.fillText('✨', 0, 0);
        }
        
        ctx!.restore();
      }
    }

    // Create more confetti pieces
    for (let i = 0; i < 150; i++) {
      setTimeout(() => {
        confettiPieces.push(new ConfettiPiece());
      }, i * 10);
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      
      for (let i = confettiPieces.length - 1; i >= 0; i--) {
        if (confettiPieces[i].update()) {
          confettiPieces[i].draw();
        } else {
          confettiPieces.splice(i, 1);
        }
      }

      if (confettiPieces.length > 0) {
        requestAnimationFrame(animate);
      }
    }

    animate();
  };

  return (
    <section className="py-20 px-5 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-caveat text-4xl md:text-5xl text-[#D72F4B] mb-4">
            okay birthday boy, make a wish first! 🎂
          </h2>
        </div>

        <div className="max-w-md mx-auto mb-10 relative">
          <svg
            className="w-full h-auto drop-shadow-2xl"
            viewBox="0 0 400 450"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cake Base */}
            <g className={cakeCut ? 'transition-transform duration-1000 -translate-x-2' : ''}>
              {/* Bottom Layer */}
              <ellipse cx="200" cy="380" rx="140" ry="20" fill="#F7E6A5" opacity="0.3" />
              <rect x="60" y="300" width="280" height="80" rx="5" fill="#FFF9F0" />
              <ellipse cx="200" cy="300" rx="140" ry="20" fill="#FFE8CC" />
              
              {/* Middle Layer */}
              <rect x="80" y="240" width="240" height="60" rx="5" fill="#FFF9F0" />
              <ellipse cx="200" cy="240" rx="120" ry="18" fill="#FFE8CC" />
              
              {/* Top Layer */}
              <rect x="100" y="180" width="200" height="60" rx="5" fill="#FFF9F0" />
              <ellipse cx="200" cy="180" rx="100" ry="16" fill="#FFE8CC" />
              
              {/* Frosting */}
              <path d="M 100 220 Q 120 215 140 220 Q 160 225 180 220 Q 200 215 220 220 Q 240 225 260 220 Q 280 215 300 220" 
                    stroke="#DCD5F4" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 80 280 Q 100 275 120 280 Q 140 285 160 280 Q 180 275 200 280 Q 220 285 240 280 Q 260 275 280 280 Q 300 285 320 280" 
                    stroke="#DCD5F4" strokeWidth="3" fill="none" strokeLinecap="round"/>
              
              {/* Strawberries */}
              <g>
                <ellipse cx="150" cy="175" rx="8" ry="10" fill="#FFB6C1" />
                <path d="M 150 168 L 148 164 L 152 164 Z" fill="#90EE90" />
              </g>
              <g>
                <ellipse cx="250" cy="175" rx="8" ry="10" fill="#FFB6C1" />
                <path d="M 250 168 L 248 164 L 252 164 Z" fill="#90EE90" />
              </g>
            </g>

            {/* Candles */}
            {Array.from({ length: 21 }).map((_, i) => {
              const positions = [
                { x: 130, y: 135 }, { x: 160, y: 130 }, { x: 200, y: 128 }, { x: 240, y: 130 }, { x: 270, y: 135 },
                { x: 120, y: 160 }, { x: 150, y: 158 }, { x: 180, y: 156 }, { x: 220, y: 156 }, { x: 250, y: 158 }, { x: 280, y: 160 },
                { x: 130, y: 195 }, { x: 165, y: 193 }, { x: 200, y: 192 }, { x: 235, y: 193 }, { x: 270, y: 195 },
                { x: 110, y: 225 }, { x: 155, y: 223 }, { x: 200, y: 222 }, { x: 245, y: 223 }, { x: 290, y: 225 }
              ];
              const pos = positions[i];
              
              return (
                <g key={i} className={`transition-opacity duration-500 delay-${i * 50}`}>
                  {/* Candle stick */}
                  <rect x={pos.x - 2} y={pos.y} width="4" height="20" fill="#FFE8CC" rx="2" />
                  
                  {/* Flame */}
                  {!candlesBlown && (
                    <g className="animate-flicker origin-center">
                      <ellipse cx={pos.x} cy={pos.y - 5} rx="4" ry="8" fill="#FFD700" opacity="0.8" />
                      <ellipse cx={pos.x} cy={pos.y - 5} rx="2" ry="5" fill="#FFF" />
                    </g>
                  )}
                </g>
              );
            })}

            {/* "21" Topper */}
            <text x="200" y="100" fontFamily="var(--font-caveat)" fontSize="48" fontWeight="700" fill="#C9DFF5" textAnchor="middle">
              21
            </text>
          </svg>

          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />
        </div>

        <div className="text-center">
          {!candlesBlown && (
            <button
              onClick={blowCandles}
              className="font-quicksand text-lg px-10 py-4 bg-[#D72F4B] text-white font-medium rounded-full hover:scale-105 hover:bg-[#B92340] transition-all shadow-lg shadow-[#E9A0AC]/50 hover:shadow-xl m-2"
            >
              make a wish ✨
            </button>
          )}
          
          {candlesBlown && !cakeCut && (
            <button
              onClick={cutCake}
              className="font-quicksand text-lg px-10 py-4 bg-[#D72F4B] text-white font-medium rounded-full hover:scale-105 hover:bg-[#B92340] transition-all shadow-lg shadow-[#E9A0AC]/50 hover:shadow-xl m-2"
            >
              cut the cake 🍰
            </button>
          )}

          {message && (
            <p className="font-caveat text-2xl md:text-3xl text-[#3F3032] mt-8 animate-fadeIn min-h-[60px]">
              {message}
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; transform: scale(1) translateY(0); }
          25% { opacity: 0.8; transform: scale(0.95) translateY(-1px); }
          50% { opacity: 1; transform: scale(1.05) translateY(1px); }
          75% { opacity: 0.9; transform: scale(0.98) translateY(-0.5px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-flicker {
          animation: flicker 1.5s infinite ease-in-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease;
        }
      `}</style>
    </section>
  );
}
