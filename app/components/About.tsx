"use client"
export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">01 — about</p>
        <h2 className="section-title">Who I Am</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* Text */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                lineHeight: 1.9,
                color: "var(--text-dim)",
                marginBottom: "20px",
              }}
            >
              I&apos;m a third-year Computer Science student with a strong focus on
              web application development. My coursework and personal projects
              have given me hands-on experience across the full stack — from
              building interfaces in React and Next.js to designing databases
              with SQL and NoSQL.
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                lineHeight: 1.9,
                color: "var(--text-dim)",
              }}
            >
              Outside of web dev, I&apos;m genuinely interested in cybersecurity —
              understanding how systems can be attacked and defended. I believe
              building secure software starts with thinking like an attacker.
            </p>
          </div>

          {/* Quick stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "var(--border)",
              border: "1px solid var(--border)",
            }}
          >
            {[
              { label: "Status", value: "Available" },
              { label: "Year", value: "3rd Year" },
              { label: "Focus", value: "Web + Security" },
              { label: "Location", value: "Thailand 🇹🇭" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  padding: "24px",
                  background: "var(--bg-2)",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "var(--bg-3)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "var(--bg-2)")
                }
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "8px",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "var(--text)",
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
