'use client';

import { useState, useEffect } from 'react';

export default function OpeningScreen({ onOpen }: { onOpen: () => void }) {
  const [stars, setStars] = useState<Array<{
    id: number;
    left: string;
    top: string;
    delay: string;
    emoji: string;
  }>>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
        emoji: ['✨', '⭐', '💫'][Math.floor(Math.random() * 3)]
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#FADDE1] via-[#F9C7D0] to-[#F36F83] transition-opacity duration-1000">
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute text-2xl animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          >
            {star.emoji}
          </div>
        ))}
        
        {/* Decorative hearts */}
        <div className="absolute top-20 left-10 text-4xl opacity-20">♡</div>
        <div className="absolute top-40 right-20 text-3xl opacity-20">♡</div>
        <div className="absolute bottom-32 left-32 text-5xl opacity-15">♡</div>
        <div className="absolute bottom-20 right-40 text-3xl opacity-20">♡</div>
      </div>

      <div className="relative z-10 text-center px-5 max-w-2xl">
        <p className="font-caveat text-4xl md:text-5xl text-[#D72F4B] mb-6 animate-fadeInUp opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards] drop-shadow-lg">
          psst... someone's turning 21 ✨
        </p>
        
        <h1 className="font-cormorant text-5xl md:text-7xl font-semibold text-[#B92340] mb-8 animate-fadeInUp opacity-0 [animation-delay:1s] [animation-fill-mode:forwards] drop-shadow-xl">
          and that someone is YOU, Aaryan!
        </h1>
        
        <p className="text-xl md:text-2xl text-[#3F3032] mb-12 animate-fadeInUp opacity-0 [animation-delay:1.5s] [animation-fill-mode:forwards]">
          someone made a little corner of the universe just for you.
        </p>
        
        <button
          onClick={onOpen}
          className="font-quicksand text-lg px-12 py-4 bg-[#D72F4B] text-white font-medium rounded-full hover:scale-105 hover:bg-[#B92340] transition-all shadow-xl shadow-[#E9A0AC]/60 animate-fadeInUp opacity-0 [animation-delay:2s] [animation-fill-mode:forwards]"
        >
          open your little surprise ♡
        </button>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-twinkle {
          animation: twinkle 2s infinite ease-in-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </div>
  );
}
