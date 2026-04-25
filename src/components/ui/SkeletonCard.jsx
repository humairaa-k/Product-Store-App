const SkeletonCard = ({ view }) => {
  const isGrid = view === "grid";

  return (
    <article
      // layout
      className={
        isGrid
          ? "flex h-full w-full max-w-sm flex-col overflow-hidden rounded-[30px] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[0_24px_70px_-28px_rgba(0,0,0,0.6)] backdrop-blur-lg"
          : "flex w-full max-w-6xl flex-row items-center gap-6 overflow-hidden rounded-[30px] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[0_24px_70px_-28px_rgba(0,0,0,0.6)] backdrop-blur-lg p-4"
      }
    >
      {/* Img placeholder */}
      <div
        className={
          isGrid
            ? "flex items-center justify-center px-6 pt-6 pb-4"
            : "flex items-center justify-center shrink-0"
        }
      >
        <div className="h-40 w-40 rounded-[20px] shimmer" />
      </div>

      {/* Content placeholder */}
      <div className="mx-4 mb-4 flex flex-1 flex-col rounded-[24px] border border-[var(--border-color)] bg-[var(--card-bg)] p-5 backdrop-blur-xl gap-3">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <div className="h-4 w-2/3 rounded-full shimmer" />
          <div className="h-6 w-16 rounded-full shimmer" />
        </div>

        {/* Description lines */}
        <div className="flex flex-col gap-2 mt-1">
          <div className="h-3 w-full rounded-full shimmer" />
          <div className="h-3 w-5/6 rounded-full shimmer" />
          <div className="h-3 w-4/6 rounded-full shimmer" />
        </div>

        {/* buttons */}
        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="h-9 w-28 rounded-full shimmer" />
          <div className="h-9 w-24 rounded-full shimmer" />
        </div>
      </div>

      <style>{`
        .shimmer {
          background: linear-gradient(
            90deg,
            color-mix(in srgb, var(--text-primary) 6%, transparent) 25%,
            color-mix(in srgb, var(--accent-soft) 12%, transparent) 50%,
            color-mix(in srgb, var(--text-primary) 6%, transparent) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.6s infinite;
        }

        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </article>
  );
};

export default SkeletonCard;
