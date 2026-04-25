const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-main)]/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* glow */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-16 w-16 rounded-full bg-[var(--accent-soft)]/30 blur-xl" />

          <div
            className="relative h-12 w-12 rounded-full border-2 border-[var(--border-color)] border-t-[var(--accent-soft)]"
            style={{ animation: "spin 0.9s linear infinite" }}
          />
        </div>

        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[var(--text-secondary)]">
          Loading…
        </p>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
