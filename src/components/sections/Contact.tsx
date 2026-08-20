import { Instagram, MessageCircle, ShoppingBag, Truck } from 'lucide-react';
import { CONTACT } from '@/data/site';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blush-50 via-cream-50 to-lavender-100 p-8 md:p-14 text-center shadow-soft">
          <span className="text-xs uppercase tracking-widest text-blush-400 font-medium">
            We'd love to hear from you
          </span>

          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink-900 leading-tight">
            Find your favourite piece
          </h2>

          <p className="mt-5 text-ink-700/80 leading-relaxed max-w-xl mx-auto">
            Ready to order? Send us a message with the piece you'd love, and
            we'll help you with availability and delivery.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">

            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-50 hover:bg-cream-100 text-ink-800 font-medium px-7 py-3.5 border border-cream-300 transition-colors"
            >
              <Instagram className="w-4 h-4 text-blush-500" />
              Message on Instagram
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-ink-700/60">
            <Truck className="w-4 h-4" />
            <span>Shipping across Egypt</span>
          </div>
        </div>
      </div>
    </section>
  );
}