const features = [
  {
    icon: "🥧",
    title: "100s of Pie & Cake Recipes",
    desc: "From classic apple pie to exotic mango chiffon cake — master every recipe and unlock rare secret ones as you level up.",
    tag: "1,200+ Recipes",
  },
  {
    icon: "🏆",
    title: "Global Leaderboard",
    desc: "Compete against bakers worldwide. Weekly tournaments, seasonal events, and special championships with exclusive rewards.",
    tag: "Live Rankings",
  },
  {
    icon: "⬆️",
    title: "Skill Tree & Progression",
    desc: "Earn XP, unlock new techniques like lattice crusts and fondant art. Progress from Apprentice Baker to Legendary Pastry Master.",
    tag: "42 Levels",
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Bakery Guilds",
    desc: "Join or create your own baker's guild. Share recipes, collaborate on giant cakes, and earn guild trophies together.",
    tag: "Multiplayer",
  },
  {
    icon: "📱",
    title: "Cross-Platform App",
    desc: "Play on iOS and Android. Your progress syncs everywhere — start a cake on your phone, finish it on your tablet.",
    tag: "iOS & Android",
  },
  {
    icon: "🎁",
    title: "Daily Rewards & Events",
    desc: "Log in every day for fresh ingredients, bonus XP, and limited-time seasonal recipes like pumpkin pie or Yule log cake.",
    tag: "Daily Bonuses",
  },
];

export default function Features() {
  return (
    <section id="features" style={{
      background: "#1a0f05",
      padding: "6rem 2rem",
      fontFamily: "Georgia, serif",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(205,133,63,0.1)",
            border: "1px solid rgba(205,133,63,0.25)",
            borderRadius: 50, padding: "6px 18px",
            color: "#cd853f", fontSize: 12, letterSpacing: "0.1em",
            marginBottom: "1rem",
          }}>
            WHY PLAYERS LOVE IT
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800, color: "#f5deb3",
            margin: "0 0 1rem",
          }}>
            A Bakery in Your Pocket
          </h2>
          <p style={{
            color: "#a0785a", fontSize: "1.1rem", maxWidth: 540, margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Rich gameplay, gorgeous recipes, and a community of passionate bakers waiting for you.
          </p>
        </div>

        {/* Feature grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {features.map(f => (
            <div key={f.title} style={{
              background: "linear-gradient(145deg, #2a180a, #1f1208)",
              border: "1px solid rgba(205,133,63,0.15)",
              borderRadius: 16,
              padding: "1.8rem",
              transition: "border-color 0.2s, transform 0.2s",
              cursor: "default",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(205,133,63,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(205,133,63,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span style={{ fontSize: 36 }}>{f.icon}</span>
                <span style={{
                  background: "rgba(205,133,63,0.12)",
                  border: "1px solid rgba(205,133,63,0.2)",
                  borderRadius: 20, padding: "3px 10px",
                  color: "#cd853f", fontSize: 11, fontFamily: "Georgia, serif",
                  whiteSpace: "nowrap",
                }}>{f.tag}</span>
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.15rem", fontWeight: 700,
                color: "#f5deb3", margin: "0 0 0.75rem",
              }}>{f.title}</h3>
              <p style={{
                color: "#a0785a", fontSize: "0.95rem",
                lineHeight: 1.7, margin: 0,
              }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div style={{
          marginTop: "4rem",
          background: "linear-gradient(135deg, rgba(205,133,63,0.12), rgba(139,69,19,0.08))",
          border: "1px solid rgba(205,133,63,0.25)",
          borderRadius: 20, padding: "3rem 2rem",
          textAlign: "center",
        }}>
          <div style={{ fontSize: 40, marginBottom: "1rem" }}>🎮</div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.8rem", color: "#f5deb3",
            fontWeight: 700, margin: "0 0 1rem",
          }}>Ready to Start Baking?</h3>
          <p style={{ color: "#a0785a", margin: "0 0 2rem", fontSize: "1rem" }}>
            Join 250,000+ players and bake your way to legendary status.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{
              background: "linear-gradient(135deg, #cd853f, #8b4513)",
              color: "#fff8f0", border: "none",
              padding: "14px 32px", borderRadius: 8,
              fontSize: "1rem", fontWeight: 700,
              fontFamily: "'Playfair Display', serif",
              cursor: "pointer",
            }}>🥧 Play Free on Web</button>
            <button style={{
              background: "rgba(255,255,255,0.05)",
              color: "#d2b48c", border: "1px solid rgba(205,133,63,0.3)",
              padding: "14px 28px", borderRadius: 8,
              fontSize: "1rem", fontFamily: "Georgia, serif",
              cursor: "pointer",
            }}>📲 Get on iOS</button>
            <button style={{
              background: "rgba(255,255,255,0.05)",
              color: "#d2b48c", border: "1px solid rgba(205,133,63,0.3)",
              padding: "14px 28px", borderRadius: 8,
              fontSize: "1rem", fontFamily: "Georgia, serif",
              cursor: "pointer",
            }}>🤖 Get on Android</button>
          </div>
        </div>
      </div>
    </section>
  );
}