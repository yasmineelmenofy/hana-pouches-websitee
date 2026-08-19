import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Instagram, MessageCircle, Check } from 'lucide-react';
import { getProductBySlug, products } from '@/data/products';
import { CONTACT } from '@/data/site';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center pt-20">
        <h1 className="font-display text-4xl text-ink-900">Product not found</h1>
        <p className="mt-3 text-ink-700/70">
          We couldn't find that piece. It may have sold out or moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-blush-400 text-white font-medium px-6 py-3"
        >
          <ArrowLeft className="w-4 h-4" />
          Back home
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const orderUrl = `${CONTACT.whatsappUrl}`;

  return (
    <div className="pt-20 md:pt-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-8 md:py-12">
        {/* breadcrumb */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-ink-700/60 hover:text-blush-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all products
        </Link>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex lg:flex-col gap-3 lg:gap-3 overflow-x-auto lg:overflow-visible scrollbar-hide">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden border-2 transition-colors ${
                    activeImage === i
                      ? 'border-blush-400'
                      : 'border-cream-200 hover:border-cream-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 rounded-3xl overflow-hidden shadow-card bg-cream-100">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>

          {/* info */}
          <div className="lg:py-4">
            <span className="text-xs uppercase tracking-widest text-blush-400 font-medium">
              {product.category}
            </span>
            <h1 className="mt-2 font-display text-4xl md:text-5xl text-ink-900 leading-tight">
              {product.name}
            </h1>
            <p className="mt-3 text-xl font-medium text-blush-500">
              {product.price}
            </p>

            <p className="mt-6 text-ink-700/80 leading-relaxed">
              {product.longDescription}
            </p>

            {product.colors && product.colors.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium text-ink-900 uppercase tracking-wider">
                  Available colours
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="inline-flex items-center gap-2 rounded-full bg-cream-100 border border-cream-200 px-4 py-2 text-sm text-ink-700"
                    >
                      <Check className="w-3.5 h-3.5 text-sage-300" />
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={orderUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blush-400 hover:bg-blush-500 text-white font-medium px-7 py-3.5 transition-colors shadow-soft"
              >
                <ShoppingBag className="w-4 h-4" />
                Order this piece
              </a>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-100 hover:bg-cream-200 text-ink-800 font-medium px-7 py-3.5 border border-cream-300 transition-colors"
              >
                <Instagram className="w-4 h-4 text-blush-500" />
                Ask on Instagram
              </a>
            </div>

            <div className="mt-6 flex items-start gap-2 text-sm text-ink-700/60">
              <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                To order, send us a message on WhatsApp or Instagram with the
                name of this piece. We'll confirm availability and shipping.
              </p>
            </div>
          </div>
        </div>

        {/* related */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-display text-3xl md:text-4xl text-ink-900 text-center">
              You may also like
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
