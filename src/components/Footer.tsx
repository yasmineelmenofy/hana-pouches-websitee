import { Link } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';
import { CONTACT } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-100">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="font-display text-3xl text-cream-50">
              Hana <span className="text-blush-300 italic">Pouches</span>
            </h3>
            <p className="mt-3 text-sm text-cream-200/70 max-w-xs">
              Handmade pouches, bags and scrunchies made with love in Egypt.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream-200/50 mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/#pouches" className="hover:text-blush-300 transition-colors">
                  Pouches
                </a>
              </li>
              <li>
                <a href="/#scrunchies" className="hover:text-blush-300 transition-colors">
                  Scrunchies
                </a>
              </li>
              <li>
                <a href="/#featured" className="hover:text-blush-300 transition-colors">
                  Featured
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream-200/50 mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-blush-300 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  {CONTACT.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-blush-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream-200/50 mb-4">
              Shipping
            </h4>
            <p className="text-sm text-cream-200/70 leading-relaxed">
              {CONTACT.shippingInfo}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream-200/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-200/50">
            © {new Date().getFullYear()} Hana Pouches. All rights reserved.
          </p>
          <p className="text-xs text-cream-200/50">
            Handmade in Egypt · Ships nationwide
          </p>
        </div>
      </div>
    </footer>
  );
}
