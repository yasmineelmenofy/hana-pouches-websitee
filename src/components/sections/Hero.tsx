import { ArrowRight, Heart } from 'lucide-react';

export default function Hero() {
return ( <section className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28"> <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-blush-100/50 blur-3xl" /> <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-peach-100/40 blur-3xl" />

  <div className="relative mx-auto max-w-6xl px-5 md:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="animate-fadeUp text-center lg:text-left">
        <span className="inline-flex items-center gap-2 rounded-full bg-cream-100 border border-cream-200 px-4 py-1.5 text-xs font-medium text-ink-700 uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 text-blush-400" />
          Handmade in Egypt
        </span>

        <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ink-900 text-balance">
          Made with care,
          <br />
          <span className="text-blush-500 italic">styled for you.</span>
        </h1>

        <p className="mt-6 text-lg text-ink-700/80 leading-relaxed max-w-md mx-auto lg:mx-0">
          Handmade makeup pouches and scrunchies, thoughtfully crafted to
          bring a little more beauty to your everyday.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
          <a
            href="/#pouches"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blush-400 hover:bg-blush-500 text-white font-medium px-7 py-3.5 transition-colors shadow-soft"
          >
            Explore the collection
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/#about"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-100 hover:bg-cream-200 text-ink-800 font-medium px-7 py-3.5 border border-cream-300 transition-colors"
          >
            Our story
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-sm text-ink-700/60">
          <span className="w-1.5 h-1.5 rounded-full bg-sage-300" />
          Shipping across Egypt
        </div>
      </div>

      <div
        className="relative animate-fadeUp"
        style={{ animationDelay: '0.15s' }}
      >
        <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img
              src="/products/Hero/WhatsApp Image 2026-08-19 at 10.22.12 PM (2).jpeg"
              alt="Handmade floral makeup pouch"
              className="w-full aspect-[3/4] object-cover rounded-3xl shadow-card"
            />

            <img
              src="/products/Hero/WhatsApp Image 2026-08-19 at 10.22.12 PM (1).jpeg"
              alt="Silk scrunchie"
              className="w-full aspect-square object-cover rounded-3xl shadow-soft"
            />
          </div>

          <div className="space-y-4 pt-8">
            <img
              src="/products/Hero/WhatsApp Image 2026-08-19 at 10.00.00 PM.jpeg"
              alt="Soft blue handmade pouch"
              className="w-full aspect-square object-cover rounded-3xl shadow-soft"
            />

            <img
              src="/products/Hero/WhatsApp Image 2026-08-19 at 10.22.12 PM (3).jpeg"
              alt="Fabric pouch detail"
              className="w-full aspect-[3/4] object-cover rounded-3xl shadow-card"
            />
          </div>
        </div>

        <div className="hidden lg:flex absolute -bottom-5 -left-5 items-center gap-2 rounded-full bg-cream-50 shadow-card px-5 py-3 animate-floaty">
          <span className="w-2 h-2 rounded-full bg-blush-400" />
          <span className="text-sm font-medium text-ink-700">
            Quality in every stitch
          </span>
        </div>
      </div>
    </div>
  </div>
</section>


);
}
