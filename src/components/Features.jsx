const features = [
  {
    icon: "🥧",
    title: "Pie & Cake Recipes",
    desc: "Craft a variety of pies and cakes in the beta. More recipes are being added before the full launch — your feedback helps us decide what to include.",
    tag: "Beta Content",
  },
  {
    icon: "🏆",
    title: "Leaderboard",
    desc: "Compete with other beta testers on the leaderboard. Rankings reset at full launch, but bragging rights are forever.",
    tag: "Coming Soon",
  },
  {
    icon: "⬆️",
    title: "Skill Tree & Progression",
    desc: "Earn XP and unlock new techniques as you bake. The progression system is still being tuned — let us know how it feels!",
    tag: "In Testing",
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Bakery Guilds",
    desc: "Guild features are planned for the full release. Join the beta now to secure your guild name early.",
    tag: "Planned",
  },
  {
    icon: "🤖",
    title: "Android Beta Build",
    desc: "This APK is built for Android 6.0 and above. Install it directly — no Play Store needed. Expect occasional bugs and rough edges.",
    tag: "Android Only",
  },
  {
    icon: "🎁",
    title: "Share Your Feedback",
    desc: "Found a bug? Have a suggestion? We want to hear it. Beta testers who report issues will be credited when the full game launches.",
    tag: "Help Us Improve",
  },
];

export default function Features() {
  return (
    <section id="features" style={{
      background: "#1a0f05", padding: "6rem 2rem", fontFamily: "Georgia, serif",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{
            display: "inline-block", background: "rgba(205,133,63,0.1)",
            border: "1px solid rgba(205,133,63,0.25)", borderRadius: 50, padding: "6px 18px",
            color: "#cd853f", fontSize: 12, letterSpacing: "0.1em", marginBottom: "1rem",
          }}>
            WHAT'S IN THE BETA
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f5deb3", margin: "0 0 1rem",
          }}>
            A Bakery in Your Pocket
          </h2>
          <p style={{ color: "#a0785a", fontSize: "1.1rem", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
            Here's what's available in the beta — and what's still being baked for the full launch.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {features.map(f => (
            <div key={f.title} style={{
              background: "linear-gradient(145deg, #2a180a, #1f1208)",
              border: "1px solid rgba(205,133,63,0.15)", borderRadius: 16, padding: "1.8rem",
              transition: "border-color 0.2s, transform 0.2s", cursor: "default",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(205,133,63,0.4)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(205,133,63,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span style={{ fontSize: 36 }}>{f.icon}</span>
                <span style={{
                  background: "rgba(205,133,63,0.12)", border: "1px solid rgba(205,133,63,0.2)",
                  borderRadius: 20, padding: "3px 10px", color: "#cd853f", fontSize: 11,
                  fontFamily: "Georgia, serif", whiteSpace: "nowrap",
                }}>{f.tag}</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: "#f5deb3", margin: "0 0 0.75rem" }}>{f.title}</h3>
              <p style={{ color: "#a0785a", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Beta Download CTA */}
        <div style={{
          marginTop: "4rem",
          background: "linear-gradient(135deg, rgba(61,220,132,0.08), rgba(26,144,80,0.05))",
          border: "1px solid rgba(61,220,132,0.2)", borderRadius: 20, padding: "3rem 2rem", textAlign: "center",
        }}>
          <div style={{ fontSize: 48, marginBottom: "1rem" }}>🧪</div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#f5deb3",
            fontWeight: 700, margin: "0 0 0.75rem",
          }}>Join the Beta Today</h3>
          <p style={{ color: "#a0785a", margin: "0 0 2rem", fontSize: "1rem", maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            Download the APK, play the game, and send us your thoughts.
            Your feedback directly shapes the final release.
          </p>
          <a
            href="masterbaker.apk"
            download="MasterBaker.apk"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "linear-gradient(135deg, #3ddc84, #1a9050)",
              color: "#fff", border: "none", padding: "16px 40px", borderRadius: 10,
              fontSize: "1.1rem", fontWeight: 700, fontFamily: "'Playfair Display', serif",
              cursor: "pointer", textDecoration: "none",
              boxShadow: "0 4px 24px rgba(61,220,132,0.3)",
            }}
          >
            🤖 Download Beta APK
          </a>
          <div style={{ marginTop: "1rem", color: "#6b8f72", fontSize: "0.85rem", fontFamily: "Georgia, serif" }}>
            Android 6.0+ · Free · Enable "Install from Unknown Sources" in Settings
          </div>
        </div>
      </div>
    </section>
  );
}
