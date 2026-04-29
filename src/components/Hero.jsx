export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #2a180a 0%, #3d2010 40%, #1a0f05 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
      paddingTop: 70,
      fontFamily: "'Crimson Text', Georgia, serif",
    }}>
      {/* Decorative circles */}
      {[
        { size: 600, top: -200, right: -200, opacity: 0.04 },
        { size: 400, bottom: -100, left: -100, opacity: 0.06 },
        { size: 200, top: 100, left: "30%", opacity: 0.05 },
      ].map((c, i) => (
        <div key={i} style={{
          position: "absolute",
          width: c.size, height: c.size,
          borderRadius: "50%",
          border: "2px solid #cd853f",
          opacity: c.opacity,
          top: c.top, bottom: c.bottom,
          left: c.left, right: c.right,
          pointerEvents: "none",
        }} />
      ))}

      {/* Grain texture overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
        opacity: 0.4,
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "4rem 2rem",
        display: "flex", alignItems: "center", gap: "5rem",
        position: "relative", zIndex: 1,
      }}>
        {/* Left text */}
        <div style={{ flex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(205, 133, 63, 0.12)",
            border: "1px solid rgba(205, 133, 63, 0.3)",
            borderRadius: 50, padding: "6px 16px", marginBottom: "1.5rem",
          }}>
            <span style={{ fontSize: 13, color: "#cd853f", letterSpacing: "0.08em", fontFamily: "Georgia, serif" }}>
              🎮 BAKE · COMPETE · LEVEL UP
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
            fontWeight: 800, lineHeight: 1.1,
            color: "#f5deb3", margin: "0 0 1.5rem",
          }}>
            Become the
            <span style={{
              display: "block",
              color: "#cd853f",
              fontStyle: "italic",
            }}>Master</span>
            of Every Pie & Cake
          </h1>

          <p style={{
            fontSize: "1.2rem", color: "#a0785a",
            lineHeight: 1.7, maxWidth: 500, margin: "0 0 2.5rem",
            fontFamily: "Georgia, serif",
          }}>
            A deliciously addictive baking game where you craft legendary pies and cakes,
            unlock secret recipes, and compete with bakers around the world.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button style={{
              background: "linear-gradient(135deg, #cd853f, #8b4513)",
              color: "#fff8f0", border: "none",
              padding: "16px 36px", borderRadius: 8,
              fontSize: "1.1rem", fontWeight: 700,
              fontFamily: "'Playfair Display', serif",
              cursor: "pointer", letterSpacing: "0.02em",
              boxShadow: "0 4px 20px rgba(205,133,63,0.3)",
              transition: "transform 0.2s",
            }}>
              🥧 Play Now — It's Free
            </button>
            <button style={{
              background: "transparent",
              color: "#cd853f",
              border: "1.5px solid rgba(205,133,63,0.4)",
              padding: "16px 28px", borderRadius: 8,
              fontSize: "1rem",
              fontFamily: "Georgia, serif",
              cursor: "pointer",
              transition: "all 0.2s",
            }}>
              📱 Download App
            </button>
          </div>

          {/* Stats row */}
          <div style={{
            display: "flex", gap: 32, marginTop: "3rem",
            borderTop: "1px solid rgba(205,133,63,0.15)",
            paddingTop: "2rem",
          }}>
            {[
              { num: "250K+", label: "Bakers Playing" },
              { num: "1,200+", label: "Recipes to Master" },
              { num: "4.9★", label: "App Store Rating" },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.8rem", fontWeight: 700, color: "#cd853f",
                }}>{stat.num}</div>
                <div style={{ fontSize: "0.85rem", color: "#a0785a", fontFamily: "Georgia, serif" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: game card mockup */}
        <div style={{ flex: "0 0 340px", position: "relative" }}>
          <div style={{
            background: "linear-gradient(145deg, #3d2010, #2a180a)",
            border: "1px solid rgba(205,133,63,0.25)",
            borderRadius: 24, padding: "2rem",
            boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(205,133,63,0.1)",
          }}>
            {/* Player info */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "linear-gradient(135deg, #cd853f, #8b4513)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
              }}>👨‍🍳</div>
              <div>
                <div style={{ color: "#f5deb3", fontWeight: 600, fontFamily: "'Playfair Display', serif", fontSize: 15 }}>Chef Sanota</div>
                <div style={{ color: "#a0785a", fontSize: 12, fontFamily: "Georgia, serif" }}>Level 42 · Pastry Master</div>
              </div>
              <div style={{
                marginLeft: "auto",
                background: "rgba(205,133,63,0.15)",
                border: "1px solid rgba(205,133,63,0.3)",
                borderRadius: 20, padding: "4px 12px",
                color: "#cd853f", fontSize: 12, fontFamily: "Georgia, serif",
              }}>🏆 #7 Global</div>
            </div>

            {/* XP bar */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ color: "#a0785a", fontSize: 11, fontFamily: "Georgia, serif" }}>XP Progress</span>
                <span style={{ color: "#cd853f", fontSize: 11, fontFamily: "Georgia, serif" }}>8,420 / 10,000</span>
              </div>
              <div style={{
                background: "rgba(255,255,255,0.08)", borderRadius: 20, height: 8,
              }}>
                <div style={{
                  width: "84%", height: "100%", borderRadius: 20,
                  background: "linear-gradient(90deg, #cd853f, #f4a460)",
                }} />
              </div>
            </div>

            {/* Active bake */}
            <div style={{
              background: "rgba(205,133,63,0.08)",
              border: "1px solid rgba(205,133,63,0.2)",
              borderRadius: 12, padding: "1rem", marginBottom: "1.5rem",
            }}>
              <div style={{ color: "#a0785a", fontSize: 11, marginBottom: 6, fontFamily: "Georgia, serif" }}>CURRENTLY BAKING</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 28 }}>🍰</span>
                <div>
                  <div style={{ color: "#f5deb3", fontWeight: 600, fontSize: 14, fontFamily: "'Playfair Display', serif" }}>Lavender Honey Cake</div>
                  <div style={{ color: "#a0785a", fontSize: 12, fontFamily: "Georgia, serif" }}>⏱ 12 min remaining</div>
                </div>
                <div style={{ marginLeft: "auto", color: "#cd853f", fontWeight: 700, fontFamily: "'Playfair Display', serif", fontSize: 15 }}>+480 XP</div>
              </div>
            </div>

            {/* Recipe shelf */}
            <div>
              <div style={{ color: "#a0785a", fontSize: 11, marginBottom: 10, fontFamily: "Georgia, serif" }}>RECIPE SHELF</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                {["🥧","🎂","🍰","🥮","🧁","🫐","🍮","🔒"].map((item, i) => (
                  <div key={i} style={{
                    aspectRatio: 1,
                    background: item === "🔒" ? "rgba(255,255,255,0.04)" : "rgba(205,133,63,0.1)",
                    border: `1px solid ${item === "🔒" ? "rgba(255,255,255,0.06)" : "rgba(205,133,63,0.2)"}`,
                    borderRadius: 8,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20,
                    opacity: item === "🔒" ? 0.4 : 1,
                  }}>
                    {item === "🔒" ? <span style={{ color: "#a0785a", fontSize: 14 }}>🔒</span> : item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div style={{
            position: "absolute", top: -16, right: -16,
            background: "linear-gradient(135deg, #cd853f, #8b4513)",
            borderRadius: "50%", width: 64, height: 64,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            boxShadow: "0 8px 24px rgba(205,133,63,0.4)",
          }}>
            <span style={{ fontSize: 20 }}>🏅</span>
            <span style={{ color: "#fff8f0", fontSize: 9, fontWeight: 700, fontFamily: "Georgia, serif" }}>NEW!</span>
          </div>
        </div>
      </div>
    </section>
  );
}