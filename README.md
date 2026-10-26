# Happy 21st Birthday, Aaryan! 🎂✨

A beautiful, dreamy, interactive birthday website built with Next.js and Tailwind CSS, created as a heartfelt gift for Aaryan's 21st birthday on November 28th.

## 🎨 What's Inside

This website is a magical, Pinterest-inspired birthday experience featuring:

- **Opening Surprise**: A dreamy welcome screen with floating stars and clouds
- **Interactive Birthday Cake**: A fully functional cake with 21 candles that you can blow out and cut! 🎂
- **Heartfelt Letter**: A personal birthday message expressing genuine friendship
- **21 Wishes**: Interactive wish cards - click each one to reveal a special wish
- **Friendship Corner**: Scrapbook-style notes celebrating your special friendship
- **Grand Finale**: A beautiful nighttime scene with the final birthday message
- **Optional Music**: Background music toggle for added atmosphere

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Running

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## 🎵 Adding Birthday Music (Optional)

The website includes an optional music player. To add music:

1. Find a royalty-free instrumental "Happy Birthday" melody or gentle background music
2. Save it as `birthday-music.mp3` in the `public` folder
3. The music toggle button will appear in the top-right corner

**Free music resources:**
- [Incompetech](https://incompetech.com/music/royalty-free/) - Royalty-free music
- [YouTube Audio Library](https://studio.youtube.com/) - Free music downloads
- [Pixabay Music](https://pixabay.com/music/) - 100% free, no attribution
- [Bensound](https://www.bensound.com/) - Royalty-free music

The website works perfectly without music too!

## 📱 Features

### Interactive Elements
- **Blow Out Candles**: Click "make a wish ✨" to blow out all 21 candles with smoke effects
- **Cut the Cake**: After blowing candles, click "cut the cake 🍰" for confetti celebration
- **21 Hidden Wishes**: Click each wish card to reveal a special message
- **Music Toggle**: Optional background music control (top-right corner)
- **Smooth Animations**: Floating balloons, twinkling stars, and dreamy transitions throughout
- **Opening Experience**: Beautiful introduction screen before entering the main site

### Design Highlights
- Dreamy Pinterest-inspired aesthetic
- Soft pastel color palette (powder blue, butter yellow, cream, lavender)
- Hand-written style typography with elegant serifs
- Fully responsive - beautiful on mobile, tablet, and desktop
- Accessibility features (reduced motion support, keyboard navigation)
- Optimized performance with Next.js and Tailwind CSS

## 🎁 Deployment Options

### Deploy to Vercel (Recommended - Free & Easy)
Vercel is the company behind Next.js and offers the best deployment experience:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or simply:
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com/)
3. Import your repository
4. Deploy with one click!

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

### Deploy to GitHub Pages
Not recommended for Next.js apps. Use Vercel or Netlify instead for the best experience.

## 💝 Customization Tips

If you want to personalize it further:

- **Letter**: Edit the letter text in `app/page.tsx` (Letter Section)
- **Wishes**: Modify the wishes array in `components/WishesSection.tsx`
- **Colors**: Adjust CSS variables in `app/globals.css`
- **Friendship Notes**: Edit the notes array in `app/page.tsx` (Friendship Corner section)
- **Fonts**: Change fonts in `app/layout.tsx`

## 🛠️ Technical Stack

- **Framework**: Next.js 16.4.3 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Google Fonts (Cormorant Garamond, Caveat, Quicksand)
- **Deployment**: Optimized for Vercel, Netlify, or any Node.js hosting

## 📂 Project Structure

```
Birthday/
├── app/
│   ├── layout.tsx        # Root layout with fonts
│   ├── page.tsx          # Main birthday page
│   └── globals.css       # Global styles & theme
├── components/
│   ├── OpeningScreen.tsx    # Welcome screen
│   ├── FloatingElements.tsx # Background animations
│   ├── MusicToggle.tsx      # Music control
│   ├── InteractiveCake.tsx  # Birthday cake feature
│   └── WishesSection.tsx    # 21 wishes cards
├── public/
│   └── birthday-music.mp3   # Optional audio file
└── package.json
```

## 📸 Sections Overview

1. **Opening Screen**: Beautiful introduction with floating stars
2. **Hero Section**: Main birthday greeting with floating balloons
3. **Interactive Cake**: The centerpiece with 21 candles you can actually blow out!
4. **Letter Section**: Heartfelt birthday message on paper-like design
5. **21 Wishes**: Clickable cards revealing wishes for the year ahead
6. **Friendship Corner**: Scrapbook-style notes about your friendship
7. **Grand Finale**: Nighttime sky scene with final message and glowing "21"

## 🎯 Performance Features

- **Server Components**: Optimized rendering with React Server Components
- **Image Optimization**: Automatic image optimization with Next.js
- **Code Splitting**: Automatic code splitting for faster loads
- **Static Generation**: Pre-rendered pages for instant loading
- **CSS-in-JS**: Scoped styles with zero runtime overhead

## ❤️ The Heart Behind It

This website was created with genuine care and affection for a very special platonic friend. It celebrates:
- The beauty of long-distance friendships
- The courage to express emotions authentically
- The innocence and childlike joy that makes Aaryan special
- The hope for many more years of friendship

## 🐛 Troubleshooting

**Music not playing?**
- Make sure the audio file is named `birthday-music.mp3` and placed in the `public` folder
- Check browser console for any errors
- Some browsers block autoplay - user must click the music button first

**Build errors?**
- Make sure you're using Node.js 18 or higher
- Delete `node_modules` and `.next` folders, then run `npm install` again
- Check that all dependencies are installed correctly

**Styling issues?**
- Make sure Tailwind CSS is properly configured
- Clear browser cache
- Try running `npm run dev` in a fresh terminal

## 📝 Credits

**Fonts:**
- Cormorant Garamond (elegant serif for headings)
- Caveat (handwritten style)
- Quicksand (clean, friendly sans-serif)

All fonts are loaded from Google Fonts and are free to use.

**Built with:**
- Next.js by Vercel
- Tailwind CSS
- TypeScript

---

**Made with a little extra love, just for Aaryan ♡**

*Happy 21st Birthday! May this year bring you endless happiness, courage, and beautiful memories.*

---

## 📄 License

This is a personal gift project. Feel free to use it as inspiration for your own birthday surprises! 💝
