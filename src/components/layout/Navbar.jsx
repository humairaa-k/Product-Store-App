import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSettings } from "../../features/context/settings/useSettings";
import { TotalItemsInCart } from "../../features/cart/cartSelectors";

import { ShoppingCart, Sun, Moon } from "lucide-react";
import Logo from '../../assets/logo.png'

import { useNavigate } from "react-router-dom";
import { Settings } from 'lucide-react';

function Navbar({ onCartClick }) {

  const totalItems = useSelector(TotalItemsInCart);
  const { state, dispatch } = useSettings();
  const isDark = state.theme === "dark";

  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 -mb-28">
       
        <div className={`flex w-full items-center justify-between rounded-full border px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.16)] backdrop-blur-2xl transition ${isDark ? "border-white/10 bg-[#0b0d11]/42 text-white" : "border-black/8 bg-white/70 text-slate-950"}`}>
          <Link to="/" className="flex items-center gap-3">
            <div>
              <img src={Logo} alt="logo"className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,#f2c48a,#9b623a)] text-sm font-black tracking-[0.24em] text-white shadow-[0_12px_30px_rgba(169,116,79,0.45)]" />
            </div>
            <span className="leading-tight">
              <span className="block text-[0.72rem] font-semibold tracking-[0.34em] uppercase text-[var(--text-secondary)]">
                Premium Store
              </span>
              <span className="block text-md font-black tracking-[0.11em]">
                TECHY
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className={`rounded-full border p-3 transition duration-300 hover:-translate-y-0.5 ${isDark ? "border-white/10 bg-white/6 text-white hover:border-white/20 hover:bg-white/10" : "border-black/10 bg-white/85 text-slate-900 hover:border-black/20 hover:bg-white"}`}
              onClick={() => dispatch({ type: "TOGGLE_THEME" })}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

             <button
              className={`rounded-full border p-3 transition duration-300 hover:-translate-y-0.5 ${isDark ? "border-white/10 bg-white/6 text-white hover:border-white/20 hover:bg-white/10" : "border-black/10 bg-white/85 text-slate-900 hover:border-black/20 hover:bg-white"}`}
              onClick={() => navigate('/settings')}
              aria-label="settings"
            >
             <Settings className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={onCartClick}
              className={`flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${isDark ? "border-white/10 bg-white/6 text-white hover:border-white/20 hover:bg-white/10" : "border-black/10 bg-white/85 text-slate-900 hover:border-black/20 hover:bg-white"}`}
            >
              <ShoppingCart className="h-5 w-5 text-[var(--accent-soft)]" />

              <span className="hidden sm:inline">Cart</span>
              <span className="rounded-full bg-[var(--accent)] px-2.5 py-1 text-xs font-bold text-white">
                {totalItems}
              </span>
            </button>
          </div>

       
          
        </div>
      </div>
    </header>
  );
}

export default Navbar;
