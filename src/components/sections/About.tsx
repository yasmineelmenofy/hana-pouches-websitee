import { Scissors, Sparkles, Eye, Palette } from 'lucide-react';

const values = [
  {
    icon: Scissors,
    title: 'Handmade',
    text: 'Every pouch and scrunchie is cut and stitched by hand, one at a time.',
  },
  {
    icon: Sparkles,
    title: 'Carefully crafted',
    text: 'We take our time with each piece — from the first cut to the final stitch.',
  },
  {
    icon: Palette,
    title: 'Quality materials',
    text: 'Soft cottons, canvases and fabrics chosen for their feel and durability.',
  },
  {
    icon: Eye,
    title: 'Attention to detail',
    text: 'Linings, zippers, gathers and finishes — the small things matter to us.',
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
                src="https://images.pexels.com/photos/7218976/pexels-photo-7218976.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                alt="Hands sewing fabric"
                className="w-full aspect-[3/4] object-cover rounded-3xl shadow-card"
              />
              <img
                src="https://images.pexels.com/photos/30713763/pexels-photo-30713763.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                alt="Sewing threads and tools"
                className="w-full aspect-[3/4] object-cover rounded-3xl shadow-card mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 lg:right-4 rounded-2xl bg-cream-50 shadow-card px-5 py-3 max-w-[200px]">
              <p className="font-display text-lg text-ink-900 leading-snug">
                Made by hand,
                <br />
                <span className="text-blush-500 italic">one at a time.</span>
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-widest text-blush-400 font-medium">
              Our story
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink-900 leading-tight">
              About Hana Pouches
            </h2>
            <div className="mt-5 space-y-4 text-ink-700/80 leading-relaxed">
              <p>
                Hana Pouches is a small handmade business based in Egypt, born
                from a love of beautiful fabrics and the quiet satisfaction of
                making things by hand.
              </p>
              <p>
                What started as a personal passion for sewing pouches and
                scrunchies grew into a little brand — one that celebrates soft
                colours, careful stitching and the small details that make a
                handmade piece feel special.
              </p>
              <p>
                Every piece is made in small batches, so no two are exactly
                alike. We hope you find one that feels like it was made just for
                you.
              </p>
              <p className="text-sm text-ink-700/50 italic">
                [This section can be updated with the real story of Hana
                Pouches.]
              </p>
            </div>
          </div>
        </div>

        {/* values */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-center font-display text-3xl md:text-4xl text-ink-900">
            Why Hana Pouches
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
                <h4 className="mt-4 font-display text-xl text-ink-900">{v.title}</h4>
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
