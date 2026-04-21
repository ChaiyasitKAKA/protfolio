"use client";

const projects = [
  {
    number: "01",
    title: "Habbit tracker",
    description:
      "this is will follow your activty in a day ",
    tags: [ "Next.js","TypeScript", "Supabase"],
    github: "https://github.com/ChaiyasitKAKA/badhabbit.git",
    live: "https://badhabbit.vercel.app/",
    featured: true,
  },
  {
    number: "02",
    title: "Thai provie app",
    description:
      "this app about provice the country in thailand",
    tags: ["typescript","javascript"],
    github: "https://github.com/ChaiyasitKAKA/rn-6652410025-thai-provice-app.git",
    live: null,
    featured: false,
  },
  {
    number: "03",
    title: "foodtracker",
    description:
      "is about to follow what you eat in a day ",
    tags: [" Next.js","typescript","javascript","Supabase"],
    github: "https://github.com/ChaiyasitKAKA/foodtracker.git",
    live: "https://foodtracker-roan.vercel.app/",
    featured: true,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">03 — projects</p>
        <h2 className="section-title">Things I&apos;ve Built</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
          {projects.map((project) => (
            <div
              key={project.number}
              style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr auto",
                gap: "32px",
                padding: "32px",
                background: "var(--bg)",
                alignItems: "start",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--bg-2)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--bg)")
              }
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  paddingTop: "4px",
                }}
              >
                {project.number}
              </span>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: "10px",
                  }}
                >
                  {project.title}
                  {project.featured && (
                    <span
                      style={{
                        marginLeft: "12px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "9px",
                        padding: "3px 8px",
                        background: "var(--accent-dim)",
                        color: "var(--accent)",
                        border: "1px solid rgba(0,255,136,0.2)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        verticalAlign: "middle",
                      }}
                    >
                      featured
                    </span>
                  )}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    lineHeight: 1.8,
                    color: "var(--text-dim)",
                    marginBottom: "16px",
                    maxWidth: "520px",
                  }}
                >
                  {project.description}
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        padding: "4px 10px",
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  alignItems: "flex-end",
                  paddingTop: "4px",
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
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
                    ((e.target as HTMLElement).style.color =
                      "var(--text-muted)")
                  }
                >
                  GitHub ↗
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.opacity = "0.7")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.opacity = "1")
                    }
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
