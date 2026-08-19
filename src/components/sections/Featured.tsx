import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { featuredProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Featured() {
  return (
    <section id="featured" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-blush-400 font-medium">
            Curated favourites
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink-900">
            Featured pieces
          </h2>
          <p className="mt-4 text-ink-700/70 leading-relaxed">
            A selection of our most-loved pouches and scrunchies — each one
            handmade, no two exactly alike.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/#pouches"
            className="inline-flex items-center gap-2 text-blush-500 font-medium hover:gap-3 transition-all"
          >
            See all products
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
