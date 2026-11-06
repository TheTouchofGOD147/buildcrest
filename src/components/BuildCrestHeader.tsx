

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/ongoing-projects", label: "Ongoing Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function BuildCrestHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bc-header">
      <div className="bc-header-inner">
        <Link href="/" className="bc-brand" onClick={closeMenu}>
          <span className="bc-brand-mark" aria-hidden="true">&#9635;</span>
          <span className="bc-brand-copy">
            <strong>Grandeur BuildCrest</strong>
            <small>Construction Group</small>
          </span>
        </Link>

        <button
          className="bc-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="bc-main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="bc-main-navigation"
          aria-label="Main navigation"
          className={`bc-navigation ${menuOpen ? "bc-navigation-open" : ""}`}
        >
          {navigation.map(item => {
            const active = item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={active ? "bc-nav-active" : undefined}
              >
                {item.label}
              </Link>
            );
          })}

          <Link href="/quote" className="bc-mobile-quote" onClick={closeMenu}>
            Request a Quote
          </Link>
        </nav>

        <Link href="/quote" className="bc-header-quote">
          Request a Quote <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </header>
  );
}