
'use client';

export default function OpeningScreen({
  onOpen,
}: {
  onOpen: () => void;
}) {
  return (
    <main className="birthday-screen relative min-h-screen overflow-hidden">
      {/* Background shapes */}
      <div className="pink-blob pink-blob-one" />
      <div className="pink-blob pink-blob-two" />
      <div className="pink-blob pink-blob-three" />

      {/* Header */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="text-3xl text-[#B92340]">♡</span>
          <span className="font-caveat text-xl font-bold text-[#B92340] md:text-2xl">
            a little birthday universe
          </span>
        </div>

        <div className="hidden items-center gap-7 text-sm text-[#713D4B] md:flex">
          <span className="rounded-full border border-[#D72F4B]/30 px-4 py-2">
            28 November ✧
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid min-h-[78vh] max-w-7xl items-center gap-8 px-6 pb-12 pt-6 md:grid-cols-2 md:px-12 lg:gap-4">
        {/* Text */}
        <div className="hero-copy relative z-10 text-center md:text-left">
          <p className="mb-5 font-caveat text-2xl text-[#D72F4B] md:text-3xl">
            a little wish, just for you ♡
          </p>

          <h1 className="font-cormorant text-6xl font-bold leading-[0.98] tracking-tight text-[#B92340] sm:text-7xl lg:text-[88px]">
            Happy 21st,
            <br />
            <span className="relative inline-block">
              Aryan Sharma
              <span className="absolute -bottom-2 left-0 h-1 w-3/4 -rotate-2 rounded-full bg-[#F36F83]" />
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-md text-base leading-8 tracking-wide text-[#65444B] md:mx-0 md:text-lg">
            a little corner of happiness,
            <br className="hidden sm:block" />
            made especially for you.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <button
              onClick={onOpen}
              className="surprise-button group flex items-center gap-4 rounded-full bg-[#D72F4B] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#B92340]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#B92340] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#D72F4B]/25"
            >
              open your little surprise
              <span className="text-xl transition-transform group-hover:translate-x-1">
                ♡ →
              </span>
            </button>
          </div>

          <div className="mt-9 flex items-center justify-center gap-3 text-xs tracking-[0.2em] text-[#B92340]/70 md:justify-start">
            <span className="h-px w-9 bg-[#D72F4B]/40" />
            A NEW CHAPTER BEGINS
            <span>✧</span>
          </div>
        </div>

        {/* Birthday illustration */}
        <div className="cake-scene relative mx-auto flex w-full max-w-[510px] items-center justify-center">
          <div className="cake-halo absolute h-[330px] w-[330px] rounded-full sm:h-[400px] sm:w-[400px]" />

          {/* Balloons */}
          <div className="balloon balloon-one">♡</div>
          <div className="balloon balloon-two">♡</div>
          <div className="balloon balloon-three">♡</div>

          {/* Decorative sparkles */}
          <span className="sparkle sparkle-one">✦</span>
          <span className="sparkle sparkle-two">✧</span>
          <span className="sparkle sparkle-three">✦</span>
          <span className="sparkle sparkle-four">♡</span>

          {/* Cake */}
          <div className="cake relative z-10 mt-20 w-[290px] sm:w-[360px]">
            {/* Candles */}
            <div className="relative z-20 mx-auto mb-[-3px] flex h-[100px] w-[80%] items-end justify-center gap-3">
              {[0, 1, 2, 3, 4, 5, 6].map((candle) => (
                <div
                  key={candle}
                  className="candle relative h-12 w-2.5 rounded-t-sm sm:h-14"
                >
                  <span className="flame absolute -top-4 left-1/2 h-3.5 w-2.5 -translate-x-1/2 rounded-full" />
                </div>
              ))}
            </div>

            <div className="cake-top relative z-10 flex h-16 items-center justify-center rounded-[50%] border-[5px] border-white">
              <span className="font-cormorant text-5xl font-bold text-[#D72F4B]">
                21
              </span>
              <span className="absolute left-[15%] top-2 text-lg">🍓</span>
              <span className="absolute right-[15%] top-2 text-lg">🍓</span>
            </div>

            <div className="cake-layer cake-layer-one relative -mt-5 h-16 rounded-b-[30px] border-b-8 border-[#F5A1B0]">
              <div className="cake-drips absolute -top-1 left-0 flex w-full justify-around">
                {Array.from({ length: 9 }, (_, i) => (
                  <span
                    key={i}
                    className="h-5 w-5 rounded-b-full bg-[#FFF5E9]"
                  />
                ))}
              </div>
              <span className="absolute inset-x-0 top-7 text-center text-xl tracking-[0.6em] text-[#D72F4B]">
                ♥ ♥ ♥
              </span>
            </div>

            <div className="cake-layer cake-layer-two relative -mt-2 h-16 rounded-b-[28px] border-b-8 border-[#F5A1B0]">
              <div className="absolute inset-x-0 top-4 text-center text-2xl text-[#D72F4B]">
                ♡ ♡ ♡
              </div>
            </div>

            {/* Cake stand */}
            <div className="relative z-10 mx-auto h-5 w-[112%] -translate-x-[5%] rounded-[50%] border-b-4 border-[#E9A0AC] bg-[#FFF5E9] shadow-md" />
            <div className="mx-auto h-10 w-20 bg-gradient-to-b from-[#FFF5E9] to-[#F4B3BE]" />
            <div className="mx-auto h-3 w-32 rounded-[50%] bg-[#FFF5E9] shadow-md" />
          </div>

          {/* Gifts */}
          <div className="gift gift-one">
            <span>♡</span>
          </div>
          <div className="gift gift-two">
            <span>✧</span>
          </div>

          <p className="absolute bottom-0 right-0 rotate-6 rounded-sm bg-[#FFF5E9] px-4 py-3 font-caveat text-lg text-[#B92340] shadow-md sm:bottom-2 sm:right-1">
            21 looks good on you! ♡
          </p>
        </div>
      </section>

      <style jsx>{`
        .birthday-screen {
          background: linear-gradient(135deg, #fadfe3 0%, #f9c7d0 55%, #fbd5dc 100%);
          isolation: isolate;
        }

        .pink-blob {
          position: absolute;
          z-index: -1;
          pointer-events: none;
        }

        .pink-blob-one {
          width: 340px;
          height: 260px;
          top: -150px;
          left: -100px;
          background: #f36f83;
          border-radius: 45% 55% 60% 40%;
          transform: rotate(-25deg);
          opacity: 0.8;
        }

        .pink-blob-two {
          width: 360px;
          height: 170px;
          bottom: -100px;
          left: -70px;
          background: #f36f83;
          border-radius: 50%;
          transform: rotate(15deg);
        }

        .pink-blob-three {
          width: 420px;
          height: 180px;
          bottom: -130px;
          right: -100px;
          background: #e85c76;
          border-radius: 50%;
          transform: rotate(-15deg);
        }

        .cake-scene {
          min-height: 450px;
        }

        .cake-halo {
          background: radial-gradient(circle, #fff5e9 0%, #f8b6c3 65%, transparent 70%);
          opacity: 0.85;
        }

        .cake-top {
          background: #fff5e9;
          box-shadow: inset 0 -7px 0 #f8c5ce, 0 5px 0 #f3a3b2;
        }

        .cake-layer {
          background: linear-gradient(180deg, #fff5e9, #ffe5e8);
          box-shadow: inset 0 -5px 0 #f8bac6, 0 6px 0 #ed91a4;
        }

        .candle {
          background: repeating-linear-gradient(
            135deg,
            #fff5e9 0px,
            #fff5e9 5px,
            #e94e69 5px,
            #e94e69 9px
          );
          box-shadow: 0 2px 3px #b9234030;
        }

        .flame {
          background: #ffbd48;
          box-shadow: 0 0 12px #ffbd4880;
          animation: flicker 1s ease-in-out infinite alternate;
        }

        .balloon {
          position: absolute;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 78px;
          border-radius: 50% 50% 45% 45%;
          font-size: 28px;
          color: #fff5e9;
          box-shadow: inset -8px -5px 0 #0000000c, inset 8px 5px 0 #ffffff30;
        }

        .balloon::after {
          content: '';
          position: absolute;
          top: 76px;
          left: 50%;
          width: 1px;
          height: 95px;
          background: #c94b64a0;
        }

        .balloon-one {
          top: 42px;
          left: 8%;
          background: #e94e69;
          transform: rotate(-12deg);
          animation: float 4s ease-in-out infinite;
        }

        .balloon-two {
          top: 75px;
          right: 8%;
          background: #fff5e9;
          color: #e94e69;
          transform: rotate(10deg);
          animation: float 4.5s ease-in-out infinite reverse;
        }

        .balloon-three {
          top: 0;
          right: 32%;
          width: 50px;
          height: 63px;
          background: #d72f4b;
          animation: float 5s ease-in-out infinite;
        }

        .sparkle {
          position: absolute;
          color: #d72f4b;
          animation: twinkle 2.5s ease-in-out infinite;
        }

        .sparkle-one { top: 30%; left: 2%; font-size: 28px; }
        .sparkle-two { top: 15%; right: 18%; font-size: 30px; }
        .sparkle-three { bottom: 25%; left: 15%; font-size: 23px; }
        .sparkle-four { top: 45%; right: 0; font-size: 30px; }

        .gift {
          position: absolute;
          z-index: 12;
          bottom: 32px;
          width: 64px;
          height: 56px;
          border: 3px solid #fff5e9;
          background: linear-gradient(90deg, #e94e69 40%, #fff5e9 40%, #fff5e9 57%, #e94e69 57%);
          box-shadow: 0 8px 12px #b9234020;
        }

        .gift::before {
          content: '';
          position: absolute;
          top: -13px;
          left: -5px;
          width: 68px;
          height: 13px;
          background: #d72f4b;
          border-radius: 3px;
        }

        .gift span {
          position: absolute;
          top: -37px;
          left: 19px;
          color: #d72f4b;
          font-size: 30px;
        }

        .gift-one { left: 2%; transform: rotate(-10deg); }
        .gift-two { right: 3%; bottom: 45px; transform: rotate(8deg) scale(1.1); }

        @keyframes float {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -12px; }
        }

        @keyframes flicker {
          from { transform: translateX(-50%) scale(1) rotate(-4deg); }
          to { transform: translateX(-50%) scale(1.12) rotate(4deg); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @media (max-width: 767px) {
          .cake-scene {
            min-height: 390px;
            transform: scale(0.88);
            transform-origin: top center;
            margin-bottom: -35px;
          }

          .balloon-one { left: 4%; }
          .balloon-two { right: 3%; }
          .gift-one { left: 0; }
          .gift-two { right: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .birthday-screen * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
