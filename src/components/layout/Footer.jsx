const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-main)] py-5 text-center text-xs font-semibold tracking-[0.18em] text-[var(--text-secondary)]">
      © {new Date().getFullYear()} Techy — All rights reserved.
    </footer>
  );
};

export default Footer;