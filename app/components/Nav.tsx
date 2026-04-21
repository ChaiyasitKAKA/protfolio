"use client";
import { useState, useEffect } from "react";

const links = ["about", "skills", "projects", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "18px",
          color: "var(--text)",
          letterSpacing: "-0.02em",
        }}
      >
        Portfolio<span style={{ color: "var(--accent)" }}>.</span>
      </span>

      <ul
        style={{
          display: "flex",
          gap: "32px",
          listStyle: "none",
          alignItems: "center",
        }}
      >
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-muted)")
              }
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
