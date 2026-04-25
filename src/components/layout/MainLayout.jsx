import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CartDrawer from "../cart/cartDrawer";
import { useSettings } from "../../features/context/settings/useSettings";
import Container from "./Container";
import { useEffect } from "react";

import { useIsFetching } from "@tanstack/react-query";
// import Loader from "../ui/Loader";
import Footer from "./Footer";

export default function MainLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { state } = useSettings();
  const isFetching = useIsFetching();

  useEffect(() => {
    document.body.className = state.theme;
  }, [state.theme]);

  return (
    <Container>
      <div className={state.theme === "dark" ? "dark-theme" : "light-theme"}>
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        <main className="-mt-24 min-h-screen bg-[var(--bg-main)] pt-24 text-[var(--text-primary)]">
          <Outlet />
        </main>
        <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
      <Footer />
    </Container>
  );
}
