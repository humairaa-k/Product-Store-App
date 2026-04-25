import { useSettings } from "../features/context/settings/useSettings";
import { LayoutGrid, List, Palette, Layout } from "lucide-react";
import { Sun, Moon } from "lucide-react";

function Settings() {
  const { state, dispatch } = useSettings();
  const isDark = state.theme === "dark";
  

  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--bg-main)]">
     
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,color-mix(in_srgb,var(--accent-soft)_12%,transparent),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(88,123,255,0.07),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--text-primary)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--text-primary)_6%,transparent)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">

        {/* header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[var(--text-secondary)] uppercase backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            Preferences
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-transparent bg-[linear-gradient(135deg,var(--text-primary),color-mix(in_srgb,var(--text-primary)_55%,transparent))] bg-clip-text sm:text-4xl">
            App Settings
          </h1>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Customize how Techy looks and feels for you.
          </p>
        </div>

        <div className="flex flex-col gap-5">

          {/* theme card */}
          <div className="rounded-[28px] border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow-[0_24px_70px_-28px_rgba(0,0,0,0.5)] backdrop-blur-lg">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)]/15 text-[var(--accent-soft)]">
                <Palette className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--text-primary)]">Theme</p>
                <p className="text-xs text-[var(--text-secondary)]">Choose your preferred colour scheme</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
          
               <button
                onClick={() => state.theme !== "dark" && dispatch({ type: "TOGGLE_THEME" })}
                className={`relative flex flex-col items-center gap-3 rounded-[20px] border px-4 py-5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
                  state.theme === "dark"
                    ? "border-[var(--accent-soft)] bg-[var(--accent)]/10 text-[var(--text-primary)] shadow-[0_0_0_1px_var(--accent-soft)]"
                    : "border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:border-[var(--accent-soft)]/50"
                }`}
              >
                {state.theme === "dark" && (
                  <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[var(--accent-soft)]" />
                )}
                <Moon className="h-6 w-6" />
                Dark
              </button>

              <button
                onClick={() => state.theme !== "light" && dispatch({ type: "TOGGLE_THEME" })}
                className={`relative flex flex-col items-center gap-3 rounded-[20px] border px-4 py-5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
                  state.theme === "light"
                    ? "border-[var(--accent-soft)] bg-[var(--accent)]/10 text-[var(--text-primary)] shadow-[0_0_0_1px_var(--accent-soft)]"
                    : "border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:border-[var(--accent-soft)]/50"
                }`}
              >
                {state.theme === "light" && (
                  <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[var(--accent-soft)]" />
                )}
                <Sun className="h-6 w-6" />
                Light
              </button>
            </div>
          </div>

          {/* layout card */}
          <div className="rounded-[28px] border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow-[0_24px_70px_-28px_rgba(0,0,0,0.5)] backdrop-blur-lg">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)]/15 text-[var(--accent-soft)]">
                <Layout className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--text-primary)]">Product Layout</p>
                <p className="text-xs text-[var(--text-secondary)]">How products are displayed on the home page</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">

              <button
                onClick={() => dispatch({ type: "SET_VIEW", payload: "grid" })}
                className={`relative flex flex-col items-center gap-3 rounded-[20px] border px-4 py-5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
                  state.view === "grid"
                    ? "border-[var(--accent-soft)] bg-[var(--accent)]/10 text-[var(--text-primary)] shadow-[0_0_0_1px_var(--accent-soft)]"
                    : "border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:border-[var(--accent-soft)]/50"
                }`}
                  >
                {state.view === "grid" && (
                  <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[var(--accent-soft)]" />
                )}
                <LayoutGrid className="h-6 w-6" />
                Grid
              </button>

            
              <button
                onClick={() => dispatch({ type: "SET_VIEW", payload: "list" })}
                className={`relative flex flex-col items-center gap-3 rounded-[20px] border px-4 py-5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
                  state.view === "list"
                    ? "border-[var(--accent-soft)] bg-[var(--accent)]/10 text-[var(--text-primary)] shadow-[0_0_0_1px_var(--accent-soft)]"
                    : "border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:border-[var(--accent-soft)]/50"
                }`}
              >
                {state.view === "list" && (
                  <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[var(--accent-soft)]" />
                )}
                <List className="h-6 w-6" />
                List
              </button>
            </div>
          </div>

          {/* state summary  */}
          <div className="rounded-[28px] border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow-[0_24px_70px_-28px_rgba(0,0,0,0.5)] backdrop-blur-lg">
            <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[var(--text-secondary)] uppercase">
              Current Preferences
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-secondary)]">Theme</span>
                <span className="rounded-full border border-[var(--accent-soft)] bg-[var(--accent-soft)]/15 px-3 py-1 text-xs font-bold capitalize text-[var(--accent-soft)]">
                  {state.theme}
                </span>
              </div>

            <div className="h-px bg-[var(--border-color)]" />
               <div className="flex items-center justify-between">
                
                <span className="text-sm text-[var(--text-secondary)]">Layout</span>
                <span className="rounded-full border border-[var(--accent-soft)] bg-[var(--accent-soft)]/15 px-3 py-1 text-xs font-bold capitalize text-[var(--accent-soft)]">
                  {state.view}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Settings;