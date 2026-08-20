import { Instagram as IgIcon, ArrowUpRight } from 'lucide-react';
import { CONTACT } from '@/data/site';

const galleryImages = [
  "public/products/littlemore/1.jpeg",
  "public/products/littlemore/2.jpeg",
  "public/products/littlemore/3.jpeg",
  "public/products/littlemore/4.jpeg",
  "public/products/littlemore/6.jpeg",
  "public/products/littlemore/7.jpeg",

];

export default function InstagramSection() {
  return (
    <section className="py-20 md:py-28 bg-cream-100/60">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-blush-400 font-medium">
            Follow along
          </span>

          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink-900">
            A little more Hana
          </h2>

          <p className="mt-4 text-ink-700/70 leading-relaxed">
            Follow {CONTACT.instagramHandle} for new pieces, handmade details,
            styling inspiration and more.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {galleryImages.map((src, i) => (
            <a
              key={i}
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="relative group aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt={`Hana Pouches Instagram ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/40 transition-colors flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blush-400 to-peach-300 text-white font-medium px-7 py-3.5 shadow-soft hover:shadow-card transition-shadow"
          >
            <IgIcon className="w-5 h-5" />
            Follow {CONTACT.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}