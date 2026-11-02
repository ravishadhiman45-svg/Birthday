'use client';

import { useState } from 'react';

const wishes = [
  "Bhagwan ji tujhe thodi akal de, baaki jo hai usse kaam chala lenge.😅",
  "Bhagwaan ji kre teri health sahi rhe tera backpain bhi sahi ho jaye 🤍",
  "Tu life mein jo bhi sikhna chahta hai sikh paye...",
  "Bhagwan ji kre ki tujhe life mein eese log mile who'll appreciate your genuine heart.🌸",
  "Teri or gandhi ji ki aache wali dosti ho jaye , jeb mein hamesha colorful note bharein rhe 💵",
  "khushhiii rhe hamesha , hasta muskurata hua.. 🐣",
  "Bhagwan kre 2027 tk aachi naukri or chokri dono mile tujhe 🤭",
  "Jedi vi countries ghumne tune sb ghume tu...",
  "Teri kismat itni achhi ho ki problems bhi tujhe dekh ke wapas chali jaayein...",
  "May you discover places you've always wanted to visit.",
  "May you become more confident in yourself.",
  "May you have friendships that feel safe and effortless.",
  "May you learn to celebrate your own progress.",
  "May you find opportunities that bring out your potential.",
  "May you never stop being curious about the world.",
  "May you have the courage to walk away from what isn't right for you.",
  "May you always find reasons to believe in yourself.",
  "May your future surprise you in the most wonderful ways.",
  "May you have more peaceful days than stressful ones.",
  "May you keep the little things that make you, YOU.",
  "🥳 Happy 21st Birthday, birthday boy! Hamesha khush reh, apne dreams achieve kar, life ko enjoy kar...🎂"
];

const icons = ['✨', '⭐', '💫', '🌟', '💝', '🎁', '🌈', '🦋', '🌸', '🍀'];

export default function WishesSection() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const toggleWish = (index: number) => {
    setRevealed(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-caveat text-4xl md:text-5xl text-[#D72F4B] text-center mb-16">
          21 wishes for your 21st year ✨
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishes.map((wish, index) => (
            <div
              key={index}
              onClick={() => toggleWish(index)}
              className={`
                bg-white/90 backdrop-blur-sm p-8 rounded-2xl text-center cursor-pointer transition-all duration-300
                border-2 border-[#F36F83]/30 hover:border-[#D72F4B] hover:-translate-y-2
                shadow-md hover:shadow-xl hover:shadow-[#E9A0AC]/40 relative overflow-hidden
                ${revealed.has(index) ? 'border-[#D72F4B] shadow-lg shadow-[#E9A0AC]/30' : ''}
              `}
            >
              <div className={`text-4xl mb-4 transition-transform duration-300 ${revealed.has(index) ? 'scale-110' : ''}`}>
                {icons[index % icons.length]}
              </div>
              
              <div className="font-caveat text-xl text-[#D72F4B] mb-3 font-semibold">
                Wish {index + 1}
              </div>

              {!revealed.has(index) && (
                <div className="font-caveat text-base text-[#F36F83] opacity-70">
                  click to reveal ✨
                </div>
              )}

              {revealed.has(index) && (
                <div className="text-sm text-[#3F3032] leading-relaxed mt-4 animate-fadeIn">
                  {wish}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease;
        }
      `}</style>
    </section>
  );
}
