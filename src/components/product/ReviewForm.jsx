import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { submitReview } from "../../services/productsApi"

const ReviewForm = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // using mutation for sending data
  const { mutate, isPending, isError } = useMutation({
    mutationFn: submitReview,
    onSuccess: () => {
      setSubmitted(true);
      setComment("");
      setRating(0);
    },
  });

  const handleSubmit = () => {
    if (!rating || !comment.trim()) return;
    mutate({ productId, review: { rating, comment } });
  };

  // Success state
  if (submitted) {
    return (
      <div className="rounded-[34px] border border-[var(--accent-soft)]/40 bg-[var(--accent)]/8 p-6 text-center backdrop-blur-2xl sm:p-7">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent-soft)]/30 bg-[var(--accent)]/10">
          <Star className="h-5 w-5 fill-[var(--accent-soft)] text-[var(--accent-soft)]" />
        </div>
        <p className="text-sm font-bold text-[var(--text-primary)]">Review submitted!</p>
        <p className="mt-1 text-xs text-[var(--text-secondary)]">Thanks for your feedback.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 rounded-full border border-[var(--border-color)] px-5 py-2 text-xs font-semibold text-[var(--text-secondary)] transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
        >
          Write another
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[34px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-6 shadow-[0_28px_70px_-44px_rgba(0,0,0,0.78)] backdrop-blur-2xl sm:p-7">

      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
        Leave a review
      </div>

      {/* Star rating */}
      <div className="mt-4 flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            className="transition-transform hover:scale-110"
          >
            <Star
              className={`h-6 w-6 transition-colors ${
                star <= (hoveredRating || rating)
                  ? "fill-[var(--accent-soft)] text-[var(--accent-soft)]"
                  : "text-[var(--border-color)]"
              }`}
            />
          </button>
        ))}
        {rating > 0 && (
          <span className="ml-2 text-xs font-semibold text-[var(--text-secondary)]">
            {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][rating]}
          </span>
        )}
      </div>

      {/* comment box */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Share your thoughts about this product..."
        rows={3}
        className="mt-4 w-full resize-none rounded-[20px] border border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-4 text-sm text-[var(--text-primary)] outline-none backdrop-blur-xl transition placeholder:text-[var(--text-secondary)] focus:border-[var(--accent-soft)]"
      />

      {/* error msg */}
      {isError && (
        <p className="mt-2 text-xs font-semibold text-red-400">
          Something went wrong. Please try again.
        </p>
      )}

      {/* submit button */}
      <button
        onClick={handleSubmit}
        disabled={!rating || !comment.trim() || isPending}
        className="mt-4 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--accent-soft)] disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
      >
        {isPending ? "Submitting..." : "Submit Review"}
      </button>
    </div>
  );
};

export default ReviewForm;
