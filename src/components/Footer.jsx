export default function Footer() {
  return (
    <footer style={{
      background: "#0f0804",
      borderTop: "1px solid rgba(205,133,63,0.12)",
      padding: "4rem 2rem 2rem",
      fontFamily: "Georgia, serif",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "3rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
              <span style={{ fontSize: 24 }}>🥧</span>
              <span style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 20, fontWeight: 700, color: "#f5deb3",
              }}>Master<span style={{ color: "#cd853f" }}>Baker</span></span>
            </div>
            <p style={{ color: "#6b4c30", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 260, margin: "0 0 1.5rem" }}>
              The ultimate pie & cake baking game. Craft, compete, and become a legendary baker.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["🐦", "📘", "📸", "▶️"].map((icon, i) => (
                <div key={i} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "rgba(205,133,63,0.08)",
                  border: "1px solid rgba(205,133,63,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, cursor: "pointer",
                  transition: "background 0.2s",
                }}>{icon}</div>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { heading: "Game", links: ["How to Play", "Recipes", "Leaderboard", "Guilds", "Events"] },
            { heading: "App", links: ["Download iOS", "Download Android", "Web Play", "Updates"] },
            { heading: "Company", links: ["About Us", "Blog", "Press Kit", "Contact", "Privacy Policy"] },
          ].map(col => (
            <div key={col.heading}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                color: "#f5deb3", fontWeight: 600, fontSize: 14,
                marginBottom: "1rem", letterSpacing: "0.05em",
              }}>{col.heading}</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {col.links.map(link => (
                  <li key={link} style={{ marginBottom: 8 }}>
                    <a href="#" style={{
                      color: "#6b4c30", textDecoration: "none",
                      fontSize: "0.9rem", transition: "color 0.2s",
                    }}
                      onMouseEnter={e => e.target.style.color = "#cd853f"}
                      onMouseLeave={e => e.target.style.color = "#6b4c30"}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(205,133,63,0.1)",
          paddingTop: "1.5rem",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ color: "#4a3020", fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} MasterBaker. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "#4a3020" }}>Made with</span>
            <span style={{ fontSize: 14 }}>🥧❤️</span>
            <span style={{ fontSize: 12, color: "#4a3020" }}>for bakers everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
}