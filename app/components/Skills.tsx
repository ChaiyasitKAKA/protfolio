"use client"
const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Figma"],
  },
  {
    category: "Backend & DB",
    skills: ["Node.js", "SQL", "NoSQL / MongoDB", "REST APIs"],
  },
  {
    category: "Mobile",
    skills: ["Dart", "Flutter"],
  },
  {
    category: "Security & Tools",
    skills: ["Web App Security", "OWASP", "Git / GitHub", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg-2)" }}>
      <div className="container">
        <p className="section-label">02 — skills</p>
        <h2 className="section-title">What I Work With</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              style={{
                padding: "32px",
                background: "var(--bg)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "20px",
                }}
              >
                {category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      padding: "6px 12px",
                      border: "1px solid var(--border)",
                      color: "var(--text-dim)",
                      background: "var(--bg-2)",
                      transition: "all 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--accent)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--accent)";
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--accent-dim)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--border)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text-dim)";
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--bg-2)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
