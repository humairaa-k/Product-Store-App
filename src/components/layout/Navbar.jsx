import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../features/cart/cartSlice";
import { SettingsContext } from "../../features/context/settings/SettingsContext";
import { useContext } from "react";
import { useSettings } from "../../features/context/settings/useSettings";

import { ShoppingCart, Sun, Moon } from "lucide-react";

function Navbar({ onCartClick }) {
  const cartCount = useSelector(selectCartCount);
  const { state,dispatch } = useSettings();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-bold text-slate-900">
          TECHY
        </Link>

    <div className="flex gap-3">
      
        <button className="
        rounded-full p-2 m-2 shadow-md cursor-pointer
        backdrop-blur-md 
        transition 
        hover:border-[var(--accent-soft)] 
        hover:shadow-[0_0_12px_var(--accent-soft)]"
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
         {state.theme === "dark" ? (
           <Sun className="w-6 h-6 text-gray-800" />
         ) : (
           <Moon className="w-6 h-6 text-gray-800" />
         )}
       </button>
    

       <button
         type="button"
         onClick={onCartClick}
         className="flex items-center gap-2 rounded-full 
         border border-[var(--border-color)] 
         bg-[var(--card-bg)] 
         px-4 py-2 text-sm font-semibold 
         text-[var(--text-primary)] 
         backdrop-blur-md 
         transition 
         hover:shadow-[0_0_12px_var(--accent-soft)]"
       >
         <ShoppingCart className="w-5 h-5 text-[var(--accent)]" />
         <span className="text-[var(--accent)] font-bold">({cartCount})</span>
       </button>
      </div>
      </div>
    </header>
  );
}

export default Navbar;
