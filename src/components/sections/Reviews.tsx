import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  "/reviews/1.jpeg",
  "/reviews/2.jpeg",
  "/reviews/3.jpeg",
  "/reviews/4.jpeg",
  "/reviews/5.jpeg",
  "/reviews/6.jpeg",
  "/reviews/7.jpeg",
  "/reviews/8.jpeg",
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;
  const maxIndex = Math.max(reviews.length - visibleCount, 0);

  const previous = () => {
    setCurrentIndex((current) => (current === 0 ? maxIndex : current - 1));
  };

  const next = () => {
    setCurrentIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-blush-400 font-medium">
            Customer love
          </span>

          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink-900">
            What our customers say
          </h2>

          <p className="mt-4 text-ink-700/70 leading-relaxed">
            A little glimpse of the lovely messages we receive from our
            customers.
          </p>
        </div>

        {/* Reviews carousel */}
        <div className="mt-12 flex items-center gap-3 md:gap-6">
          {/* Previous */}
          <button
            type="button"
            onClick={previous}
            aria-label="Previous reviews"
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-cream-100 border border-cream-200 shadow-soft flex items-center justify-center text-ink-800 hover:bg-cream-200 hover:text-blush-500 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Images */}
          <div className="flex-1 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
              {reviews
                .slice(currentIndex, currentIndex + visibleCount)
                .map((image, index) => (
                  <div
                    key={image}
                    className="mx-auto w-full max-w-[260px] overflow-hidden rounded-3xl bg-cream-100 border border-cream-200 shadow-soft"
                  >
                    <img
                      src={image}
                      alt={`Customer review ${currentIndex + index + 1}`}
                      className="w-full h-auto block"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="Next reviews"
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-cream-100 border border-cream-200 shadow-soft flex items-center justify-center text-ink-800 hover:bg-cream-200 hover:text-blush-500 transition-colors"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Indicators */}
        {reviews.length > visibleCount && (
          <div className="mt-7 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show reviews ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-6 bg-blush-500"
                    : "w-2 bg-cream-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
