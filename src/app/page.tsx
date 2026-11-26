"use client";

export default function Home() {
  const copyCode = () => {
    navigator.clipboard.writeText("MK45");
    alert("Code MK45 copié !");
  };

  return (
    <main className="bg-premium" style={{ minHeight: "100vh", padding: "16px", paddingBottom: "40px" }}>
      <div style={{ maxWidth: "520px", margin: "0 auto" }}>

        {/* LOGO */}
        <div style={{ textAlign: "center", padding: "18px 0 16px" }}>
          <div style={{ fontFamily: "Outfit", fontSize: 32, fontWeight: 900, letterSpacing: 1 }}>
            MK<span style={{ color: "#e9bd55" }}>45</span> <span style={{ fontSize: 20 }}>⚽</span>
          </div>
          <div style={{ color: "#858994", fontSize: 12, fontWeight: 700, letterSpacing: 2, marginTop: 2 }}>
            PRONOSTICS PRO • 100% GAGNANT
          </div>
        </div>

        {/* HERO 3D + PROMO */}
        <div className="pro-hero">
          <div className="pro-players">
            <span className="player-pro">🏃‍♂️</span>
            <span className="ball-pro">⚽</span>
            <span className="player-pro keeper">🧤</span>
          </div>

          <div className="promo-pro-card">
            <div className="vip-badge">🔥 OFFRE EXCLUSIVE PRONOSTIQUEUR</div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, color: "#858994", marginTop: 12 }}>
              CODE PROMO OFFICIEL
            </div>
            <div className="promo-code-pro">MK45</div>
            <div style={{ fontWeight: 800, fontSize: 16, marginTop: 6, lineHeight: 1.3 }}>
              100% DE BONUS<br />SUR VOTRE PREMIER RECHARGEMENT
            </div>
            <p style={{ color: "#858994", fontSize: 12, marginTop: 8 }}>
              Utilisez le code <b style={{ color: "#e9bd55" }}>MK45</b> lors de votre inscription pour débloquer votre bonus.
            </p>
            <button className="btn-gold" style={{ marginTop: 14, width: "100%" }} onClick={copyCode}>
              📋 COPIER LE CODE MK45
            </button>
          </div>
        </div>

        {/* PRONOSTICS */}
        <div className="prono-section">
          <div className="prono-header">
            <div className="prono-title">🎯 Pronostics <span>du Jour</span></div>
            <div className="prono-live"><i></i> LIVE</div>
          </div>

          <div className="prono-card">
            <div className="prono-top">
              <div className="prono-league">🏆 Ligue 1 • France</div>
              <div className="prono-time">⏰ 20:45</div>
            </div>
            <div className="prono-teams">Paris SG vs Marseille<small>Parc des Princes - Paris</small></div>
            <div className="prono-meta">
              <span className="prono-pill fire">🔥 TOP PRONO</span>
              <span className="prono-pill gold">⭐ 88% Confiance</span>
              <span className="prono-pill green">✅ Analysé</span>
            </div>
            <div className="prono-pick">
              <div><div className="prono-pick-label">MON PRONOSTIC</div><b>PSG Gagne + Over 1.5</b></div>
              <div className="prono-odd"><span>1.85</span><small>COTE</small></div>
            </div>
            <div className="prono-footer">
              <div className="prono-conf-row"><span>Confiance de l'expert</span><b>88%</b></div>
              <div className="prono-confidence"><div style={{ width: "88%" }}></div></div>
            </div>
          </div>

          <div className="prono-card">
            <div className="prono-top">
              <div className="prono-league">🏆 Premier League</div>
              <div className="prono-time">⏰ 18:30</div>
            </div>
            <div className="prono-teams">Arsenal vs Chelsea<small>Emirates Stadium - Londres</small></div>
            <div className="prono-meta">
              <span className="prono-pill gold">⭐ 82% Confiance</span>
              <span className="prono-pill">📊 Forme : 4V - 1N</span>
            </div>
            <div className="prono-pick">
              <div><div className="prono-pick-label">MON PRONOSTIC</div><b>Les 2 équipes marquent</b></div>
              <div className="prono-odd"><span>1.72</span><small>COTE</small></div>
            </div>
            <div className="prono-footer">
              <div className="prono-conf-row"><span>Confiance de l'expert</span><b>82%</b></div>
              <div className="prono-confidence"><div style={{ width: "82%" }}></div></div>
            </div>
          </div>

          <div className="prono-card">
            <div className="prono-top">
              <div className="prono-league">🏆 La Liga • Espagne</div>
              <div className="prono-time">⏰ 21:00</div>
            </div>
            <div className="prono-teams">Real Madrid vs Barcelone<small>Santiago Bernabéu</small></div>
            <div className="prono-meta">
              <span className="prono-pill gold">⭐ 91% Confiance</span>
              <span className="prono-pill green">✅ Vérifié</span>
            </div>
            <div className="prono-pick">
              <div><div className="prono-pick-label">MON PRONOSTIC</div><b>Over 2.5 Buts</b></div>
              <div className="prono-odd"><span>1.95</span><small>COTE</small></div>
            </div>
            <div className="prono-footer">
              <div className="prono-conf-row"><span>Confiance de l'expert</span><b>91%</b></div>
              <div className="prono-confidence"><div style={{ width: "91%" }}></div></div>
            </div>
          </div>

          <div className="prono-vip-banner">
            <div style={{ fontWeight: 900, fontSize: 15 }}>👑 Tu veux les pronos VIP ?</div>
            <div style={{ color: "#858994", fontSize: 12, marginTop: 4 }}>5 à 8 pronostics gagnants chaque jour, avec analyses complètes</div>
            <button className="btn-gold" style={{ width: "100%", marginTop: 12 }}>🔓 DÉBLOQUER LE VIP →</button>
          </div>
        </div>

        <div style={{ textAlign: "center", color: "#858994", fontSize: 11, marginTop: 24 }}>
          © 2026 MK45 Pronostics • Jouez responsablement • 18+
        </div>

      </div>
    </main>
  );
      }
