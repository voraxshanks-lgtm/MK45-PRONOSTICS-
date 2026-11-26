"use client";

export default function Home() {
  const copyCode = () => {
    navigator.clipboard.writeText("MK45");
    alert("Code MK45 copié !");
  };

  return (
    <main style={{ minHeight: "100vh", padding: "16px", paddingBottom: "40px", background: "radial-gradient(circle at 50% -10%, rgba(233,189,85,.22), transparent 45%), #050506", color: "#f5f5f5", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "520px", margin: "0 auto" }}>

        {/* LOGO */}
        <div style={{ textAlign: "center", padding: "18px 0 16px" }}>
          <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: 1 }}>
            MK<span style={{ color: "#e9bd55" }}>45</span> <span style={{ fontSize: 20 }}>⚽</span>
          </div>
          <div style={{ color: "#858994", fontSize: 12, fontWeight: 700, letterSpacing: 2, marginTop: 2 }}>
            PRONOSTICS PRO • 100% GAGNANT
          </div>
        </div>

        {/* HERO 3D + PROMO */}
        <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "linear-gradient(180deg, #0a1a0f 0%, #0f2a18 55%, #07130b 100%)", border: "1px solid rgba(233,189,85,.45)", boxShadow: "0 25px 50px rgba(0,0,0,.65)", padding: "22px 18px 18px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 68, lineHeight: 1 }}>
            <span>🏃‍♂️</span>
            <span style={{ fontSize: 28 }}>⚽</span>
            <span style={{ fontSize: 76 }}>🧤</span>
          </div>

          <div style={{ marginTop: 8, background: "linear-gradient(145deg, #1d1f24, #101114)", border: "1px solid rgba(233,189,85,.45)", borderRadius: 18, padding: 16, textAlign: "center" }}>
            <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "linear-gradient(180deg, #ffe98a, #c79a2e)", color: "#1a1200", fontSize: 11, fontWeight: 900 }}>
              🔥 OFFRE EXCLUSIVE PRONOSTIQUEUR
            </div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, color: "#858994", marginTop: 12 }}>
              CODE PROMO OFFICIEL
            </div>
            <div style={{ fontSize: 44, fontWeight: 900, letterSpacing: 3, lineHeight: 1, color: "#f7d98c", marginTop: 4 }}>
              MK45
            </div>
            <div style={{ fontWeight: 800, fontSize: 16, marginTop: 6, lineHeight: 1.3 }}>
              100% DE BONUS<br />SUR VOTRE PREMIER RECHARGEMENT
            </div>
            <p style={{ color: "#858994", fontSize: 12, marginTop: 8 }}>
              Utilisez le code <b style={{ color: "#e9bd55" }}>MK45</b> lors de votre inscription pour débloquer votre bonus.
            </p>
            <button onClick={copyCode} style={{ marginTop: 14, width: "100%", padding: "15px 22px", borderRadius: 14, border: "none", background: "linear-gradient(180deg, #fff3b0, #f7d98c 30%, #e9bd55 60%, #9f792d)", color: "#1a1200", fontSize: 13, fontWeight: 900 }}>
              📋 COPIER LE CODE MK45
            </button>
          </div>
        </div>

        {/* PRONOSTICS */}
        <div style={{ marginTop: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 21, fontWeight: 900 }}>🎯 Pronostics <span style={{ color: "#e9bd55" }}>du Jour</span></div>
            <div style={{ background: "rgba(0,255,100,.08)", border: "1px solid rgba(74,222,128,.4)", color: "#4ade80", fontSize: 11, fontWeight: 900, padding: "7px 11px", borderRadius: 999 }}>● LIVE</div>
          </div>

          {/* PRONO 1 */}
          <div style={{ background: "linear-gradient(160deg, #20222a, #131419 55%, #0c0d10)", border: "1px solid rgba(233,189,85,.28)", borderRadius: 22, padding: 16, marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontSize: 11, fontWeight: 900, color: "#e9bd55" }}>🏆 LIGUE 1 • FRANCE</div>
              <div style={{ fontSize: 11, color: "#858994" }}>⏰ 20:45</div>
            </div>
            <div style={{ fontSize: 19, fontWeight: 900, marginTop: 10 }}>Paris SG vs Marseille</div>
            <div style={{ fontSize: 12, color: "#858994" }}>Parc des Princes - Paris</div>
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginTop: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 800, padding: "6px 10px", borderRadius: 999, background: "rgba(255,120,0,.15)", color: "#ff9a5a" }}>🔥 TOP PRONO</span>
              <span style={{ fontSize: 11, fontWeight: 800, padding: "6px 10px", borderRadius: 999, background: "rgba(233,189,85,.16)", color: "#f7d98c" }}>⭐ 88% Confiance</span>
            </div>
            <div style={{ marginTop: 14, background: "linear-gradient(180deg, #fff6c9, #e9bd55)", color: "#1a1200", borderRadius: 14, padding: "13px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div><div style={{ fontSize: 10, fontWeight: 900, opacity: .6 }}>MON PRONOSTIC</div><b style={{ fontSize: 15 }}>PSG Gagne + Over 1.5</b></div>
              <div style={{ textAlign: "right" }}><span style={{ fontSize: 26, fontWeight: 900 }}>1.85</span><div style={{ fontSize: 10, fontWeight: 800 }}>COTE</div></div>
            </div>
            <div style={{ marginTop: 14, height: 7, background: "rgba(255,255,255,.1)", borderRadius: 999, overflow: "hidden" }}>
              <div style={{ width: "88%", height: "100%", background: "#e9bd55" }}></div>
            </div>
          </div>

          {/* PRONO 2 */}
          <div style={{ background: "linear-gradient(160deg, #20222a, #131419 55%, #0c0d10)", border: "1px solid rgba(233,189,85,.28)", borderRadius: 22, padding: 16, marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontSize: 11, fontWeight: 900, color: "#e9bd55" }}>🏆 PREMIER LEAGUE</div>
              <div style={{ fontSize: 11, color: "#858994" }}>⏰ 18:30</div>
            </div>
            <div style={{ fontSize: 19, fontWeight: 900, marginTop: 10 }}>Arsenal vs Chelsea</div>
            <div style={{ fontSize: 12, color: "#858994" }}>Emirates Stadium - Londres</div>
            <div style={{ marginTop: 14, background: "linear-gradient(180deg, #fff6c9, #e9bd55)", color: "#1a1200", borderRadius: 14, padding: "13px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div><div style={{ fontSize: 10, fontWeight: 900, opacity: .6 }}>MON PRONOSTIC</div><b style={{ fontSize: 15 }}>Les 2 équipes marquent</b></div>
              <div style={{ textAlign: "right" }}><span style={{ fontSize: 26, fontWeight: 900 }}>1.72</span><div style={{ fontSize: 10, fontWeight: 800 }}>COTE</div></div>
            </div>
            <div style={{ marginTop: 14, height: 7, background: "rgba(255,255,255,.1)", borderRadius: 999, overflow: "hidden" }}>
              <div style={{ width: "82%", height: "100%", background: "#e9bd55" }}></div>
            </div>
          </div>

          {/* PRONO 3 */}
          <div style={{ background: "linear-gradient(160deg, #20222a, #131419 55%, #0c0d10)", border: "1px solid rgba(233,189,85,.28)", borderRadius: 22, padding: 16, marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontSize: 11, fontWeight: 900, color: "#e9bd55" }}>🏆 LA LIGA • ESPAGNE</div>
              <div style={{ fontSize: 11, color: "#858994" }}>⏰ 21:00</div>
            </div>
            <div style={{ fontSize: 19, fontWeight: 900, marginTop: 10 }}>Real Madrid vs Barcelone</div>
            <div style={{ fontSize: 12, color: "#858994" }}>Santiago Bernabéu</div>
            <div style={{ marginTop: 14, background: "linear-gradient(180deg, #fff6c9, #e9bd55)", color: "#1a1200", borderRadius: 14, padding: "13px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div><div style={{ fontSize: 10, fontWeight: 900, opacity: .6 }}>MON PRONOSTIC</div><b style={{ fontSize: 15 }}>Over 2.5 Buts</b></div>
              <div style={{ textAlign: "right" }}><span style={{ fontSize: 26, fontWeight: 900 }}>1.95</span><div style={{ fontSize: 10, fontWeight: 800 }}>COTE</div></div>
            </div>
            <div style={{ marginTop: 14, height: 7, background: "rgba(255,255,255,.1)", borderRadius: 999, overflow: "hidden" }}>
              <div style={{ width: "91%", height: "100%", background: "#e9bd55" }}></div>
            </div>
          </div>

          <div style={{ padding: 16, textAlign: "center", background: "#1f1a08", border: "1px dashed rgba(233,189,85,.6)", borderRadius: 18 }}>
            <div style={{ fontWeight: 900, fontSize: 15 }}>👑 Tu veux les pronos VIP ?</div>
            <div style={{ color: "#858994", fontSize: 12, marginTop: 4 }}>5 à 8 pronostics gagnants chaque jour</div>
            <button style={{ width: "100%", marginTop: 12, padding: "15px 22px", borderRadius: 14, border: "none", background: "linear-gradient(180deg, #fff3b0, #e9bd55)", color: "#1a1200", fontSize: 13, fontWeight: 900 }}>🔓 DÉBLOQUER LE VIP →</button>
          </div>
        </div>

        <div style={{ textAlign: "center", color: "#858994", fontSize: 11, marginTop: 24 }}>
          © 2026 MK45 Pronostics • Jouez responsablement • 18+
        </div>

      </div>
    </main>
  );
        } 
