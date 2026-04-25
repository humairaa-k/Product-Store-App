import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const ErrorState = ({ message = "Something went wrong.", onRetry }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-main)]/60 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-sm overflow-hidden rounded-[32px] border border-[var(--border-color)] bg-[var(--card-bg)] p-8 text-center shadow-[0_32px_80px_-24px_rgba(0,0,0,0.6)] backdrop-blur-2xl">

        {/* gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--accent-soft)_14%,transparent),transparent_60%)]" />

        <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent-soft)]/30 bg-[var(--accent)]/10">
          <AlertTriangle className="h-6 w-6 text-[var(--accent-soft)]" />
        </div>

        <p className="relative text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--accent-soft)]">
          Error
        </p>

        <h2 className="relative mt-2 text-lg font-black text-[var(--text-primary)]">
          Could not load data
        </h2>

        <p className="relative mt-2 text-sm leading-6 text-[var(--text-secondary)]">
          {message}
        </p>


        <div className="relative mt-6 flex flex-col gap-3">
          {onRetry && (
            <button
              onClick={onRetry}
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--accent-soft)]"
              >
              Try again
            </button>
          )}
       
        </div>
      </div>
    </div>
  );
};

export default ErrorState;
