'use client';

import { useState } from 'react';
import OpeningScreen from '@/components/OpeningScreen';
import FloatingElements from '@/components/FloatingElements';
import MusicToggle from '@/components/MusicToggle';
import InteractiveCake from '@/components/InteractiveCake';
import WishesSection from '@/components/WishesSection';

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      <FloatingElements />
      <MusicToggle />
      
      {!showMain && <OpeningScreen onOpen={() => setShowMain(true)} />}
      
      {showMain && (
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center text-center px-5 py-20 relative bg-gradient-to-br from-[#FADDE1] via-[#F9C7D0] to-[#FFF5E9] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Floating hearts */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={`heart-${i}`}
                  className="absolute text-4xl text-[#D72F4B] opacity-10 animate-float-slow"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.7}s`,
                  }}
                >
                  ♡
                </div>
              ))}
              
              {/* Balloons */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-6xl animate-float-balloon opacity-70"
                  style={{
                    left: `${10 + i * 20}%`,
                    top: `${20 + (i % 2) * 30}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${6 + i}s`,
                  }}
                >
                  🎈
                </div>
              ))}
              
              {/* Sparkles */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={`sparkle-${i}`}
                  className="absolute text-3xl animate-twinkle-slow"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                >
                  ✨
                </div>
              ))}
            </div>

            <div className="relative z-10 max-w-4xl animate-fadeInUp">
              <div className="text-5xl mb-6 animate-sparkle">✨</div>
              
              <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-[#D72F4B] mb-8 leading-tight drop-shadow-lg">
                Happy 21st Birthday, Aaryan! ♡
              </h1>
              
              <p className="text-xl md:text-2xl text-[#3F3032] mb-10 max-w-2xl mx-auto font-medium">
                21 looks like a little more magic, a little more growing up, and a whole lot of beautiful things waiting for you.
              </p>
              
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border-2 border-[#F36F83] px-8 py-4 rounded-full shadow-lg shadow-[#E9A0AC]/30">
                <span className="text-2xl">📅</span>
                <span className="text-lg font-medium text-[#3F3032]">28 November · your special day</span>
              </div>
            </div>
          </section>

          {/* Interactive Cake Section */}
          <div className="bg-gradient-to-b from-[#FFF5E9] to-[#FADDE1]">
            <InteractiveCake />
          </div>

          {/* Letter Section */}
          <section className="py-20 px-5 bg-gradient-to-b from-[#FADDE1] to-[#F9C7D0]">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm p-10 md:p-16 rounded-3xl shadow-2xl border-2 border-[#F36F83]/20 relative">
                {/* Decorations */}
                <div className="absolute -top-4 -right-4 text-6xl opacity-70 animate-pulse-slow">💌</div>
                <div className="absolute -top-6 left-10 w-36 h-2 bg-[#D72F4B] rounded-full shadow-md" />
                <div className="absolute -bottom-4 -left-4 text-5xl opacity-60 rotate-12">✨</div>

                <h2 className="font-caveat text-4xl md:text-5xl text-[#D72F4B] mb-8 text-center">
                  a little thing i don't say enough... 💌
                </h2>

                <div className="space-y-5 text-[#3F3032] leading-relaxed">
                  <p>Dear Aaryan,</p>
                  
                  <p>Happy 21st birthday, you little human. ♡</p>
                  
                  <p>It's funny how someone can become such an important part of your life even without ever meeting you in person. And somehow, you became one of those people for me.</p>
                  
                  <p>There's something so genuinely beautiful about the way you are. Your innocence, your childish side, the way you express your emotions, and the way you can talk about what you feel without pretending to be someone else.</p>
                  
                  <p>Maybe you don't even realize it, but you've taught me something important: that showing your emotions isn't a weakness. That it's okay to care, to feel things deeply, to say what is on your heart, and to be unapologetically yourself.</p>
                  
                  <p>I might not tell you this often, and I might not always know how to express it, but I'm genuinely glad that I got to know you.</p>
                  
                  <p>As you turn 21, I hope life is kind to you. I hope you find people who understand you, opportunities that excite you, dreams that come true, and reasons to smile even on the most ordinary days.</p>
                  
                  <p>I hope you never feel that you have to hide the soft, innocent, slightly childish and beautiful parts of yourself just to fit into this world. Growing up doesn't mean you have to lose them.</p>
                  
                  <p>I hope you become everything you dream of becoming, but I also hope that in the process, you never forget to enjoy the little things, laugh at silly jokes, express what you feel, and remain the person you are at heart.</p>
                  
                  <p>And selfishly, I hope that somewhere along the way, through all the changes and different chapters of life, we continue to be friends. I hope there are still random conversations, stupid jokes, little moments and a friendship that stays, even as life changes.</p>
                  
                  <p>We haven't met in person yet, but I'm really glad our paths crossed.</p>
                  
                  <p>Thank you for being you, Aaryan.</p>
                  
                  <p>Happy 21st birthday. May this year bring you more happiness than you expect, more courage than you know you have, and more beautiful memories than you can count.</p>
                  
                  <p>You deserve good things. Always.</p>
                  
                  <p className="font-caveat text-2xl text-[#D72F4B] mt-8">
                    — someone who's really glad to have you as a friend ♡
                  </p>
                </div>

                <div className="text-right text-5xl text-[#F36F83] mt-6 animate-heartbeat">♡</div>
              </div>
            </div>
          </section>

          {/* Wishes Section */}
          <div className="bg-gradient-to-b from-[#F9C7D0] to-[#FADDE1]">
            <WishesSection />
          </div>

          {/* Friendship Corner */}
          <section className="py-20 px-5 bg-gradient-to-br from-[#FADDE1] via-[#F9C7D0] to-[#F36F83]/30">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-caveat text-4xl md:text-5xl text-[#D72F4B] text-center mb-16">
                some people are just unexpectedly special ♡
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { emoji: '⭐', text: 'Proof that some of the nicest people enter your life without any grand announcement.' },
                  { emoji: '✨', text: 'Not every meaningful friendship needs a thousand pictures together to be real.' },
                  { emoji: '💫', text: 'Somewhere between random conversations and silly moments, you became someone I\'m genuinely grateful for.' },
                  { emoji: '🌙', text: 'Here\'s to more conversations, more laughter, and hopefully a day when we can finally say, "remember when we only knew each other through a screen?"' }
                ].map((note, i) => (
                  <div
                    key={i}
                    className="bg-white/90 backdrop-blur-sm border-2 border-[#F36F83]/30 p-10 rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:border-[#D72F4B] transition-all duration-300"
                    style={{ transform: `rotate(${i % 2 === 0 ? '-1deg' : '1deg'})` }}
                  >
                    <div className="text-4xl mb-4">{note.emoji}</div>
                    <p className="text-[#3F3032] leading-relaxed text-lg">{note.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Grand Finale */}
          <section className="min-h-screen flex items-center justify-center px-5 py-20 relative bg-gradient-to-b from-[#1a1625] via-[#2C3E50] to-[#0f0a1a] overflow-hidden">
            {/* Stars */}
            <div className="absolute inset-0">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white rounded-full animate-twinkle-star"
                  style={{
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    opacity: Math.random() * 0.7 + 0.3,
                  }}
                />
              ))}
            </div>

            {/* Moon */}
            <div className="absolute top-24 right-24 w-32 h-32 rounded-full bg-[#F7E6A5]" style={{ boxShadow: '0 0 60px rgba(247, 230, 165, 0.6), inset -20px -20px 0 rgba(0, 0, 0, 0.05)' }} />

            <div className="relative z-10 text-center text-white max-w-3xl">
              <p className="font-caveat text-3xl md:text-4xl mb-8 text-[#F9C7D0] animate-fadeInUp opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
                hey, Aaryan... one last thing ♡
              </p>

              <div className="bg-white/10 backdrop-blur-md p-10 md:p-16 rounded-3xl border-2 border-white/20 mb-10 animate-fadeInUp opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]">
                <p className="text-xl md:text-2xl leading-relaxed mb-6">
                  <strong className="text-[#F9C7D0]">Here's to 21.</strong>
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed mb-5 text-white/95">
                  To all the things you've already survived, all the things you're about to discover, all the dreams you haven't even dreamed yet, and all the beautiful versions of yourself you're still becoming.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed mb-5 text-white/95">
                  I hope life gives you a thousand reasons to be happy.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed mb-5 text-white/95">
                  Keep being soft. Keep being silly. Keep being YOU.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed mb-5 text-white/95">
                  The world needs more people who aren't afraid to feel.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed mb-5 text-white/95">
                  And I'm really glad one of those people is my friend.
                </p>
                
                <p className="text-xl md:text-2xl leading-relaxed">
                  <strong className="text-[#F9C7D0]">Happy birthday, Aaryan. Here's to a beautiful new chapter. ✨</strong>
                </p>
              </div>

              <div className="font-cormorant text-8xl md:text-9xl font-bold text-[#F7E6A5] mb-8 animate-fadeInUp opacity-0 [animation-delay:1.5s] [animation-fill-mode:forwards] animate-glow-gold">
                21
              </div>

              <p className="font-caveat text-2xl md:text-3xl text-[#F9C7D0] animate-fadeInUp opacity-0 [animation-delay:2s] [animation-fill-mode:forwards]">
                made with a little extra love, just for you ♡
              </p>
            </div>
          </section>
        </main>
      )}

      <style jsx>{`
        @keyframes float-balloon {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-40px) translateX(20px); }
          75% { transform: translateY(-20px) translateX(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.4; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10%, 30% { transform: scale(1.15); }
          20%, 40% { transform: scale(1); }
        }
        @keyframes twinkle-star {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes twinkle-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 40px rgba(249, 199, 208, 0.8); }
          50% { text-shadow: 0 0 60px rgba(249, 199, 208, 1), 0 0 80px rgba(249, 199, 208, 0.6); }
        }
        @keyframes glow-gold {
          0%, 100% { text-shadow: 0 0 40px rgba(247, 230, 165, 0.8); }
          50% { text-shadow: 0 0 60px rgba(247, 230, 165, 1), 0 0 80px rgba(247, 230, 165, 0.6); }
        }
        .animate-float-balloon { animation: float-balloon 8s infinite ease-in-out; }
        .animate-float-slow { animation: float-slow 6s infinite ease-in-out; }
        .animate-sparkle { animation: sparkle 3s infinite ease-in-out; }
        .animate-fadeInUp { animation: fadeInUp 1.2s ease; }
        .animate-heartbeat { animation: heartbeat 2s infinite; }
        .animate-twinkle-star { animation: twinkle-star 3s infinite ease-in-out; }
        .animate-twinkle-slow { animation: twinkle-slow 4s infinite ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 3s infinite; }
        .animate-glow { animation: glow 3s infinite; }
        .animate-glow-gold { animation: glow-gold 3s infinite; }
      `}</style>
    </>
  );
}
