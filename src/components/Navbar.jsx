export default function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(42, 24, 10, 0.97)",
      borderBottom: "1px solid rgba(205, 133, 63, 0.2)",
      backdropFilter: "blur(10px)",
      fontFamily: "'Crimson Text', Georgia, serif",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "0 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 70,
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "linear-gradient(135deg, #cd853f, #8b4513)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, border: "2px solid rgba(205,133,63,0.4)",
          }}>🥧</div>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 22, fontWeight: 700, color: "#f5deb3",
            letterSpacing: "0.02em",
          }}>
            Master<span style={{ color: "#cd853f" }}>Baker</span>
          </span>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Home", "Features", "Leaderboard", "Download"].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              color: link === "Download" ? "#2a180a" : "#d2b48c",
              textDecoration: "none",
              fontSize: 15,
              fontFamily: "'Crimson Text', serif",
              fontWeight: link === "Download" ? 600 : 400,
              background: link === "Download" ? "linear-gradient(135deg, #cd853f, #a0522d)" : "none",
              padding: link === "Download" ? "8px 20px" : "4px 0",
              borderRadius: link === "Download" ? 6 : 0,
              transition: "all 0.2s",
              letterSpacing: "0.02em",
            }}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}