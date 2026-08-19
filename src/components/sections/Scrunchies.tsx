import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Scrunchies() {
  const scrunchies = getProductsByCategory('scrunchies');

  return (
    <section id="scrunchies" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-blush-400 font-medium">
            Soft & playful
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink-900">
            Scrunchies
          </h2>
          <p className="mt-4 text-ink-700/70 leading-relaxed">
            Silky, soft and gentle on your hair. Our scrunchies come in a range
            of colours and fabrics — from dusty rose to lavender — each one
            gathered and stitched by hand for a full, romantic shape.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {scrunchies.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* colour palette showcase */}
        <div className="mt-14 rounded-3xl bg-gradient-to-br from-blush-50 via-cream-100 to-lavender-100 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl text-ink-900">
                A colour for every mood
              </h3>
              <p className="mt-2 text-sm text-ink-700/70 max-w-sm">
                From soft pastels to deeper tones — find the scrunchie that
                matches your style.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Dusty rose', color: 'bg-blush-300' },
                { name: 'Blush', color: 'bg-blush-200' },
                { name: 'Pearl', color: 'bg-cream-200' },
                { name: 'Lavender', color: 'bg-lavender-300' },
                { name: 'Mauve', color: 'bg-lavender-400' },
                { name: 'Ivory', color: 'bg-cream-100' },
              ].map((c) => (
                <div key={c.name} className="flex flex-col items-center gap-2">
                  <div className={`w-14 h-14 rounded-full ${c.color} shadow-soft`} />
                  <span className="text-xs text-ink-700/70">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
