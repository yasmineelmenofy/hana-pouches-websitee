import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
      {/* decorative blobs */}
      <div className="absolute top-20 -left-16 w-72 h-72 rounded-full bg-blush-100/60 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-peach-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-fadeUp text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream-100 border border-cream-200 px-4 py-1.5 text-xs font-medium text-ink-700 uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-blush-400" />
              Handmade in Egypt
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ink-900 text-balance">
              Little pouches,
              <br />
              <span className="text-blush-500 italic">made with love.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-700/80 leading-relaxed max-w-md mx-auto lg:mx-0">
              Handmade makeup pouches, fabric bags and scrunchies — each one
              cut, stitched and finished by hand. Soft, practical, and made to
              be kept.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="/#pouches"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blush-400 hover:bg-blush-500 text-white font-medium px-7 py-3.5 transition-colors shadow-soft"
              >
                Shop Pouches
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/#scrunchies"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-100 hover:bg-cream-200 text-ink-800 font-medium px-7 py-3.5 border border-cream-300 transition-colors"
              >
                Shop Scrunchies
              </a>
            </div>
          </div>

          <div className="relative animate-fadeUp" style={{ animationDelay: '0.15s' }}>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/21283036/pexels-photo-21283036.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                  alt="Handmade floral makeup pouch"
                  className="w-full aspect-[3/4] object-cover rounded-3xl shadow-card"
                />
                <img
                  src="https://images.pexels.com/photos/7897135/pexels-photo-7897135.jpeg?auto=compress&cs=tinysrgb&h=700&w=700"
                  alt="Silk scrunchies flat lay"
                  className="w-full aspect-square object-cover rounded-3xl shadow-soft"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/3850531/pexels-photo-3850531.jpeg?auto=compress&cs=tinysrgb&h=700&w=700"
                  alt="Soft blue drawstring pouch"
                  className="w-full aspect-square object-cover rounded-3xl shadow-soft"
                />
                <img
                  src="https://images.pexels.com/photos/4856502/pexels-photo-4856502.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                  alt="Fabric pouch with flower"
                  className="w-full aspect-[3/4] object-cover rounded-3xl shadow-card"
                />
              </div>
            </div>
            <div className="hidden lg:flex absolute -bottom-5 -left-5 items-center gap-2 rounded-full bg-cream-50 shadow-card px-5 py-3 animate-floaty">
              <span className="w-2 h-2 rounded-full bg-blush-400" />
              <span className="text-sm font-medium text-ink-700">New arrivals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
