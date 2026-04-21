"use client"
const socials = [
  { label: "GitHub", handle: "ChaiyasitKAKA", href: "https://github.com/ChaiyasitKAKA" },
  { label: "Email", handle: "s6652410025@sau.ac.th", href: "s6652410025@sau.ac.th" },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <p className="section-label">04 — contact</p>
        <h2 className="section-title">Get In Touch</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                lineHeight: 1.9,
                color: "var(--text-dim)",
                marginBottom: "32px",
              }}
            >
              I&apos;m open to internships, freelance projects, or just a good
              conversation about web development and security. Feel free to
              reach out!
            </p>
            <a
              href="mailto:your@email.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
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
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "#000";
              }}
            >
              Say Hello →
            </a>
          </div>

          {/* Right — social links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
            {socials.map(({ label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 24px",
                  background: "var(--bg)",
                  textDecoration: "none",
                  transition: "background 0.2s",
                  
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--bg-3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--bg)";
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    color: "var(--text-dim)",
                  }}
                >
                  {handle} ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "80px",
            paddingTop: "32px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
            }}
          >
            © {new Date().getFullYear()} Chaiyasit
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
            }}
          >
            I luv tiktok
          </span>
        </div>
      </div>
    </section>
  );
}
