import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Bags() {
  const bags = getProductsByCategory("bags");

  return (
    <section id="bags" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-blush-400 font-medium">
            Made to carry
          </span>

          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink-900">
            Handmade bags
          </h2>

          <p className="mt-4 text-ink-700/70 leading-relaxed">
            Thoughtfully handmade bags designed to be practical, comfortable,
            and beautiful enough to carry wherever your day takes you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {bags.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
