import { Instagram as IgIcon, ArrowUpRight } from 'lucide-react';
import { CONTACT } from '@/data/site';

const galleryImages = [
  'https://images.pexels.com/photos/21283036/pexels-photo-21283036.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/7897135/pexels-photo-7897135.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/4856502/pexels-photo-4856502.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/3850531/pexels-photo-3850531.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/36393002/pexels-photo-36393002.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/6044145/pexels-photo-6044145.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
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
            Join us on Instagram
          </h2>
          <p className="mt-4 text-ink-700/70 leading-relaxed">
            See new pieces, behind-the-scenes making and customer love over on{' '}
            {CONTACT.instagramHandle}. These placeholder images can be swapped
            for real product photos.
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
                alt="Instagram post"
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
