import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Pouches() {
  const pouches = getProductsByCategory('pouches');

  return (
    <section id="pouches" className="py-20 md:py-28 bg-cream-100/60">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          <div className="lg:sticky lg:top-28 self-start">
            <span className="text-xs uppercase tracking-widest text-blush-400 font-medium">
              The collection
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink-900 leading-tight">
              Handmade pouches
            </h2>
            <p className="mt-5 text-ink-700/80 leading-relaxed">
              Our pouches are made from soft cottons, canvases and satins —
              chosen for their texture and feel. Each piece is cut, stitched and
              finished by hand, with careful attention to linings, zippers and
              the small details that make a pouch last.
            </p>
            <p className="mt-4 text-ink-700/80 leading-relaxed">
              From everyday makeup pouches to drawstring organisers, they're
              made to be used, carried and loved.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Cotton', 'Canvas', 'Satin', 'Drawstring', 'Zippered'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-cream-50 border border-cream-300 px-3 py-1 text-xs text-ink-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {pouches.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
