import showcaseImg from "../../assets/girl.png"

export const Showcase = () => {
  return (
    <section className="relative overflow-hidden border-b border-[color:color-mix(in_srgb,var(--text-primary)_10%,transparent)] bg-[var(--bg-main)] text-[var(--text-primary)] -mt-12">
      {/* gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,color-mix(in_srgb,var(--accent-soft)_20%,transparent),transparent_28%),radial-gradient(circle_at_78%_28%,rgba(88,123,255,0.12),transparent_30%),linear-gradient(180deg,color-mix(in_srgb,var(--bg-main)_35%,transparent),var(--bg-main))]" />
      {/* grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--text-primary)_8%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--text-primary)_8%,transparent)_1px,transparent_1px)] [background-size:44px_44px]" />
      
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--text-primary)_26%,transparent),transparent)]" />
        {/* left */}
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-0 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:pt-10">
        <div className="max-w-2xl pb-8 lg:pb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-color)] bg-[color:color-mix(in_srgb,var(--card-bg)_90%,transparent)] px-4 py-2 text-sm font-medium tracking-[0.24em] text-[color:color-mix(in_srgb,var(--text-secondary)_88%,transparent)] uppercase shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            Elevated Everyday Tech
          </div>

          <h1 className="mt-7 max-w-xl text-4xl leading-[0.95] font-extrabold tracking-[-0.04em] text-transparent bg-[linear-gradient(135deg,var(--text-primary),color-mix(in_srgb,var(--text-primary)_58%,transparent))] bg-clip-text sm:text-5xl lg:text-6xl">
              Discover Your Next Favorite Tech.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
           Explore premium gadgets with modern design and powerful performance.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-[linear-gradient(135deg,#d8a772,#9b623a)] px-7 py-3.5 text-sm font-semibold tracking-[0.18em] text-white uppercase shadow-[0_18px_40px_rgba(169,116,79,0.38)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(169,116,79,0.5)]">
              Shop Now
            </button>
          </div>

        </div>

      {/* right */}
        <div className="relative flex items-end justify-center self-end lg:justify-end">
          <div className="absolute bottom-0 left-[12%] right-[8%] h-24 rounded-[100%] bg-[radial-gradient(circle,color-mix(in_srgb,var(--text-primary)_14%,transparent),transparent_62%)]" />

          <div className="relative flex w-full max-w-[560px] items-end justify-center px-2 pt-2">
            <img
              src={showcaseImg}
              alt="Premium tech showcase model"
              className="relative z-10 max-h-[610px] w-full self-end object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.28)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
