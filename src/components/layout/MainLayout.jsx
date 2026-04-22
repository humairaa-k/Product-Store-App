import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CartDrawer from "../cart/cartDrawer";
import { useSettings } from "../../features/context/settings/useSettings";
import Container from "./Container";
import { useEffect } from "react";

export default function MainLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { state } = useSettings();

  useEffect(() => {
    document.body.className = state.theme;
  },[state.theme]);

  return (
    <Container>
    <div  className={state.theme === "dark" ? "dark-theme" : "light-theme"}>
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)]">
        <Outlet />
      </main>
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
    </Container>
  );
}
