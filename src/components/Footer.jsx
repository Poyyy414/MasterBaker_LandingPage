export default function Footer() {
  return (
    <footer style={{
      background: "#0f0804", borderTop: "1px solid rgba(205,133,63,0.12)",
      padding: "4rem 2rem 2rem", fontFamily: "Georgia, serif",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr",
          gap: "3rem", marginBottom: "3rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.5rem" }}>
              <span style={{ fontSize: 24 }}>🥧</span>
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: "#f5deb3" }}>
                Master<span style={{ color: "#cd853f" }}>Baker</span>
              </span>
              <span style={{
                background: "rgba(205,133,63,0.15)", border: "1px solid rgba(205,133,63,0.3)",
                borderRadius: 20, padding: "2px 10px",
                color: "#cd853f", fontSize: 10, fontFamily: "Georgia, serif",
              }}>BETA</span>
            </div>
            <p style={{ color: "#6b4c30", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 300, margin: "0 0 1rem" }}>
              MasterBaker is currently in beta. We're actively developing and improving the game based on tester feedback.
            </p>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(61,220,132,0.08)", border: "1px solid rgba(61,220,132,0.2)",
              borderRadius: 8, padding: "8px 14px",
            }}>
              <span style={{ fontSize: 14 }}>🤖</span>
              <span style={{ color: "#3ddc84", fontSize: "0.8rem" }}>Android Beta</span>
            </div>
          </div>

          {/* Links */}
          {[
            { heading: "Beta", links: ["Download APK", "Installation Guide", "Report a Bug", "Submit Feedback"] },
            { heading: "Info", links: ["About the Game", "Contact Us", "Privacy Policy"] },
          ].map(col => (
            <div key={col.heading}>
              <div style={{
                fontFamily: "'Playfair Display', serif", color: "#f5deb3", fontWeight: 600,
                fontSize: 14, marginBottom: "1rem", letterSpacing: "0.05em",
              }}>{col.heading}</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {col.links.map(link => (
                  <li key={link} style={{ marginBottom: 8 }}>
                    <a href="#" style={{ color: "#6b4c30", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = "#cd853f"}
                      onMouseLeave={e => e.target.style.color = "#6b4c30"}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: "1px solid rgba(205,133,63,0.1)", paddingTop: "1.5rem",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ color: "#4a3020", fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} MasterBaker. Beta version — not the final product.
          </span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "#4a3020" }}>Made with</span>
            <span style={{ fontSize: 14 }}>🥧❤️</span>
            <span style={{ fontSize: 12, color: "#4a3020" }}>Thank you for testing!</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
