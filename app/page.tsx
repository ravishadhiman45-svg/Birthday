'use client';

import { useState } from 'react';
import OpeningScreen from '@/components/OpeningScreen';
import FloatingElements from '@/components/FloatingElements';
import MusicToggle from '@/components/MusicToggle';
import InteractiveCake from '@/components/InteractiveCake';
import WishesSection from '@/components/WishesSection';

const notes = [
  ['⭐', 'the unexpected ones', 'Proof that some of the nicest people enter your life without any grand announcement.'],
  ['✨', 'real, even from afar', 'Not every meaningful friendship needs a thousand pictures together to be real.'],
  ['💫', 'the little moments', "Somewhere between random conversations and silly moments, you became someone I'm genuinely grateful for."],
  ['🌙', 'one day, hopefully', 'Here’s to more conversations, more laughter, and the day we can laugh about only knowing each other through a screen.'],
];
const stars = Array.from({ length: 90 }, (_, i) => ({
  id: i, left: `${(i * 37.17) % 100}%`, top: `${(i * 61.31) % 100}%`,
  size: `${1 + ((i * 13) % 3)}px`, delay: `${((i * 7) % 40) / 10}s`,
}));

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [finalNote, setFinalNote] = useState(false);

  return <>
    <FloatingElements />
    <MusicToggle />
    {!showMain && <OpeningScreen onOpen={() => { setShowMain(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />}
    {showMain && <main className="birthday-site relative z-10 overflow-hidden">
      <section className="birthday-hero relative flex min-h-[92svh] items-center justify-center overflow-hidden px-5 py-24 text-center">
        <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/><div className="hero-orb orb-three"/>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {Array.from({length:12},(_,i)=><span key={i} className="hero-heart" style={{left:`${7+((i*23)%87)}%`,top:`${9+((i*31)%78)}%`,animationDelay:`${i*.35}s`}}>♡</span>)}
          {Array.from({length:7},(_,i)=><span key={i} className="hero-sparkle" style={{left:`${12+i*12}%`,top:`${17+((i*19)%63)}%`,animationDelay:`${i*.55}s`}}>✦</span>)}
        </div>
        <div className="relative z-10 mx-auto max-w-4xl hero-copy">
          <div className="hero-eyebrow"><span/>28 NOVEMBER · A DAY FOR YOU<span/></div>
          <p className="font-caveat mb-3 text-2xl text-[#B92340] md:text-4xl">a little wish, just for you ♡</p>
          <h1 className="font-cormorant hero-heading mb-6">Happy 21st Birthday,<br/><span>Aryan!</span></h1>
          <p className="mx-auto mb-9 max-w-2xl text-base leading-8 text-[#594447] md:text-xl">a little corner of happiness, made especially for you.<br className="hidden sm:block"/> Because 21 deserves a little extra magic.</p>
          <a href="#cake" className="birthday-cta"><span>your birthday surprise</span><span className="cta-heart">♡</span></a>
          <div className="hero-scroll-note"><span className="scroll-line"/>scroll a little, birthday boy<span className="scroll-line"/></div>
        </div>
        <div className="hero-sticker sticker-left" aria-hidden="true"><span>made with</span><strong>♡</strong><span>care</span></div>
        <div className="hero-sticker sticker-right" aria-hidden="true"><span>chapter</span><strong>21</strong><span>begins</span></div>
      </section>

      <section id="cake" className="section-wrap cake-wrap">
        <div className="section-kicker">FIRST THINGS FIRST</div><h2 className="section-heading font-cormorant">make a little wish <span>♡</span></h2>
        <p className="section-intro">Close your eyes for a second. Pick a wish. Then let’s make it official.</p>
        <InteractiveCake/>
      </section>

      <section className="letter-section relative px-5 py-24 md:py-32">
        <div className="letter-glow"/>
        <article className="letter-paper relative mx-auto max-w-3xl">
          <div className="letter-topline"><span>FOR Aryan</span><span>✦ 28.11 ✦</span></div><div className="letter-seal">♡</div>
          <p className="font-caveat mb-3 text-3xl text-[#B92340] md:text-4xl">a little thing i don't say enough...</p>
          <h2 className="font-cormorant mb-7 text-4xl text-[#3F3032] md:text-5xl">Dear Aryan,</h2>
          <div className="letter-body">
            <p>Happy 21st birthday, you little human. ♡</p>
            <p>It’s funny how someone can become such an important part of your life even without ever meeting you in person. And somehow, you became one of those people for me.</p>
            <p>There’s something genuinely beautiful about the way you are — your innocence, your childish side, the way you express your emotions, and how you can talk about what you feel without pretending to be someone else.</p>
            <p>Maybe you don’t even realize it, but you’ve taught me something important: showing your emotions isn’t a weakness. It’s okay to care, to feel things deeply, and to be unapologetically yourself.</p>
            {letterOpen && <div className="letter-extra">
              <p>I might not tell you this often, and I might not always know how to express it, but I’m genuinely glad I got to know you.</p>
              <p>As you turn 21, I hope life is kind to you. I hope you find people who understand you, opportunities that excite you, dreams that come true, and reasons to smile even on ordinary days.</p>
              <p>I hope you never feel you have to hide the soft, innocent, slightly childish and beautiful parts of yourself just to fit into this world. Growing up doesn’t mean you have to lose them.</p>
              <p>And selfishly, I hope that through all the changes and different chapters of life, we continue to be friends. I hope there are still random conversations, stupid jokes, little moments, and a friendship that stays even as life changes.</p>
              <p>We haven’t met in person yet, but I’m really glad our paths crossed. Thank you for being you, Aryan.</p>
              <p>May this year bring you more happiness than you expect, more courage than you know you have, and more beautiful memories than you can count. You deserve good things. Always.</p>
            </div>}
          </div>
          <button className="letter-read-more" onClick={()=>setLetterOpen(v=>!v)} aria-expanded={letterOpen}>{letterOpen?'fold the letter back ↑':'there’s a little more… read the rest ↓'}</button>
          <p className="font-caveat mt-8 text-2xl text-[#B92340] md:text-3xl">— someone who’s really glad to have you as a friend ♡</p>
          <div className="letter-bottomline"><span>WITH A LITTLE EXTRA LOVE</span><span>♡</span></div>
        </article>
      </section>

      <section className="wishes-wrap"><div className="section-wrap">
        <div className="section-kicker">21 LITTLE WISHES</div><h2 className="section-heading font-cormorant">for your next chapter <span>✦</span></h2>
        <p className="section-intro">Twenty-one tiny wishes for the twenty-one-year-old you.</p><WishesSection/>
      </div></section>

      <section className="friendship-section px-5 py-24 md:py-32">
        <div className="mx-auto max-w-5xl"><div className="section-kicker">A LITTLE FRIENDSHIP CORNER</div>
          <h2 className="section-heading font-cormorant">some people are unexpectedly special <span>♡</span></h2>
          <p className="section-intro mb-14">And sometimes, the distance doesn’t make the connection any less real.</p>
          <div className="friendship-grid">{notes.map(([emoji,title,body],i)=><article key={title} className={`friendship-card friendship-card-${i+1}`}>
            <span className="friendship-emoji">{emoji}</span><h3 className="font-cormorant">{title}</h3><p>{body}</p><span className="card-corner">♡</span>
          </article>)}</div>
        </div>
      </section>

      <section className="finale-section relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-24 text-center">
        <div className="finale-stars" aria-hidden="true">{stars.map(s=><span key={s.id} style={{left:s.left,top:s.top,width:s.size,height:s.size,animationDelay:s.delay}}/>)}</div>
        <div className="finale-moon" aria-hidden="true"/>
        <div className="finale-content relative z-10 mx-auto max-w-3xl">
          <p className="font-caveat mb-5 text-3xl text-[#F9C7D0] md:text-4xl">hey, Aryan… one last thing ♡</p>
          <div className="finale-card"><p className="finale-title font-cormorant">Here’s to 21.</p>
            <p>To all the things you’ve already survived, all the things you’re about to discover, all the dreams you haven’t even dreamed yet, and all the beautiful versions of yourself you’re still becoming.</p>
            <p>I hope life gives you a thousand reasons to be happy.</p><p>Keep being soft. Keep being silly. Keep being YOU.</p>
            <p>The world needs more people who aren’t afraid to feel.</p><p>And I’m really glad one of those people is my friend.</p>
            <p className="finale-last-line">Happy birthday, Aryan. Here’s to a beautiful new chapter. ✨</p>
          </div>
          <div className="finale-number font-cormorant">21</div><p className="font-caveat text-2xl text-[#F9C7D0] md:text-3xl">made with a little extra love, just for you ♡</p>
          <button className="finale-button" onClick={()=>setFinalNote(v=>!v)}>{finalNote?'one last hug ♡':'one last little surprise ✨'}</button>
          {finalNote&&<p className="final-note">No matter how much life changes, I hope you always have reasons to laugh, people who truly see you, and a friend cheering for you from her little corner of the world. ♡</p>}
        </div>
      </section>
      <footer className="birthday-footer">a tiny website for a very special human <span>♡</span> made with care</footer>
    </main>}

    <style jsx global>{`
      :root{--cream:#FFF5E9;--ink:#3F3032}html{scroll-behavior:smooth}body{background:var(--cream)}
      .birthday-site{color:var(--ink);background:var(--cream)}
      .birthday-hero{background:radial-gradient(circle at 50% 35%,rgba(255,255,255,.86),transparent 36%),linear-gradient(135deg,#FFF5E9,#FADDE1 46%,#F9C7D0)}
      .hero-orb{position:absolute;border-radius:50%;pointer-events:none}.orb-one{width:330px;height:330px;top:-90px;left:-100px;background:#F36F832e}.orb-two{width:420px;height:420px;right:-140px;bottom:-150px;background:#D72F4B1f}.orb-three{width:160px;height:160px;right:15%;top:14%;background:#fff5e9a6}
      .hero-copy{animation:hero-rise 1s cubic-bezier(.2,.8,.2,1) both}.hero-eyebrow{display:flex;align-items:center;justify-content:center;gap:12px;color:#9F5663;font-size:10px;letter-spacing:.24em;font-weight:700;margin-bottom:25px}.hero-eyebrow span{width:25px;height:1px;background:#D99AA5}
      .hero-heading{font-size:clamp(3.5rem,9vw,7.8rem);line-height:.88;letter-spacing:-.045em;color:#B92340;text-shadow:0 5px #ffffff73}.hero-heading span{color:#D72F4B;font-style:italic}
      .birthday-cta{display:inline-flex;align-items:center;gap:20px;padding:15px 23px 15px 28px;border-radius:999px;background:#D72F4B;color:#FFF5E9;font-size:13px;letter-spacing:.04em;box-shadow:0 8px #E9A0AC,0 15px 35px #b923402e;transition:transform .25s,box-shadow .25s,background .25s}.birthday-cta:hover{transform:translateY(-4px);background:#B92340;box-shadow:0 12px #E9A0AC,0 20px 38px #b9234038}.cta-heart{font-size:22px}
      .hero-scroll-note{display:flex;justify-content:center;align-items:center;gap:10px;margin-top:40px;font-size:10px;letter-spacing:.13em;text-transform:uppercase;color:#A16D75}.scroll-line{width:24px;height:1px;background:#DCA8B1}
      .hero-heart{position:absolute;color:#D72F4B;font-size:clamp(18px,2.4vw,32px);opacity:0;animation:heart-drift 7s ease-in-out infinite}.hero-sparkle{position:absolute;color:#D89B4A;font-size:19px;opacity:0;animation:sparkle-in 3.8s ease-in-out infinite}
      .hero-sticker{position:absolute;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;width:92px;height:92px;border-radius:50%;background:#FFF9F1;border:1px solid #b9234029;box-shadow:0 8px 30px #71303d14;color:#A66C74;font-size:10px;letter-spacing:.08em;transform:rotate(-12deg)}.hero-sticker strong{font-family:Georgia,serif;color:#D72F4B;font-size:27px;line-height:1.2}.sticker-left{left:7%;bottom:17%}.sticker-right{right:7%;top:18%;transform:rotate(10deg)}
      .section-wrap{padding:100px 20px;text-align:center}.section-kicker{color:#B77A80;font-size:10px;font-weight:700;letter-spacing:.25em;margin-bottom:13px}.section-heading{font-size:clamp(2.7rem,6vw,5rem);line-height:1.02;color:#B92340;letter-spacing:-.03em}.section-heading span{color:#D6A04D;font-size:.72em}.section-intro{max-width:600px;margin:17px auto 40px;color:#82676A;line-height:1.8;font-size:15px}.cake-wrap{background:linear-gradient(#FFF5E9,#FADDE1)}
      .letter-section{background:linear-gradient(135deg,#FADDE1,#F9C7D0)}.letter-glow{position:absolute;inset:10% 15%;background:#fff5e947;filter:blur(60px);border-radius:50%;pointer-events:none}.letter-paper{padding:clamp(25px,6vw,65px);background:#fffdf8f2;border:1px solid #b9234029;box-shadow:0 25px 75px #70333f21;border-radius:4px 24px 4px 24px}.letter-paper:before{content:"";position:absolute;inset:10px;border:1px solid #d72f751f;pointer-events:none;border-radius:2px 17px 2px 17px}.letter-topline,.letter-bottomline{display:flex;justify-content:space-between;gap:15px;color:#B77A80;font-size:9px;letter-spacing:.2em}.letter-topline{padding-bottom:22px;border-bottom:1px solid #F1D7D7;margin-bottom:30px}.letter-bottomline{border-top:1px solid #F1D7D7;padding-top:20px;margin-top:35px}.letter-seal{position:absolute;top:65px;right:clamp(25px,6vw,65px);display:grid;place-items:center;width:44px;height:44px;border-radius:50%;background:#FADDE1;color:#B92340;font-size:24px}.letter-body{text-align:left;line-height:1.95;color:#655255;font-size:15px}.letter-body p{margin-bottom:18px}.letter-extra{animation:letter-unfold .5s ease both}.letter-read-more{margin-top:8px;padding:10px 0;color:#B92340;font-size:12px;border-bottom:1px solid #E9A0AC}
      .wishes-wrap{background:linear-gradient(#F9C7D0,#FFF5E9)}.friendship-section{background:radial-gradient(circle at 15% 10%,#ffffffa6,transparent 30%),linear-gradient(135deg,#FFF5E9,#FADDE1 55%,#F9C7D0);text-align:center}.friendship-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px;text-align:left}.friendship-card{position:relative;overflow:hidden;min-height:225px;padding:30px;background:#fffdf8cc;border:1px solid #d72f4724;border-radius:5px 25px 5px 25px;box-shadow:0 12px 32px #6f364210;transition:transform .3s,box-shadow .3s}.friendship-card:hover{transform:translateY(-7px) rotate(0deg)!important;box-shadow:0 22px 45px #6f36461f}.friendship-card-1{transform:rotate(-.7deg)}.friendship-card-2{transform:rotate(.7deg)}.friendship-card-3{transform:rotate(.6deg)}.friendship-card-4{transform:rotate(-.6deg)}.friendship-emoji{font-size:27px;display:block;margin-bottom:17px}.friendship-card h3{color:#B92340;font-size:29px;margin-bottom:9px}.friendship-card p{color:#775F62;line-height:1.8;font-size:14px;max-width:380px}.card-corner{position:absolute;right:17px;bottom:7px;font-size:25px;color:#E7A6AF}
      .finale-section{background:radial-gradient(ellipse at 50% 20%,#553444,#2A1D2A 43%,#160F1A);color:white}.finale-stars{position:absolute;inset:0;pointer-events:none}.finale-stars span{position:absolute;border-radius:50%;background:#FFF8E8;box-shadow:0 0 8px #fff8e8b3;animation:star-twinkle 3s ease-in-out infinite alternate}.finale-moon{position:absolute;top:8%;right:10%;width:74px;height:74px;border-radius:50%;background:#FFF0C7;box-shadow:0 0 55px #ffe09e59}.finale-card{margin:28px 0 22px;padding:clamp(24px,5vw,48px);background:#ffffff0e;border:1px solid #fff5e92e;border-radius:25px;backdrop-filter:blur(12px);box-shadow:0 20px 70px #0002}.finale-title{color:#F9C7D0;font-size:clamp(2.8rem,6vw,4rem);margin-bottom:20px}.finale-card p{color:#fff5e9dc;line-height:1.9;margin-bottom:15px;font-size:15px}.finale-card .finale-last-line{color:#F9C7D0;font-weight:600;margin-top:25px}.finale-number{font-size:clamp(7rem,20vw,12rem);line-height:1;color:#F7E6A5;text-shadow:0 0 30px #f7e6a547;animation:number-glow 4s ease-in-out infinite}.finale-button{margin-top:28px;padding:12px 22px;border:1px solid #f9c7d080;border-radius:999px;color:#F9C7D0;font-size:12px;transition:background .25s,transform .25s}.finale-button:hover{background:#f9c7d01a;transform:translateY(-2px)}.final-note{max-width:540px;margin:22px auto 0;padding:18px;border:1px dashed #f9c7d059;border-radius:15px;color:#FFF5E9;line-height:1.8;animation:hero-rise .5s ease both}.birthday-footer{padding:22px 15px;text-align:center;background:#160F1A;color:#BDA6AE;font-size:10px;letter-spacing:.12em}.birthday-footer span{color:#F36F83;padding:0 7px}
      @keyframes hero-rise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}@keyframes heart-drift{0%,100%{opacity:0;transform:translateY(10px) scale(.8) rotate(-10deg)}25%,70%{opacity:.24}50%{opacity:.5;transform:translateY(-24px) scale(1.1) rotate(8deg)}}@keyframes sparkle-in{0%,100%{opacity:0;transform:scale(.5)}50%{opacity:.7;transform:scale(1.15) rotate(45deg)}}@keyframes star-twinkle{from{opacity:.25;transform:scale(.75)}to{opacity:1;transform:scale(1.25)}}@keyframes number-glow{0%,100%{text-shadow:0 0 25px #f7e6a540}50%{text-shadow:0 0 55px #f7e6a599,0 0 90px #f9c7d02e}}@keyframes letter-unfold{from{opacity:.3;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      @media(max-width:640px){.hero-sticker{width:65px;height:65px;font-size:8px;opacity:.85}.hero-sticker strong{font-size:21px}.sticker-left{left:4%;bottom:8%}.sticker-right{right:4%;top:8%}.hero-heading{font-size:clamp(3.25rem,15vw,5rem)}.hero-eyebrow{font-size:8px;letter-spacing:.16em;gap:7px}.section-wrap{padding:76px 18px}.friendship-grid{grid-template-columns:1fr;gap:15px}.friendship-card{min-height:0;padding:25px}.letter-seal{top:57px;right:25px;width:34px;height:34px;font-size:19px}.letter-topline{font-size:8px}.finale-moon{width:45px;height:45px;top:5%;right:7%}.finale-card p{font-size:14px}}
      @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}
    `}</style>
  </>;
}
