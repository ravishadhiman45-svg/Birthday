'use client';

import { useState, useEffect } from 'react';

export default function FloatingElements() {
  const [elements, setElements] = useState<Array<{
    id: number;
    left: string;
    top: string;
    delay: string;
    duration: string;
    emoji: string;
  }>>([]);

  useEffect(() => {
    setElements(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${15 + Math.random() * 10}s`,
        emoji: ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)]
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute text-xl opacity-60 animate-float"
          style={{
            left: el.left,
            top: el.top,
            animationDelay: el.delay,
            animationDuration: el.duration,
          }}
        >
          {el.emoji}
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 20s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
