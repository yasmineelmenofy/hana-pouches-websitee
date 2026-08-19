import { Link } from 'react-router-dom';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const categoryLabel: Record<string, string> = {
  pouches: 'Pouch',
  scrunchies: 'Scrunchie',
  bags: 'Bag',
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-2xl bg-cream-100 shadow-soft transition-shadow duration-300 group-hover:shadow-card">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-cream-50/90 backdrop-blur px-3 py-1 text-[11px] font-medium text-ink-700 uppercase tracking-wider">
          {categoryLabel[product.category]}
        </span>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm text-white font-medium">View details →</span>
        </div>
      </div>
      <div className="mt-4 px-1">
        <h3 className="font-display text-xl text-ink-900 leading-snug">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-ink-700/70 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>
        <p className="mt-2 text-sm font-medium text-blush-500">
          {product.price}
        </p>
      </div>
    </Link>
  );
}
