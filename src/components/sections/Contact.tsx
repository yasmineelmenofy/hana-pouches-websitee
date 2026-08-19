import { Instagram, MessageCircle, ShoppingBag, Truck } from 'lucide-react';
import { CONTACT } from '@/data/site';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blush-50 via-cream-50 to-lavender-100 p-8 md:p-14 text-center shadow-soft">
          <span className="text-xs uppercase tracking-widest text-blush-400 font-medium">
            Let's get in touch
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink-900 leading-tight">
            How to order
          </h2>
          <p className="mt-5 text-ink-700/80 leading-relaxed max-w-xl mx-auto">
            Ordering is simple — just send us a message on Instagram or
            WhatsApp with the piece you'd like, and we'll take it from there. We
            ship across Egypt.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blush-400 hover:bg-blush-500 text-white font-medium px-7 py-3.5 transition-colors shadow-soft"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </a>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-50 hover:bg-cream-100 text-ink-800 font-medium px-7 py-3.5 border border-cream-300 transition-colors"
            >
              <Instagram className="w-4 h-4 text-blush-500" />
              Message on Instagram
            </a>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-50 hover:bg-cream-100 text-ink-800 font-medium px-7 py-3.5 border border-cream-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-sage-300" />
              WhatsApp us
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-ink-700/60">
            <Truck className="w-4 h-4" />
            <span>Shipping across Egypt · {CONTACT.shippingInfo.split('.')[0]}.</span>
          </div>
          <p className="mt-3 text-xs text-ink-700/40 italic">
            [Add your WhatsApp number and any shipping details here.]
          </p>
        </div>
      </div>
    </section>
  );
}
