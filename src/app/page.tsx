"use client";

export default function Home() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #05060a; }
        .bg {
          min-height: 100vh;
          background: #05060a;
          position: relative;
          overflow: hidden;
          font-family: sans-serif;
          color: white;
          padding: 20px 16px 40px;
        }
        .bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 15% 0%, #0a2a5e 0%, transparent 55%),
            radial-gradient(ellipse at 90% 25%, #0e4a8a 0%, transparent 50%),
            radial-gradient(ellipse at 50% 100%, #062a5e 0%, transparent 50%);
        }
        .streak1 {
          position: absolute; top: -80px; left: -80px;
          width: 380px; height: 380px;
          background: linear-gradient(135deg, #00d4ff, transparent);
          opacity: .28; filter: blur(55px); transform: rotate(28deg);
        }
        .streak2 {
          position: absolute; bottom: -80px; right: -80px;
          width: 380px; height: 380px;
          background: linear-gradient(135deg, #007bff, transparent);
          opacity: .28; filter: blur(55px); transform: rotate(-28deg);
        }
        .wrap { max-width: 430px; margin: 0 auto; position: relative; z-index: 1; }
        .header { display: flex; justify-content: space-between; align-items: center; padding: 8px 0 20px; }
        .logo { font-weight: 900; font-size: 22px; letter-spacing: 1px; }
        .logo span { color: #00d4ff; }
        .pill {
          background: rgba(255,255,255,.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,.15);
          padding: 6px 12px; border-radius: 999px;
          font-size: 11px; font-weight: 700;
        }
        .glass {
          background: rgba(255,255,255,.07);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 20px 50px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.2);
          text-align: center;
        }
        .badge {
          display: inline-block;
          background: rgba(0,212,255,.15);
          border: 1px solid rgba(0,212,255,.4);
          color: #00d4ff; font-weight: 800; font-size: 11px;
          padding: 6px 12px; border-radius: 999px;
        }
        .title { font-size: 32px; font-weight: 900; line-height: 1.1; margin: 16px 0 6px; }
        .title span {
          background: linear-gradient(90deg, #00d4ff, #007bff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .sub { color: rgba(255,255,255,.65); font-size: 13px; }
        .codeBox {
          margin-top: 20px;
          background: rgba(0,0,0,.35);
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 18px; padding: 16px;
        }
        .codeLabel { font-size: 10px; letter-spacing: 2px; color: rgba(255,255,255,.5); font-weight: 800; }
        .code { font-size: 44px; font-weight: 900; letter-spacing: 6px; line-height: 1; margin: 6px 0; }
        .btnMain {
          width: 100%; margin-top: 16px; padding: 15px;
          border-radius: 14px; border: none;
          background: linear-gradient(90deg, #00d4ff, #007bff);
          color: white; font-weight: 900; font-size: 14px; cursor: pointer;
          box-shadow: 0 10px 25px rgba(0,123,255,.4);
        }
        .btnGhost {
          display: block; margin-top: 10px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.15);
          color: white; text-decoration: none;
          padding: 14px; border-radius: 14px;
          font-weight: 800; font-size: 13px;
        }
        .card {
          background: rgba(255,255,255,.06);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 20px; padding: 16px; margin-bottom: 12px;
          text-align: left;
        }
        .cardTop { display: flex; justify-content: space-between; font-size: 11px; color: #00d4ff; font-weight: 800; }
        .cardTop span:last-child { color: #4ade80; }
        .match { font-size: 17px; font-weight: 900; margin-top: 6px; }
        .pronoBox {
          margin-top: 12px;
          background: rgba(0,212,255,.12);
          border: 1px solid rgba(0,212,255,.25);
          border-radius: 12px; padding: 12px 14px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .pronoLabel { font-size: 10px; font-weight: 800; opacity: .6; }
        .cote { font-size: 22px; font-weight: 900; color: #00d4ff; }
        .footer { text-align: center; color: rgba(255,255,255,.4); font-size: 11px; margin-top: 20px; }
      `}</style>

      <div className="bg">
        <div className="streak1"></div>
        <div className="streak2"></div>

        <div className="wrap">
          <div className="header">
            <div className="logo">MK<span>45</span></div>
            <div className="pill">🟢 2,847 EN LIGNE</div>
          </div>

          <div className="glass">
            <div className="badge">✨ OFFRE EXCLUSIVE - AUJOURD'HUI</div>
            <h1 className="title">GAGNE AVEC<br /><span>LES PROS.</span></h1>
            <p className="sub">Pronostics vérifiés • 89% de réussite ce mois</p>

            <div className="codeBox">
              <div className="codeLabel">TON CODE PROMO</div>
              <div className="code">MK45</div>
              <div style={{ fontWeight: 800, fontSize: 13 }}>100% DE BONUS SUR TON 1ER DÉPÔT</div>
            </div>

            <button className="btnMain" onClick={() => { navigator.clipboard.writeText("MK45"); alert("Code MK45 copié ✅"); }}>📋 COPIER LE CODE MK45</button>
            <a className="btnGhost" href="https://wa.me/2250000000000">💬 REJOINDRE LE VIP WHATSAPP →</a>
          </div>

          <h2 style={{ fontSize: 18, fontWeight: 900, margin: "24px 0 14px" }}>🎯 Pronostics du Jour</h2>

          {[
            { ligue: "LIGUE 1 • 20:45", match: "PSG vs Marseille", prono: "PSG Gagne + Over 1.5", cote: "1.85" },
            { ligue: "PREMIER LEAGUE • 18:30", match: "Arsenal vs Chelsea", prono: "Les 2 équipes marquent", cote: "1.72" },
            { ligue: "LA LIGA • 21:00", match: "Real Madrid vs Barça", prono: "Over 2.5 Buts", cote: "1.95" },
          ].map((m, i) => (
            <div key={i} className="card">
              <div className="cardTop"><span>{m.ligue}</span><span>Confiance 92%</span></div>
              <div className="match">{m.match}</div>
              <div className="pronoBox">
                <div><div className="pronoLabel">MON PRONOSTIC</div><b style={{ fontSize: 13 }}>{m.prono}</b></div>
                <div style={{ textAlign: "right" }}><span className="cote">{m.cote}</span><div style={{ fontSize: 10 }}>COTE</div></div>
              </div>
            </div>
          ))}

          <div className="footer">© 2026 MK45 • 18+ Jouez responsablement</div>
        </div>
      </div>
    </>
  );
      }
