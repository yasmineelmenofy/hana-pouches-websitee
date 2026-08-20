import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingBag,
  Instagram,
  MessageCircle,
  Check,
} from "lucide-react";

import { getProductBySlug, products } from "@/data/products";
import { CONTACT } from "@/data/site";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();

  const product = slug ? getProductBySlug(slug) : undefined;

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  /*
   * Find the currently selected colour object.
   * Its images are the images displayed in the gallery.
   */
  const selectedColorData = useMemo(() => {
    if (!product || !selectedColor) {
      return undefined;
    }

    return product.colors.find((color) => color.name === selectedColor);
  }, [product, selectedColor]);

  /*
   * Images belonging to the selected colour.
   */
  const currentImages = selectedColorData?.images ?? [];

  /*
   * Current selected size/price.
   */
  const selectedVariant = product?.variants.find(
    (variant) => variant.size === selectedSize,
  );

  const selectedPrice = selectedVariant?.price ?? null;

  /*
   * Reset selections whenever the product changes.
   */
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);

    if (product) {
      setSelectedSize(product.variants[0]?.size ?? null);
      setSelectedColor(product.colors[0]?.name ?? null);
    } else {
      setSelectedSize(null);
      setSelectedColor(null);
    }
  }, [slug]);

  /*
   * When the colour changes, start from that colour's first image.
   */
  useEffect(() => {
    setActiveImage(0);
  }, [selectedColor]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center pt-20">
        <h1 className="font-display text-4xl text-ink-900">
          Product not found
        </h1>

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

  const orderUrl = CONTACT.whatsappUrl;

  return (
    <div className="pt-20 md:pt-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-8 md:py-12">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-ink-700/60 hover:text-blush-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all products
        </Link>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* =====================================================
    IMAGE GALLERY
====================================================== */}
          <div className="flex flex-col-reverse lg:flex-row items-start gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible scrollbar-hide">
              {currentImages.map((img, i) => (
                <button
                  key={`${img}-${i}`}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden border-2 transition-colors ${
                    activeImage === i
                      ? "border-blush-400"
                      : "border-cream-200 hover:border-cream-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} - ${selectedColor} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 self-start rounded-3xl overflow-hidden shadow-card bg-cream-100">
              {currentImages.length > 0 ? (
                <img
                  src={currentImages[activeImage]}
                  alt={`${product.name} - ${selectedColor ?? ""}`}
                  className="w-full h-auto object-contain block"
                />
              ) : (
                <div className="w-full aspect-[4/5] flex items-center justify-center text-ink-700/50">
                  No image available
                </div>
              )}
            </div>
          </div>

          {/* =====================================================
              PRODUCT INFORMATION
          ====================================================== */}
          <div className="lg:py-4">
            <span className="text-xs uppercase tracking-widest text-blush-400 font-medium">
              {product.category}
            </span>

            <h1 className="mt-2 font-display text-4xl md:text-5xl text-ink-900 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mt-4">
              {selectedPrice !== null ? (
                <p className="text-xl font-medium text-blush-500">
                  EGP {selectedPrice}
                </p>
              ) : (
                <p className="text-xl font-medium text-blush-500">
                  Price available on request
                </p>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 text-ink-700/80 leading-relaxed">
              {product.longDescription}
            </p>

            {/* =================================================
                SIZE
            ================================================== */}
            {product.variants.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-ink-900 uppercase tracking-wider">
                    Size
                  </h3>

                  {selectedSize && (
                    <span className="text-sm text-ink-700/60">
                      {selectedSize}
                    </span>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.size}
                      type="button"
                      onClick={() => setSelectedSize(variant.size)}
                      className={`rounded-full px-4 py-2 text-sm border transition-colors ${
                        selectedSize === variant.size
                          ? "bg-blush-400 border-blush-400 text-white"
                          : "bg-cream-50 border-cream-300 text-ink-700 hover:border-blush-300"
                      }`}
                    >
                      {variant.size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* =================================================
                COLOUR
            ================================================== */}
            {product.colors.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-ink-900 uppercase tracking-wider">
                    Colour
                  </h3>

                  {selectedColor && (
                    <span className="text-sm text-ink-700/60">
                      {selectedColor}
                    </span>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border transition-colors ${
                        selectedColor === color.name
                          ? "bg-cream-200 border-blush-400 text-ink-900"
                          : "bg-cream-100 border-cream-200 text-ink-700 hover:border-cream-300"
                      }`}
                    >
                      {selectedColor === color.name && (
                        <Check className="w-3.5 h-3.5 text-blush-500" />
                      )}

                      {color.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* =================================================
                ORDER BUTTONS
            ================================================== */}
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-100 hover:bg-cream-200 text-ink-800 font-medium px-7 py-3.5 border border-cream-300"
              >
                <Instagram className="w-4 h-4 text-blush-500" />
                Ask on Instagram
              </a>
            </div>

            {/* Order explanation */}
            <div className="mt-6 flex items-start gap-2 text-sm text-ink-700/60">
              <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />

              <p>
                To order, send us a message on WhatsApp or Instagram with the
                name of this piece, your preferred size and colour. We'll
                confirm availability and shipping.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            RELATED PRODUCTS
        ====================================================== */}
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
