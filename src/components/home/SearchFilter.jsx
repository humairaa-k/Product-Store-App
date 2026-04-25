export const SearchFilter = ({
  search,
  setSearch,
  selectedCategory,
  setCategory,
  categories,
}) => {
  return (
    <div>
      <div className="mt-8 rounded-[32px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] p-5 shadow-[0_28px_70px_-45px_rgba(0,0,0,0.75)] backdrop-blur-2xl sm:p-6">
        <div className="flex flex-col gap-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            Search and filter
          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-[24px] border border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-4 text-sm text-[var(--text-primary)] outline-none backdrop-blur-xl transition placeholder:text-[var(--text-secondary)] focus:border-[var(--accent-soft)]"
          />

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-5 py-3 text-sm font-semibold capitalize transition ${
                  selectedCategory === cat
                    ? "border border-[var(--accent-soft)] bg-[var(--accent)] text-white"
                    : "border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
