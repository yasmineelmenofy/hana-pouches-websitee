import { Scissors, Sparkles, Heart, Palette } from 'lucide-react';

const values = [
  {
    icon: Scissors,
    title: 'Handmade',
    text: 'Each piece is carefully made by hand, giving every pouch and scrunchie its own character.',
  },
  {
    icon: Sparkles,
    title: 'Made with care',
    text: 'We believe the little details matter, from the stitching to the finishing touches.',
  },
  {
    icon: Palette,
    title: 'Quality & style',
    text: 'Thoughtfully chosen colours, fabrics and designs made to be both beautiful and useful.',
  },
  {
    icon: Heart,
    title: 'Made for you',
    text: 'Pieces designed to add a little beauty, colour and charm to your everyday.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream-100/60">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/products/about/WhatsApp Image 2026-08-20 at 7.19.31 PM.jpeg"
                alt="Handmade sewing"
                className="w-full aspect-[3/4] object-cover rounded-3xl shadow-card"
              />

              <img
                src="/products/about/WhatsApp Image 2026-08-20 at 7.19.35 PM.jpeg"
                alt="Sewing tools and fabrics"
                className="w-full aspect-[3/4] object-cover rounded-3xl shadow-card mt-8"
              />
            </div>

            <div className="absolute -bottom-4 -right-2 lg:right-4 rounded-2xl bg-cream-50 shadow-card px-5 py-3 max-w-[200px]">
              <p className="font-display text-lg text-ink-900 leading-snug">
                Quality & style,
                <br />
                <span className="text-blush-500 italic">
                  in every stitch.
                </span>
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-widest text-blush-400 font-medium">
              About the brand
            </span>

            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink-900 leading-tight">
              Made with care,
              <br />
              made for you.
            </h2>

            <div className="mt-5 space-y-4 text-ink-700/80 leading-relaxed">
              <p>
                Hana Pouches creates handmade pouches, bags and scrunchies
                designed to bring together quality, style and everyday
                practicality.
              </p>

              <p>
                Every piece is made with care, with an appreciation for
                beautiful details, soft colours and thoughtful design.
              </p>

              <p>
                From getting ready in the morning to adding a finishing touch
                to your look, our pieces are made to become part of your
                everyday moments.
              </p>
            </div>
          </div>
        </div>

        {/* values */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-center font-display text-3xl md:text-4xl text-ink-900">
            What we believe in
          </h3>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-cream-50 border border-cream-200 p-6 text-center shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-blush-500" />
                </div>

                <h4 className="mt-4 font-display text-xl text-ink-900">
                  {v.title}
                </h4>

                <p className="mt-2 text-sm text-ink-700/70 leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}