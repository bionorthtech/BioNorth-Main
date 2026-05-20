import Reveal from "../components/Reveal.jsx";
import {
  AIMETR_FEATURES,
  AIMETR_PROVIDERS,
  AIMETR_PET_STATES,
  AIMETR_BLE,
} from "../data/content.js";

export default function SideProjects() {
  return (
    <div>
      {/* PAGE HEADER */}
      <section className="section" style={{ paddingTop: "128px", paddingBottom: "40px" }}>
        <div className="container">
          <div className="eyebrow">SIDE PROJECTS</div>
          <div className="section-divider" />
          <h2 className="section-title" style={{ maxWidth: "760px" }}>
            Things we build<br />
            <em>along the way.</em>
          </h2>
          <p className="section-lead" style={{ marginBottom: "0" }}>
            Our mission is neurotech — but we like to build. These are the side projects we ship between
            milestones. More are coming, so keep an eye on our GitHub.
          </p>
        </div>
      </section>

      {/* AIMETR HERO */}
      <section className="section section--alt section--bordered" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span className="mono" style={{ fontSize: "9px", color: "#00D4FF66", letterSpacing: "2px" }}>PROJECT 01</span>
            <span style={{ width: "6px", height: "6px", background: "var(--accent-green)", borderRadius: "50%", animation: "pulse 1.5s infinite", display: "inline-block" }} />
            <span className="mono" style={{ fontSize: "9px", color: "var(--accent-green)", letterSpacing: "1px" }}>OPEN SOURCE · v2.0</span>
          </div>
          <h3 className="serif" style={{ fontSize: "clamp(34px, 5vw, 56px)", color: "var(--heading)", lineHeight: 1.1, marginBottom: "20px" }}>
            AiMetr <span style={{ color: "var(--accent)" }}>·</span> AI usage, watched.
          </h3>
          <p className="sans" style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "var(--muted)", lineHeight: 1.7, maxWidth: "620px", marginBottom: "28px", fontWeight: 300 }}>
            A multi-provider AI usage monitor with a real-time dashboard, a desktop-pet overlay, and an optional
            ESP32-S3 AMOLED hardware companion. Track rate limits, token usage, and cost across Claude, OpenAI /
            Codex, DeepSeek, Ollama, and LM Studio — all in one place.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="https://github.com/bionorthtech/AiMetr" target="_blank" rel="noreferrer" className="btn btn--primary">View on GitHub →</a>
            <a href="https://github.com/bionorthtech/AiMetr#getting-started" target="_blank" rel="noreferrer" className="btn btn--ghost">Get Started</a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">FEATURES</div>
          <div className="section-divider" />
          <h3 className="section-title" style={{ fontSize: "clamp(24px, 3vw, 36px)", marginBottom: "40px" }}>Everything in one window.</h3>
          <div className="grid grid-3">
            {AIMETR_FEATURES.map((f, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06} className="card">
                <div style={{ width: "28px", height: "2px", background: "var(--accent)", marginBottom: "16px" }} />
                <div className="sans" style={{ fontSize: "14px", color: "var(--heading)", fontWeight: 600, marginBottom: "10px" }}>{f.title}</div>
                <div className="sans" style={{ fontSize: "12px", color: "var(--muted-3)", lineHeight: 1.6 }}>{f.desc}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROVIDERS */}
      <section className="section section--alt">
        <div className="container">
          <div className="eyebrow">PROVIDERS</div>
          <div className="section-divider" />
          <h3 className="section-title" style={{ fontSize: "clamp(24px, 3vw, 36px)", marginBottom: "12px" }}>Five providers, five mascots.</h3>
          <p className="section-lead">
            Each provider gets a pixel-art character that reacts to live activity. Connect as many as you like —
            local models need no credentials.
          </p>
          <div style={{ display: "grid", gap: "1px", background: "var(--border-soft)", border: "1px solid var(--border)" }}>
            {AIMETR_PROVIDERS.map((p, i) => (
              <div key={i} className="provider-row" style={{ background: "var(--bg-3)" }}>
                <span style={{ fontSize: "24px" }}>{p.emoji}</span>
                <span className="sans" style={{ fontSize: "13px", color: "var(--heading)", fontWeight: 600 }}>{p.provider}</span>
                <span className="mono" style={{ fontSize: "12px", color: "var(--accent)" }}>{p.mascot}</span>
                <span className="sans" style={{ fontSize: "12px", color: "var(--muted-3)", lineHeight: 1.5 }}>{p.tracked}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PET STATES + HARDWARE */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: "40px", alignItems: "start" }}>
            <Reveal>
              <div className="eyebrow">DESKTOP PET</div>
              <div className="section-divider" />
              <h3 className="section-title" style={{ fontSize: "clamp(22px, 3vw, 30px)", marginBottom: "24px" }}>Five live states.</h3>
              <div style={{ border: "1px solid var(--border)" }}>
                {AIMETR_PET_STATES.map((s, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", borderBottom: i < AIMETR_PET_STATES.length - 1 ? "1px solid var(--border-soft)" : "none" }}>
                    <span className="mono" style={{ fontSize: "12px", color: "var(--accent)" }}>{s.state}</span>
                    <span className="sans" style={{ fontSize: "12px", color: "var(--muted-3)", textAlign: "right" }}>{s.trigger}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="eyebrow">HARDWARE</div>
              <div className="section-divider" />
              <h3 className="section-title" style={{ fontSize: "clamp(22px, 3vw, 30px)", marginBottom: "24px" }}>ESP32-S3 companion.</h3>
              <p className="sans" style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "20px" }}>
                An optional 480×480 AMOLED device displays your usage over BLE via LVGL firmware. A standalone
                Python daemon polls every provider and pushes a v2 multi-provider payload to the board.
              </p>
              <div className="card" style={{ padding: "20px" }}>
                <div className="mono" style={{ fontSize: "9px", color: "#00D4FF66", letterSpacing: "2px", marginBottom: "12px" }}>BLE GATT</div>
                {AIMETR_BLE.map((b, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "7px 0", borderBottom: i < AIMETR_BLE.length - 1 ? "1px solid var(--border-soft)" : "none" }}>
                    <span className="sans" style={{ fontSize: "11px", color: "var(--muted-2)", flexShrink: 0 }}>{b.label}</span>
                    <span className="mono" style={{ fontSize: "10px", color: "var(--muted-3)", wordBreak: "break-all", textAlign: "right" }}>{b.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="section section--alt">
        <div className="container">
          <div className="eyebrow">GETTING STARTED</div>
          <div className="section-divider" />
          <h3 className="section-title" style={{ fontSize: "clamp(24px, 3vw, 36px)", marginBottom: "40px" }}>Run it in three ways.</h3>
          <div className="grid grid-3">
            {[
              { tag: "DESKTOP APP", title: "Electron", code: "git clone …/AiMetr\ncd AiMetr\nnpm install\nnpm start", note: "Node.js 18+. Settings opens on first launch." },
              { tag: "HARDWARE", title: "Python daemon", code: "cd daemon\npip install -r requirements.txt\ncp config.example.json config.json\npython multi_provider_daemon.py", note: "Python 3.10+. Pushes data to the ESP32 over BLE." },
              { tag: "FIRMWARE", title: "ESP32-S3", code: "cd firmware\nidf.py set-target esp32s3\nidf.py build flash monitor", note: "ESP-IDF v5.x + a 480×480 AMOLED board." },
            ].map((g, i) => (
              <Reveal key={i} delay={i * 0.08} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div className="mono" style={{ fontSize: "9px", color: "#00D4FF66", letterSpacing: "2px", marginBottom: "8px" }}>{g.tag}</div>
                <div className="sans" style={{ fontSize: "15px", color: "var(--heading)", fontWeight: 600, marginBottom: "14px" }}>{g.title}</div>
                <pre className="mono" style={{ fontSize: "11px", color: "var(--muted-2)", background: "var(--bg)", border: "1px solid var(--border-soft)", padding: "12px", lineHeight: 1.7, overflowX: "auto", marginBottom: "14px", whiteSpace: "pre" }}>{g.code}</pre>
                <div className="sans" style={{ fontSize: "11px", color: "var(--muted-3)", lineHeight: 1.5, marginTop: "auto" }}>{g.note}</div>
              </Reveal>
            ))}
          </div>

          <Reveal className="card" style={{ marginTop: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <div className="serif" style={{ fontSize: "20px", color: "var(--heading)", marginBottom: "6px" }}>MIT licensed · open source</div>
              <div className="sans" style={{ fontSize: "12px", color: "var(--muted-3)" }}>More side projects are on the way — watch the org to catch them first.</div>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://github.com/bionorthtech/AiMetr" target="_blank" rel="noreferrer" className="btn btn--primary">AiMetr Repo →</a>
              <a href="https://github.com/bionorthtech" target="_blank" rel="noreferrer" className="btn btn--ghost">Follow BioNorth →</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
