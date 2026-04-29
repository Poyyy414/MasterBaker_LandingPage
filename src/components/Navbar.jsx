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
        maxWidth: 1200, margin: "0 auto", padding: "0 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 70,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "linear-gradient(135deg, #cd853f, #8b4513)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, border: "2px solid rgba(205,133,63,0.4)",
          }}>🥧</div>
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: "#f5deb3" }}>
            Master<span style={{ color: "#cd853f" }}>Baker</span>
          </span>
          {/* Beta pill */}
          <span style={{
            background: "rgba(205,133,63,0.15)", border: "1px solid rgba(205,133,63,0.3)",
            borderRadius: 20, padding: "2px 10px",
            color: "#cd853f", fontSize: 11, fontFamily: "Georgia, serif", letterSpacing: "0.05em",
          }}>BETA</span>
        </div>

        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {["Home", "Features"].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              color: "#d2b48c", textDecoration: "none", fontSize: 15,
              fontFamily: "'Crimson Text', serif", transition: "color 0.2s",
            }}>{link}</a>
          ))}
          <a
            href="masterbaker.apk"
            download="MasterBaker.apk"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "linear-gradient(135deg, #3ddc84, #1a9050)",
              color: "#fff", textDecoration: "none",
              padding: "8px 20px", borderRadius: 6,
              fontSize: 14, fontWeight: 700,
              fontFamily: "'Crimson Text', serif",
            }}
          >
            🧪 Download Beta
          </a>
        </div>
      </div>
    </nav>
  );
}
