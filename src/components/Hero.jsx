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
      {[
        { size: 600, top: -200, right: -200, opacity: 0.04 },
        { size: 400, bottom: -100, left: -100, opacity: 0.06 },
        { size: 200, top: 100, left: "30%", opacity: 0.05 },
      ].map((c, i) => (
        <div key={i} style={{
          position: "absolute", width: c.size, height: c.size, borderRadius: "50%",
          border: "2px solid #cd853f", opacity: c.opacity,
          top: c.top, bottom: c.bottom, left: c.left, right: c.right, pointerEvents: "none",
        }} />
      ))}

      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "4rem 2rem",
        display: "flex", alignItems: "center", gap: "5rem",
        position: "relative", zIndex: 1,
      }}>
        <div style={{ flex: 1 }}>
          {/* Beta badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(205, 133, 63, 0.12)", border: "1px solid rgba(205, 133, 63, 0.3)",
            borderRadius: 50, padding: "6px 16px", marginBottom: "1.5rem",
          }}>
            <span style={{ fontSize: 13, color: "#cd853f", letterSpacing: "0.08em", fontFamily: "Georgia, serif" }}>
              🧪 BETA TESTING — BE THE FIRST TO PLAY
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.8rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1,
            color: "#f5deb3", margin: "0 0 1.5rem",
          }}>
            Become the
            <span style={{ display: "block", color: "#cd853f", fontStyle: "italic" }}>Master</span>
            of Every Pie & Cake
          </h1>

          <p style={{
            fontSize: "1.2rem", color: "#a0785a", lineHeight: 1.7, maxWidth: 500, margin: "0 0 0.75rem",
            fontFamily: "Georgia, serif",
          }}>
            MasterBaker is now open for beta testing on Android.
            Download the APK, try the game, and help us shape the final release with your feedback.
          </p>

          <p style={{
            fontSize: "0.95rem", color: "#6b4c30", lineHeight: 1.6, maxWidth: 500, margin: "0 0 2.5rem",
            fontFamily: "Georgia, serif",
          }}>
            ⚠️ This is a beta build — bugs may exist. Your feedback is welcome and appreciated!
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
            <a
              href="masterbaker.apk"
              download="MasterBaker.apk"
              style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                background: "linear-gradient(135deg, #3ddc84, #1a9050)",
                color: "#fff", border: "none",
                padding: "16px 36px", borderRadius: 10,
                fontSize: "1.1rem", fontWeight: 700,
                fontFamily: "'Playfair Display', serif",
                cursor: "pointer", letterSpacing: "0.02em",
                boxShadow: "0 4px 24px rgba(61,220,132,0.35)",
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: 22 }}>🤖</span>
              Download Beta APK
            </a>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(61,220,132,0.08)", border: "1px solid rgba(61,220,132,0.2)",
              borderRadius: 8, padding: "8px 16px",
            }}>
              <span style={{ color: "#3ddc84", fontSize: "0.85rem", fontFamily: "Georgia, serif" }}>
                🤖 Android 6.0+ &nbsp;·&nbsp; Free &nbsp;·&nbsp; No Play Store needed
              </span>
            </div>
          </div>

          {/* Beta stats — honest */}
          <div style={{
            display: "flex", gap: 32, marginTop: "3rem",
            borderTop: "1px solid rgba(205,133,63,0.15)", paddingTop: "2rem",
          }}>
            {[
              { num: "Beta", label: "Early Access" },
              { num: "Free", label: "No Cost to Test" },
              { num: "Android", label: "Only Platform" },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#cd853f" }}>{stat.num}</div>
                <div style={{ fontSize: "0.85rem", color: "#a0785a", fontFamily: "Georgia, serif" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right game card */}
        <div style={{ flex: "0 0 340px", position: "relative" }}>
          <div style={{
            background: "linear-gradient(145deg, #3d2010, #2a180a)",
            border: "1px solid rgba(205,133,63,0.25)", borderRadius: 24, padding: "2rem",
            boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(205,133,63,0.1)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "linear-gradient(135deg, #cd853f, #8b4513)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
              }}>👨‍🍳</div>
              <div>
                <div style={{ color: "#f5deb3", fontWeight: 600, fontFamily: "'Playfair Display', serif", fontSize: 15 }}>Beta Tester</div>
                <div style={{ color: "#a0785a", fontSize: 12, fontFamily: "Georgia, serif" }}>Level 1 · Apprentice Baker</div>
              </div>
              <div style={{
                marginLeft: "auto", background: "rgba(205,133,63,0.15)", border: "1px solid rgba(205,133,63,0.3)",
                borderRadius: 20, padding: "4px 12px", color: "#cd853f", fontSize: 12, fontFamily: "Georgia, serif",
              }}>🧪 Beta</div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ color: "#a0785a", fontSize: 11, fontFamily: "Georgia, serif" }}>XP Progress</span>
                <span style={{ color: "#cd853f", fontSize: 11, fontFamily: "Georgia, serif" }}>0 / 1,000</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 20, height: 8 }}>
                <div style={{ width: "0%", height: "100%", borderRadius: 20, background: "linear-gradient(90deg, #cd853f, #f4a460)" }} />
              </div>
            </div>

            <div style={{
              background: "rgba(205,133,63,0.08)", border: "1px solid rgba(205,133,63,0.2)",
              borderRadius: 12, padding: "1rem", marginBottom: "1.5rem",
            }}>
              <div style={{ color: "#a0785a", fontSize: 11, marginBottom: 6, fontFamily: "Georgia, serif" }}>YOUR FIRST BAKE</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 28 }}>🥧</span>
                <div>
                  <div style={{ color: "#f5deb3", fontWeight: 600, fontSize: 14, fontFamily: "'Playfair Display', serif" }}>Classic Apple Pie</div>
                  <div style={{ color: "#a0785a", fontSize: 12, fontFamily: "Georgia, serif" }}>Start your journey here</div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ color: "#a0785a", fontSize: 11, marginBottom: 10, fontFamily: "Georgia, serif" }}>RECIPE SHELF</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                {["🥧","🔒","🔒","🔒","🔒","🔒","🔒","🔒"].map((item, i) => (
                  <div key={i} style={{
                    aspectRatio: 1,
                    background: item === "🔒" ? "rgba(255,255,255,0.04)" : "rgba(205,133,63,0.1)",
                    border: `1px solid ${item === "🔒" ? "rgba(255,255,255,0.06)" : "rgba(205,133,63,0.2)"}`,
                    borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, opacity: item === "🔒" ? 0.4 : 1,
                  }}>
                    {item === "🔒" ? <span style={{ color: "#a0785a", fontSize: 14 }}>🔒</span> : item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            position: "absolute", top: -16, right: -16,
            background: "linear-gradient(135deg, #cd853f, #8b4513)",
            borderRadius: "50%", width: 64, height: 64,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            boxShadow: "0 8px 24px rgba(205,133,63,0.4)",
          }}>
            <span style={{ fontSize: 18 }}>🧪</span>
            <span style={{ color: "#fff8f0", fontSize: 9, fontWeight: 700, fontFamily: "Georgia, serif" }}>BETA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
