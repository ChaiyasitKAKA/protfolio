/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";

const roles = [
  "Web Developer",
  "Digital Technology and Innovation student ",
  "React / Next.js Dev",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, 60);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, 35);
    } else if (deleting && charIdx === 0) {
      
      setDeleting(false);
      setRoleIdx((r) => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.3,
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }}
      />

      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            animation: "fadeUp 0.7s ease 0.1s both",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "24px",
            }}
          >
            &gt; Hello my name is kaka
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 88px)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: "16px",
            }}
          >
            Chaiyasit phomphoen
          </h1>

          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px, 3vw, 32px)",
              fontWeight: 500,
              color: "var(--text-muted)",
              marginBottom: "32px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <span>{displayed}</span>
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "1em",
                background: "var(--accent)",
                animation: "blink 1s step-end infinite",
              }}
            />
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "var(--text-dim)",
              maxWidth: "480px",
              marginBottom: "48px",
            }}
          >
            3rd-year CS student at [SAU]. I build web applications
            and explore the intersection of development & i interest about cyber security.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                background: "var(--accent)",
                color: "#000",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textDecoration: "none",
                border: "1px solid var(--accent)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "#000";
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                background: "transparent",
                color: "var(--text-dim)",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                letterSpacing: "0.05em",
                textDecoration: "none",
                border: "1px solid var(--border)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--text-muted)";
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--text-dim)";
              }}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0.4,
            animation: "fadeIn 1s ease 1.5s both",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
              color: "var(--text-muted)",
            }}
          >
            scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background:
                "linear-gradient(to bottom, var(--text-muted), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
