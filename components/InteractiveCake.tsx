'use client';

import { useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

import type { CSSProperties } from 'react';

type CakeStep = 'candles' | 'blowing' | 'ready' | 'cutting' | 'celebrating';

const sprinkleColors = ['#D72F4B', '#F36F83', '#FFD166', '#FFFFFF'];

export default function InteractiveCake() {

  const [step, setStep] = useState<CakeStep>('candles');

  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const isCut = step === 'celebrating';

  const isCutting = step === 'cutting';

  useEffect(() => {

    setMounted(true);

  }, []);

  useEffect(() => {

    if (step !== 'blowing' && step !== 'cutting') return;

    const timer = window.setTimeout(() => {

      setStep(step === 'blowing' ? 'ready' : 'celebrating');

    }, step === 'blowing' ? 1150 : 1050);

    return () => window.clearTimeout(timer);

  }, [step]);

  useEffect(() => {

    if (step !== 'celebrating') return;

    const timer = window.setTimeout(() => {

      setStep((current) => current);

    }, 4200);

    return () => window.clearTimeout(timer);

  }, [step]);

  const reset = () => {
    setShowBanner(true);
    setStep('candles');
  };

  const celebrationOverlay =

    mounted && isCut

      ? createPortal(

          <div
            className={`bc-fullscreen-party ${showBanner ? '' : 'is-dismissed'}`}
            onClick={() => setShowBanner(false)}
            aria-label="Birthday celebration. Click outside the message to close it."
          >

            {Array.from({ length: 115 }, (_, i) => (

              <span

                key={`confetti-${i}`}

                className="bc-rain-confetti"

                style={

                  {

                    left: `${(i * 37 + 3) % 100}%`,

                    top: `${-5 - ((i * 13) % 35)}vh`,

                    background: sprinkleColors[i % sprinkleColors.length],

                    '--drift': `${Math.sin(i * 2.4) * (25 + (i % 6) * 15)}px`,

                    '--spin': `${i * 113}deg`,

                    '--delay': `${(i % 20) * 0.065}s`,

                    '--duration': `${2.3 + (i % 8) * 0.22}s`,

                  } as CSSProperties

                }

              />

            ))}

            {Array.from({ length: 28 }, (_, i) => (

              <span

                key={`heart-${i}`}

                className="bc-rising-heart"

                style={

                  {

                    left: `${(i * 29 + 5) % 96}%`,

                    top: `${65 + ((i * 17) % 40)}vh`,

                    '--rise-x': `${Math.sin(i * 1.9) * 70}px`,

                    '--heart-rotate': `${i % 2 ? 25 : -25}deg`,

                    '--heart-delay': `${(i % 14) * 0.14}s`,

                    '--heart-duration': `${2.7 + (i % 5) * 0.25}s`,

                  } as CSSProperties

                }

              >

                {['❤️', '✨', '💖', '💕', '🎉', '💗', '🥳'][i % 7]}

              </span>

            ))}

            {showBanner && (
            <div className="bc-party-banner" onClick={(event) => event.stopPropagation()}>

              <span className="bc-party-kicker">A SPECIAL DAY FOR A SPECIAL PERSON</span>

              <div className="bc-party-title">HAPPY 21st BIRTHDAY!</div>

              <div className="bc-party-subtitle">

                More smiles, more memories, more magic. ❤️

              </div>

              <div className="bc-party-stars">✦　🎂　✦　💖　✦</div>

              <div className="bc-close-hint">Click outside this card to close ✨</div>

            </div>
            )}

          </div>,

          document.body

        )

      : null;

  return (

    <section className="birthday-cake">

      <style>{`

        .birthday-cake {

          --pink: #F9C7D0;

          --red: #D72F4B;

          --rose: #B92340;

          --coral: #F36F83;

          --cream: #FFF5E9;

          color: #3F3032;

          text-align: center;

          padding: 32px 12px 44px;

          overflow: visible;

          font-family: inherit;

        }

        .bc-heading {

          color: var(--rose);

          font-size: clamp(27px, 5vw, 38px);

          font-weight: 850;

          line-height: 1.2;

          margin: 0 0 10px;

        }

        .bc-subtitle {

          color: #8E6269;

          font-size: 15px;

          line-height: 1.65;

          max-width: 340px;

          margin: 0 auto;

        }

        .bc-message {

          min-height: 46px;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 8px 0;

          color: var(--rose);

          font-weight: 750;

          font-size: 15px;

        }

        .bc-stage {

          position: relative;

          width: min(100%, 360px);

          height: 290px;

          margin: 0 auto 12px;

          display: flex;

          justify-content: center;

          align-items: center;

        }

        .bc-cake {

          position: relative;

          width: 300px;

          height: 260px;

          flex-shrink: 0;

          transform: translateY(7px);

        }

        .bc-shadow {

          position: absolute;

          bottom: 11px;

          left: 35px;

          width: 230px;

          height: 18px;

          border-radius: 50%;

          background: #B92340;

          opacity: .14;

          filter: blur(8px);

        }

        .bc-plate {

          position: absolute;

          bottom: 12px;

          left: 13px;

          width: 274px;

          height: 24px;

          border: 2px solid #E9A0AC;

          border-radius: 50%;

          background: linear-gradient(#fff, #F5DCE1);

          box-shadow: 0 4px 0 #E9A0AC;

        }

        .bc-bottom {

          position: absolute;

          bottom: 35px;

          left: 35px;

          width: 230px;

          height: 72px;

          border-radius: 12px 12px 19px 19px;

          background: linear-gradient(90deg, #E85F78, #F58CA0 48%, #E85F78);

          transition: clip-path .4s ease;

        }

        .bc-icing-bottom {

          position: absolute;

          top: -5px;

          left: -2px;

          width: 234px;

          height: 19px;

          border: 2px solid var(--pink);

          border-radius: 50%;

          background: var(--cream);

        }

        .bc-drip {

          position: absolute;

          top: 8px;

          width: 13px;

          height: 19px;

          border-radius: 0 0 8px 8px;

          background: var(--cream);

        }

        .bc-drip:nth-child(2) { left: 38px; height: 23px; }

        .bc-drip:nth-child(3) { left: 126px; height: 15px; }

        .bc-drip:nth-child(4) { right: 29px; height: 24px; }

        .bc-middle {

          position: absolute;

          bottom: 98px;

          left: 46px;

          width: 208px;

          height: 57px;

          border-radius: 11px 11px 7px 7px;

          border-bottom: 9px solid var(--cream);

          background: linear-gradient(90deg, #F7B3C0, #FFDDE2 48%, #F7B3C0);

          transition: clip-path .4s ease;

        }

        .bc-icing-middle {

          position: absolute;

          top: -5px;

          left: -2px;

          width: 212px;

          height: 16px;

          border: 2px solid var(--pink);

          border-radius: 50%;

          background: var(--cream);

        }

        .bc-top {

          position: absolute;

          bottom: 151px;

          left: 61px;

          width: 178px;

          height: 44px;

          border-radius: 50% 50% 9px 9px / 40% 40% 9px 9px;

          border-bottom: 5px solid #E9A0AC;

          background: linear-gradient(90deg, var(--pink), #FFE6E9, var(--pink));

          transition: clip-path .4s ease;

        }

        .bc-top-icing {

          position: absolute;

          inset: 0;

          border: 2px solid var(--pink);

          border-radius: 50%;

          background: linear-gradient(#FFF5E9, #FFE3E8);

        }

        .bc-number {

          position: absolute;

          z-index: 2;

          top: 7px;

          left: 50%;

          transform: translateX(-50%);

          color: var(--rose);

          font-size: 27px;

          font-weight: 900;

          text-shadow: 1px 2px 0 var(--pink);

        }

        .bc-sprinkle {

          position: absolute;

          z-index: 2;

          width: 7px;

          height: 3px;

          border-radius: 4px;

        }

        .bc-candles {

          position: absolute;

          z-index: 5;

          left: 50%;

          bottom: 188px;

          display: flex;

          gap: 27px;

          transform: translateX(-50%);

        }

        .bc-candle {

          position: relative;

          width: 13px;

          height: 37px;

          border-radius: 4px 4px 2px 2px;

          background: repeating-linear-gradient(

            135deg, white 0 5px, #F36F83 5px 9px

          );

          box-shadow: inset -2px 0 2px #B9234015;

        }

        .bc-wick {

          position: absolute;

          top: -7px;

          left: 6px;

          width: 2px;

          height: 7px;

          background: #76504B;

        }

        .bc-flame {

          position: absolute;

          top: -25px;

          left: 2px;

          width: 10px;

          height: 18px;

          border-radius: 60% 40% 55% 45%;

          background: linear-gradient(#FFF7A8, #FFB52E 65%, #FF7547);

          box-shadow: 0 0 12px #FFC75E, 0 0 23px #FFC75E66;

          transform-origin: bottom center;

          animation: bc-flicker .65s ease-in-out infinite alternate;

        }

        .bc-flame.blown {

          animation: bc-blow 1s ease-in forwards;

        }

        @keyframes bc-flicker {

          from { transform: rotate(-7deg) scale(.94); }

          to { transform: rotate(7deg) scale(1.08); }

        }

        @keyframes bc-blow {

          0% { opacity: 1; transform: rotate(0) scale(1); }

          30% { opacity: 1; transform: translateX(7px) rotate(35deg) scale(.8); }

          70% { opacity: .5; transform: translateX(17px) rotate(65deg) scale(.5); }

          100% { opacity: 0; transform: translateX(24px) rotate(85deg) scale(0); }

        }

        .bc-wind {

          position: absolute;

          z-index: 10;

          top: 64px;

          left: 4px;

          opacity: 0;

          color: #F36F83;

          font-size: 26px;

          font-weight: 800;

          transform: translateX(-15px);

          pointer-events: none;

        }

        .bc-wind.active {

          animation: bc-wind 850ms ease-out forwards;

        }

        @keyframes bc-wind {

          0% { opacity: 0; transform: translateX(-18px) scale(.7); }

          25% { opacity: 1; }

          100% { opacity: 0; transform: translateX(95px) scale(1.2); }

        }

        /* A single triangular wedge is removed from the cake. */

        .bc-cake.is-cut .bc-top,

        .bc-cake.is-cut .bc-middle,

        .bc-cake.is-cut .bc-bottom {

          clip-path: polygon(

            0 0, 100% 0, 100% 100%,

            62% 100%, 50% 65%, 38% 100%, 0 100%

          );

        }

        .bc-slice {

          position: absolute;

          z-index: 9;

          left: 119px;

          bottom: 35px;

          width: 66px;

          height: 112px;

          opacity: 0;

          pointer-events: none;

          transform-origin: bottom center;

        }

        .bc-slice.visible {

          opacity: 1;

          animation: bc-slice-out 950ms cubic-bezier(.18,.75,.25,1) forwards;

        }

        .bc-slice-top {

          position: absolute;

          z-index: 2;

          top: 0;

          left: 2px;

          width: 62px;

          height: 51px;

          background: linear-gradient(145deg, #FFF5E9, #FFE5E9 55%, #F9C7D0);

          clip-path: polygon(50% 0, 100% 100%, 0 100%);

          filter: drop-shadow(0 3px 2px #B9234033);

        }

        .bc-slice-body {

          position: absolute;

          top: 43px;

          left: 9px;

          width: 48px;

          height: 64px;

          background: linear-gradient(

            to bottom,

            #F58CA0 0%, #F58CA0 24%,

            #FFF5E9 24%, #FFF5E9 34%,

            #E85F78 34%, #E85F78 62%,

            #FFF5E9 62%, #FFF5E9 72%,

            #F58CA0 72%, #E85F78 100%

          );

          clip-path: polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%);

          filter: drop-shadow(2px 3px 2px #B9234033);

        }

        @keyframes bc-slice-out {

          0% {

            opacity: 0;

            transform: translate(0, 0) rotate(0deg) scale(.85);

          }

          25% {

            opacity: 1;

            transform: translate(0, -8px) rotate(-4deg) scale(1.03);

          }

          65% {

            opacity: 1;

            transform: translate(38px, -28px) rotate(12deg);

          }

          100% {

            opacity: 1;

            transform: translate(55px, -17px) rotate(16deg);

          }

        }

        /* A real knife silhouette: broad blade, pointed tip and a distinct handle. */

        .bc-knife {

          position: absolute;

          z-index: 12;

          left: 50%;

          top: -6px;

          width: 54px;

          height: 172px;

          opacity: 0;

          pointer-events: none;

          transform: translateX(-50%) rotate(34deg) translateY(-90px);

          transform-origin: 50% 25%;

        }

        .bc-knife.active {

          opacity: 1;

          animation: bc-knife-cut 1050ms cubic-bezier(.4,0,.3,1) forwards;

        }

        .bc-knife-blade {

          position: relative;

          width: 29px;

          height: 105px;

          margin: 0 auto;

          border: 1px solid #8F9AA5;

          border-radius: 8px 8px 3px 3px;

          background: linear-gradient(

            90deg,

            #929EAA 0%,

            #E0E6EB 18%,

            #FFFFFF 43%,

            #DCE3E8 72%,

            #9AA6B1 100%

          );

          clip-path: polygon(9% 0, 91% 0, 91% 77%, 76% 91%, 50% 100%, 24% 91%, 9% 77%);

          filter: drop-shadow(2px 3px 2px #3F303244);

        }

        .bc-knife-blade::before {

          content: "";

          position: absolute;

          top: 8px;

          left: 5px;

          width: 3px;

          height: 68px;

          border-radius: 4px;

          background: #FFFFFFCC;

        }

        .bc-knife-bolster {

          position: relative;

          z-index: 2;

          width: 36px;

          height: 11px;

          margin: -3px auto 0;

          border: 1px solid #8D5C50;

          border-radius: 4px;

          background: linear-gradient(90deg, #B92340, #F9C7D0, #B92340);

        }

        .bc-knife-handle {

          position: relative;

          width: 30px;

          height: 57px;

          margin: -1px auto 0;

          border: 2px solid #7E1D31;

          border-radius: 9px 9px 12px 12px;

          background: linear-gradient(90deg, #8E1E35, #D72F4B 30%, #EC647A 52%, #B92340 85%);

          box-shadow: inset 2px 0 3px #FFFFFF44, 2px 4px 4px #3F303244;

        }

        .bc-knife-handle::before {

          content: "";

          position: absolute;

          top: 10px;

          left: 5px;

          width: 16px;

          height: 3px;

          border-radius: 3px;

          background: #FFFFFF66;

          box-shadow: 0 12px 0 #FFFFFF44, 0 24px 0 #FFFFFF33;

        }

        @keyframes bc-knife-cut {

          0% {

            opacity: 0;

            transform: translateX(-50%) rotate(34deg) translateY(-90px);

          }

          18% { opacity: 1; }

          45% {

            opacity: 1;

            transform: translateX(-50%) rotate(12deg) translateY(8px);

          }

          72% {

            opacity: 1;

            transform: translateX(-50%) rotate(5deg) translateY(75px);

          }

          100% {

            opacity: 0;

            transform: translateX(-50%) rotate(-12deg) translateY(145px);

          }

        }

        .bc-button {

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          min-height: 49px;

          padding: 13px 25px;

          border: 0;

          border-radius: 999px;

          background: linear-gradient(135deg, #D72F4B, #B92340);

          color: white;

          font-size: 15px;

          font-weight: 800;

          cursor: pointer;

          box-shadow: 0 6px 0 #E9A0AC, 0 10px 20px #B923402B;

          transition: transform .18s ease, box-shadow .18s ease;

        }

        .bc-button:hover {

          transform: translateY(-2px);

          box-shadow: 0 8px 0 #E9A0AC, 0 12px 22px #B9234033;

        }

        .bc-button:active {

          transform: translateY(3px);

          box-shadow: 0 3px 0 #E9A0AC;

        }

        .bc-button:disabled {

          opacity: .75;

          cursor: wait;

        }

        /* Full-screen celebration is portalled to document.body. */

        .bc-fullscreen-party {

          position: fixed;

          inset: 0;

          z-index: 99999;

          width: 100%;

          height: 100%;

          height: 100dvh;

          overflow: hidden;

          pointer-events: auto;
          cursor: pointer;

          isolation: isolate;

        }

        .bc-fullscreen-party.is-dismissed {
          pointer-events: none;
        }

        .bc-rain-confetti {

          position: absolute;

          top: 0;

          width: 9px;

          height: 15px;

          border-radius: 3px;

          opacity: 0;

          animation: bc-confetti-fall var(--duration) cubic-bezier(.2,.65,.35,1) forwards;

          animation-delay: var(--delay);

          will-change: transform, opacity;

        }

        @keyframes bc-confetti-fall {

          0% {

            opacity: 0;

            transform: translate3d(0, -35px, 0) rotate(0);

          }

          8% { opacity: 1; }

          75% { opacity: 1; }

          100% {

            opacity: 0;

            transform: translate3d(var(--drift), 110vh, 0) rotate(var(--spin));

          }

        }

        .bc-rising-heart {

          position: absolute;

          opacity: 0;

          font-size: clamp(20px, 3vw, 32px);

          animation: bc-heart-rise var(--heart-duration) ease-out forwards;

          animation-delay: var(--heart-delay);

          filter: drop-shadow(0 3px 6px #D72F4B22);

          will-change: transform, opacity;

        }

        @keyframes bc-heart-rise {

          0% {

            opacity: 0;

            transform: translate3d(0, 0, 0) scale(.5) rotate(0);

          }

          12% { opacity: 1; }

          72% { opacity: 1; }

          100% {

            opacity: 0;

            transform: translate3d(var(--rise-x), -85vh, 0)

              scale(1.25) rotate(var(--heart-rotate));

          }

        }

        .bc-party-banner {

          position: absolute;

          left: 50%;

          top: 50%;

          width: min(88vw, 560px);

          padding: 30px 22px;

          border: 1px solid #F9C7D0;

          border-radius: 28px;

          background: #FFF5E9F2;

          box-shadow: 0 18px 70px #7E1D3133;

          opacity: 0;

          text-align: center;

          transform: translate(-50%, -42%) scale(.86);

          animation: bc-banner-pop 650ms cubic-bezier(.2,.8,.2,1) 180ms forwards;

        }

        .bc-party-kicker {

          display: block;

          margin-bottom: 12px;

          color: #B92340;

          font-size: 10px;

          font-weight: 900;

          letter-spacing: 2px;

        }

        .bc-party-title {

          color: #B92340;

          font-size: clamp(27px, 6vw, 48px);

          font-weight: 950;

          line-height: 1.08;

          text-wrap: balance;

          text-shadow: 0 3px 0 #F9C7D0;

        }

        .bc-party-subtitle {

          margin-top: 15px;

          color: #6E4148;

          font-size: clamp(13px, 2.5vw, 17px);

          line-height: 1.5;

        }

        .bc-party-stars {

          margin-top: 15px;

          color: #D72F4B;

          font-size: 19px;

        }

        .bc-close-hint {

          margin-top: 16px;

          color: #9B6970;

          font-size: 11px;

          font-weight: 650;

          letter-spacing: .2px;

        }

        .bc-party-banner {

          cursor: default;

        }

        @keyframes bc-banner-pop {

          0% {

            opacity: 0;

            transform: translate(-50%, -42%) scale(.75) rotate(-3deg);

          }

          70% {

            opacity: 1;

            transform: translate(-50%, -50%) scale(1.04) rotate(1deg);

          }

          100% {

            opacity: 1;

            transform: translate(-50%, -50%) scale(1) rotate(0);

          }

        }

        @media (max-width: 380px) {

          .bc-stage {

            transform: scale(.91);

            transform-origin: top center;

            margin-bottom: -14px;

          }

          .bc-party-banner {

            padding: 24px 15px;

          }

        }

        @media (prefers-reduced-motion: reduce) {

          .bc-flame,

          .bc-flame.blown,

          .bc-wind.active,

          .bc-knife.active,

          .bc-slice.visible,

          .bc-rain-confetti,

          .bc-rising-heart,

          .bc-party-banner {

            animation-duration: .01ms !important;

            animation-delay: 0ms !important;

          }

          .bc-top,

          .bc-middle,

          .bc-bottom {

            transition-duration: .01ms !important;

          }

        }

      `}</style>

      <h2 className="bc-heading">

        {isCut ? 'Happy 21st Birthday! 🎉' : 'Make a Birthday Wish 🎂'}

      </h2>

      <p className="bc-subtitle">

        {step === 'candles' || step === 'blowing'

          ? 'Close your eyes, make a wish, and blow out the candles!'

          : isCut

            ? 'A little slice of happiness, just for you ❤️'

            : 'Wish made? Now let’s cut your birthday cake!'}

      </p>

      <div className="bc-message" aria-live="polite">

        {step === 'candles' && '✨ Make a wish…'}

        {step === 'blowing' && 'Whoooosh! Blow out those candles 💨'}

        {step === 'ready' && 'Wish made! Now comes the best part 🍰'}

        {step === 'cutting' && 'One special slice, just for you…'}

        {isCut && '21 looks absolutely sweet on you! ❤️🥳'}

      </div>

      <div className="bc-stage">

        <div className={`bc-cake ${isCut ? 'is-cut' : ''}`}>

          <div className="bc-shadow" />

          <div className="bc-plate" />

          <div className="bc-bottom">

            <div className="bc-icing-bottom" />

            <div className="bc-drip" />

            <div className="bc-drip" />

            <div className="bc-drip" />

          </div>

          <div className="bc-middle">

            <div className="bc-icing-middle" />

          </div>

          <div className="bc-top">

            <div className="bc-top-icing" />

            {Array.from({ length: 16 }, (_, i) => (

              <span

                key={i}

                className="bc-sprinkle"

                style={{

                  left: `${10 + ((i * 37) % 80)}%`,

                  top: `${12 + ((i * 19) % 65)}%`,

                  background: sprinkleColors[i % sprinkleColors.length],

                  transform: `rotate(${i * 43}deg)`,

                }}

              />

            ))}

            <div className="bc-number">21</div>

          </div>

          <div className="bc-candles">

            {[0, 1, 2].map((candle) => (

              <div className="bc-candle" key={candle}>

                <div className="bc-wick" />

                {(step === 'candles' || step === 'blowing') && (

                  <div

                    className={`bc-flame ${step === 'blowing' ? 'blown' : ''}`}

                    style={{ animationDelay: `${candle * 0.12}s` }}

                  />

                )}

              </div>

            ))}

          </div>

          <div className={`bc-slice ${isCut ? 'visible' : ''}`}>

            <div className="bc-slice-top" />

            <div className="bc-slice-body" />

          </div>

          <div className={`bc-knife ${isCutting ? 'active' : ''}`}>

            <div className="bc-knife-blade" />

            <div className="bc-knife-bolster" />

            <div className="bc-knife-handle" />

          </div>

        </div>

        <div className={`bc-wind ${step === 'blowing' ? 'active' : ''}`}>

          〰 〰 💨

        </div>

      </div>

      {step === 'candles' && (

        <button

          type="button"

          className="bc-button"

          onClick={() => setStep('blowing')}

        >

          💨 Blow out the candles

        </button>

      )}

      {step === 'blowing' && (

        <button type="button" className="bc-button" disabled>

          Blowing the candles… ✨

        </button>

      )}

      {step === 'ready' && (

        <button

          type="button"

          className="bc-button"

          onClick={() => setStep('cutting')}

        >

          🔪 Cut the cake! 🍰

        </button>

      )}

      {step === 'cutting' && (

        <button type="button" className="bc-button" disabled>

          Cutting your slice… 🍰

        </button>

      )}

      {isCut && (

        <button type="button" className="bc-button" onClick={reset}>

          ↻ Celebrate again

        </button>

      )}

      {celebrationOverlay}

    </section>

  );

}
