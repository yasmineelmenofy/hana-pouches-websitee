import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: '[Customer name]',
    text: 'The pouches are even more beautiful in person. You can really feel the quality and the care that goes into each one.',
    rating: 5,
  },
  {
    name: '[Customer name]',
    text: 'I ordered a scrunchie for myself and ended up gifting three more to friends. The colours are gorgeous and so soft on the hair.',
    rating: 5,
  },
  {
    name: '[Customer name]',
    text: 'Such a lovely little brand. Quick to reply on Instagram and the packaging was so thoughtful. Will definitely order again.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-blush-400 font-medium">
            Kind words
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink-900">
            What our customers say
          </h2>
          <p className="mt-4 text-ink-700/70 leading-relaxed">
            Placeholder reviews for now — these will be replaced with real
            customer feedback.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="relative rounded-3xl bg-cream-100 border border-cream-200 p-7 shadow-soft"
            >
              <Quote className="w-8 h-8 text-blush-200 mb-4" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-blush-400 text-blush-400"
                  />
                ))}
              </div>
              <p className="text-ink-700/90 leading-relaxed italic">
                "{review.text}"
              </p>
              <p className="mt-5 text-sm font-medium text-ink-900">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
