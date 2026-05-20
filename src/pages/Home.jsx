import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EEGWave from "../components/EEGWave.jsx";
import Reveal from "../components/Reveal.jsx";
import {
  STATS,
  EXISTING_APPROACHES,
  HOW_IT_WORKS,
  TECH_SPECS,
  SCIENCE_REFS,
  EEG_BANDS,
  PHASES,
  ROADMAP_METRICS,
  IP_STATUS,
  CURRENT_HARDWARE,
  TEAM_HIGHLIGHTS,
  CONNECT_CARDS,
  FUNDING_TARGETS,
} from "../data/content.js";

export default function Home() {
  const [activePhase, setActivePhase] = useState(0);
  const navigate = useNavigate();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg-grid" />
        <div className="hero__glow" />
        <div className="hero__waves" style={{ bottom: 80, opacity: 0.3 }}>
          <EEGWave height={140} color="#00D4FF" opacity={0.8} />
        </div>
        <div className="hero__waves" style={{ bottom: 40, opacity: 0.15 }}>
          <EEGWave height={100} color="#4488FF" opacity={0.6} />
        </div>

        <div style={{ position: "relative", maxWidth: "820px" }}>
          <div className="mono fade-up" style={{ fontSize: "10px", letterSpacing: "4px", color: "var(--accent)", marginBottom: "24px" }}>
            BIONORTH TECH — PATENT PENDING
          </div>
          <h1 className="serif neural-glow fade-up" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.05, color: "var(--heading)", marginBottom: "24px", animationDelay: "0.1s" }}>
            Restoring Movement<br />
            <em style={{ color: "var(--accent)" }}>Through Neural Intelligence</em>
          </h1>
          <p className="sans fade-up" style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "var(--muted)", lineHeight: 1.7, maxWidth: "580px", marginBottom: "40px", fontWeight: 300, animationDelay: "0.25s" }}>
            BioNorth is a closed-loop brain-computer interface that detects when the brain's
            movement command fails to reach the muscle — and intervenes with precision
            electrical stimulation to restore gait in patients with Parkinson's disease.
          </p>
          <div className="fade-up" style={{ display: "flex", gap: "16px", flexWrap: "wrap", animationDelay: "0.4s" }}>
            <button onClick={() => scrollTo("#solution")} className="btn btn--primary">See How It Works</button>
            <button onClick={() => scrollTo("#connect")} className="btn btn--ghost">Get Involved</button>
          </div>
        </div>

        <div className="hero__badge">
          <div className="mono" style={{ fontSize: "8px", color: "#00D4FF66", letterSpacing: "2px", marginBottom: "4px" }}>SYSTEM STATUS</div>
          <div className="mono" style={{ fontSize: "11px", color: "var(--accent)", letterSpacing: "1px" }}>PHASE 0 — ACTIVE</div>
          <div className="sans" style={{ fontSize: "10px", color: "var(--muted-3)", marginTop: "4px" }}>Prototype Stabilization</div>
        </div>
      </section>

      {/* STATS */}
      <section className="section section--alt section--bordered" style={{ padding: "60px 64px" }}>
        <div className="grid grid-4" style={{ maxWidth: "1000px", margin: "0 auto", gap: "40px" }}>
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 0.08} style={{ textAlign: "center" }}>
              <div className="serif neural-glow" style={{ fontSize: "clamp(34px, 5vw, 42px)", color: "var(--accent)", marginBottom: "8px" }}>{s.value}</div>
              <div className="sans" style={{ fontSize: "12px", color: "var(--muted-3)", lineHeight: 1.5 }}>{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="section">
        <div className="container">
          <div className="eyebrow">01 — THE PROBLEM</div>
          <div className="section-divider" />
          <h2 className="section-title" style={{ maxWidth: "640px" }}>
            Frozen in place.<br />
            <em>The brain fires. The body doesn't move.</em>
          </h2>
          <div className="grid grid-2" style={{ gap: "60px", alignItems: "start", marginTop: "8px" }}>
            <Reveal>
              <p className="sans" style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "20px", fontSize: "15px" }}>
                Freezing of gait (FOG) is a sudden, episodic inability to generate forward stepping that
                affects over a million Americans with Parkinson's disease, progressive supranuclear palsy,
                and related conditions.
              </p>
              <p className="sans" style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "20px", fontSize: "15px" }}>
                During a FOG episode, the patient intends to walk. The motor cortex sends the command. But
                abnormal beta-frequency synchronization in the basal ganglia intercepts that signal —
                creating a neurological lock between intention and execution that can last seconds to minutes.
              </p>
              <p className="sans" style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "15px" }}>
                The result is a patient standing still, unable to move, fully conscious — the command present
                in the brain, the muscles unresponsive. Every step attempted is a failure. Falls are common.
                Independence disappears.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mono" style={{ fontSize: "9px", color: "#00D4FF66", letterSpacing: "2px", marginBottom: "16px" }}>EXISTING APPROACHES — AND WHY THEY FALL SHORT</div>
              {EXISTING_APPROACHES.map((item, i) => (
                <div key={i} style={{ padding: "12px 16px", borderLeft: "2px solid #FF444433", marginBottom: "8px", background: "#FF440408" }}>
                  <div className="sans" style={{ fontSize: "12px", color: "#DDD", fontWeight: 600, marginBottom: "4px" }}>{item.name}</div>
                  <div className="sans" style={{ fontSize: "11px", color: "var(--muted-3)", lineHeight: 1.5 }}>{item.gap}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="section section--alt">
        <div className="container">
          <div className="eyebrow">02 — THE SOLUTION</div>
          <div className="section-divider" />
          <h2 className="section-title" style={{ maxWidth: "720px" }}>
            Detect the failure.<br />
            <em style={{ color: "var(--accent)" }}>Not just the intention.</em>
          </h2>
          <p className="section-lead">
            BioNorth is designed to detect the specific failure state — motor intent present but muscle
            response absent — rather than triggering on intent alone. Stimulation fires only when a freeze
            is confirmed.
          </p>

          <div className="grid grid-5" style={{ gap: 0 }}>
            {HOW_IT_WORKS.map((step, i) => (
              <Reveal key={i} delay={i * 0.06} style={{ padding: "28px 20px", borderLeft: "1px solid var(--border-soft)" }}>
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{step.icon}</div>
                <div className="mono" style={{ fontSize: "8px", color: "#00D4FF55", letterSpacing: "2px", marginBottom: "8px" }}>STEP {step.step}</div>
                <div className="sans" style={{ fontSize: "13px", color: "var(--text)", fontWeight: 600, marginBottom: "10px", lineHeight: 1.3 }}>{step.title}</div>
                <div className="sans" style={{ fontSize: "11px", color: "var(--muted-3)", lineHeight: 1.6 }}>{step.body}</div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="distinction">
              <div style={{ flexShrink: 0 }}>
                <div className="mono" style={{ fontSize: "9px", color: "#00D4FF88", letterSpacing: "2px", marginBottom: "8px" }}>KEY DISTINCTION</div>
                <div className="serif" style={{ fontSize: "22px", color: "var(--accent)" }}>Patent Pending</div>
              </div>
              <div className="sans" style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.7 }}>
                Every prior BCI-FES system triggers stimulation when motor intent is detected. BioNorth
                triggers stimulation when motor intent is detected{" "}
                <strong style={{ color: "var(--heading)" }}>AND</strong> muscle activation has failed to occur
                within a defined temporal window. This movement-failure criterion is the core patentable
                innovation — stimulation is reserved exclusively for the freeze state, terminating
                automatically when EMG confirms successful motor execution.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="section">
        <div className="container">
          <div className="eyebrow">03 — TECHNOLOGY</div>
          <div className="section-divider" />
          <h2 className="section-title">
            Two wearable units.<br />
            <em>One closed loop.</em>
          </h2>
          <p className="section-lead">
            The production architecture pairs a headset EEG unit with a leg-band EMG + FES unit,
            communicating wirelessly. The system operates standalone — no phone or laptop required.
          </p>

          <div className="grid grid-2">
            {TECH_SPECS.map((spec, i) => (
              <Reveal key={i} delay={(i % 2) * 0.08} className="card">
                <div className="mono" style={{ fontSize: "9px", color: "#00D4FF66", letterSpacing: "2px", marginBottom: "12px" }}>{spec.component.toUpperCase()}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <span className="mono" style={{ fontSize: "9px", color: "#FF8C0088", letterSpacing: "1px" }}>NOW</span>
                    <span className="sans" style={{ fontSize: "12px", color: "var(--muted-2)" }}>{spec.current}</span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <span className="mono" style={{ fontSize: "9px", color: "#00D4FF88", letterSpacing: "1px" }}>TARGET</span>
                    <span className="sans" style={{ fontSize: "12px", color: "#BBB" }}>{spec.target}</span>
                  </div>
                </div>
                {spec.bands.map((b, j) => (
                  <div key={j} className="mono" style={{ fontSize: "11px", color: "var(--muted-3)", padding: "5px 0", borderTop: "1px solid var(--border-soft)" }}>{b}</div>
                ))}
                <div style={{ marginTop: "12px", padding: "8px 10px", background: "#00D4FF08", border: "1px solid #00D4FF11" }}>
                  <span className="mono" style={{ fontSize: "9px", color: "#00D4FF66" }}>PLACEMENT — </span>
                  <span className="sans" style={{ fontSize: "11px", color: "var(--muted-2)" }}>{spec.placement}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal style={{ marginTop: "40px", padding: "24px", borderLeft: "2px solid #00D4FF33" }}>
            <div className="mono" style={{ fontSize: "9px", color: "#00D4FF66", letterSpacing: "2px", marginBottom: "8px" }}>SIGNAL CHAIN</div>
            <div className="mono" style={{ fontSize: "11px", color: "var(--muted-3)", lineHeight: 2.2 }}>
              Motor Cortex → Scalp EEG (Cz/FCz/Fz) → ADS1299 ADC → nRF5340 DSP → Butterworth Filters →
              Band Power (θ/μ/β) → State Machine → [IF FREEZING] → I2C/SPI FES Driver → Constant-Current
              Pulses → Tibialis Anterior → EMG Confirmation → State Machine → [STIM OFF]
            </div>
          </Reveal>
        </div>
      </section>

      {/* SCIENCE */}
      <section id="science" className="section section--alt">
        <div className="container">
          <div className="eyebrow">04 — THE SCIENCE</div>
          <div className="section-divider" />
          <h2 className="section-title">
            Grounded in neuroscience.<br />
            <em>Built from first principles.</em>
          </h2>
          <p className="section-lead">
            BioNorth's detection logic is built on established neurophysiological findings from movement-disorder
            research. Every design decision traces to a peer-reviewed basis.
          </p>

          <div className="grid grid-2">
            {SCIENCE_REFS.map((ref, i) => (
              <Reveal key={i} delay={(i % 2) * 0.08} className="card">
                <div className="mono" style={{ fontSize: "8px", color: "#00D4FF44", letterSpacing: "2px", marginBottom: "12px" }}>FINDING {String(i + 1).padStart(2, "0")}</div>
                <p className="sans" style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "16px", fontStyle: "italic", borderLeft: "2px solid #333", paddingLeft: "12px" }}>
                  "{ref.finding}"
                </p>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "16px", height: "16px", background: "#00D4FF22", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                    <span style={{ fontSize: "8px", color: "var(--accent)" }}>→</span>
                  </div>
                  <p className="sans" style={{ fontSize: "12px", color: "var(--muted-3)", lineHeight: 1.6 }}>{ref.application}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-4" style={{ marginTop: "40px", gap: "1px", background: "var(--border-soft)" }}>
            {EEG_BANDS.map((b, i) => (
              <div key={i} style={{ padding: "24px", background: "var(--bg-2)" }}>
                <div className="mono" style={{ fontSize: "9px", letterSpacing: "2px", color: b.color, marginBottom: "6px" }}>{b.band}</div>
                <div className="mono" style={{ fontSize: "11px", color: "#555", marginBottom: "10px" }}>{b.hz}</div>
                <div className="sans" style={{ fontSize: "12px", color: "#DDD", fontWeight: 600, marginBottom: "8px" }}>{b.role}</div>
                <div className="sans" style={{ fontSize: "11px", color: "var(--muted-3)", lineHeight: 1.5 }}>{b.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section id="development" className="section">
        <div className="container">
          <div className="eyebrow">05 — DEVELOPMENT STATUS</div>
          <div className="section-divider" />
          <h2 className="section-title">
            Prototype to product.<br />
            <em>A defined path forward.</em>
          </h2>
          <p className="section-lead">
            A 28–36 month roadmap from current working prototype to FDA 510(k)-cleared commercial device.
          </p>

          <div className="phase-tabs">
            {PHASES.map((phase, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className="phase-tab"
                style={{
                  background: activePhase === i ? "var(--bg-3)" : "transparent",
                  borderBottom: activePhase === i ? "2px solid var(--accent)" : "2px solid var(--border)",
                }}
              >
                <div className="mono" style={{ fontSize: "8px", color: phase.status === "IN PROGRESS" ? "var(--accent-green)" : "var(--faint)", letterSpacing: "1px", marginBottom: "6px" }}>
                  {phase.status === "IN PROGRESS" ? "● " : ""}{phase.id}
                </div>
                <div className="sans" style={{ fontSize: "11px", color: activePhase === i ? "var(--heading)" : "var(--muted-3)", fontWeight: 600, lineHeight: 1.3 }}>{phase.title}</div>
                <div className="mono" style={{ fontSize: "9px", color: "#333", marginTop: "4px" }}>{phase.duration}</div>
              </button>
            ))}
          </div>

          <div style={{ padding: "32px", background: "var(--bg-3)", border: "1px solid var(--border)", borderTop: "none" }}>
            <div className="grid grid-3" style={{ gap: "8px" }}>
              {PHASES[activePhase].items.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "10px 0" }}>
                  <div style={{ width: "16px", height: "16px", background: "#00D4FF11", border: "1px solid #00D4FF22", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                    <span style={{ color: "var(--accent)", fontSize: "8px" }}>▸</span>
                  </div>
                  <span className="sans" style={{ fontSize: "12px", color: "var(--muted-2)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-3" style={{ marginTop: "40px" }}>
            {ROADMAP_METRICS.map((m, i) => (
              <Reveal key={i} delay={i * 0.08} style={{ padding: "20px", border: "1px solid var(--border)" }}>
                <div className="mono" style={{ fontSize: "9px", color: "var(--faint)", letterSpacing: "1px", marginBottom: "8px" }}>{m.label}</div>
                <div className="serif" style={{ fontSize: "24px", color: "var(--accent)", marginBottom: "4px" }}>{m.value}</div>
                <div className="sans" style={{ fontSize: "11px", color: "#555" }}>{m.note}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section section--alt">
        <div className="container">
          <div className="eyebrow">06 — THE TEAM</div>
          <div className="section-divider" />
          <div className="grid grid-2" style={{ gap: "80px", alignItems: "center" }}>
            <Reveal>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>
                Built by high-school students.<br />
                <em>For people who can't walk.</em>
              </h2>
              <p className="sans" style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "20px", fontSize: "15px" }}>
                BioNorth is the work of a team of high-school students who came together to build it from the
                ground up — researching the neuroscience, wiring the hardware, and writing the detection
                algorithm in our own time.
              </p>
              <p className="sans" style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "20px", fontSize: "15px" }}>
                What started as detecting movement intention became something more precise: detecting movement
                failure. The realization that existing BCI systems were solving the wrong problem — triggering
                on intent instead of on the absence of response — drove a complete architectural rethink.
              </p>
              <p className="sans" style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "15px" }}>
                Along the way we've earned school awards and competed at science and engineering competitions.
                Today we're filing a provisional patent and forming an LLC to carry the work forward.
              </p>
            </Reveal>

            <div style={{ display: "grid", gap: "16px" }}>
              <div className="card">
                <div className="mono" style={{ fontSize: "9px", color: "#00D4FF66", letterSpacing: "2px", marginBottom: "16px" }}>WHERE WE STAND</div>
                {TEAM_HIGHLIGHTS.map((h, i) => (
                  <div key={i} style={{ padding: "10px 0", borderBottom: i < TEAM_HIGHLIGHTS.length - 1 ? "1px solid var(--border-soft)" : "none" }}>
                    <div className="sans" style={{ fontSize: "13px", color: "var(--heading)", fontWeight: 600, marginBottom: "3px" }}>{h.label}</div>
                    <div className="sans" style={{ fontSize: "12px", color: "var(--muted-3)", lineHeight: 1.5 }}>{h.detail}</div>
                  </div>
                ))}
              </div>

              <div className="card" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div>
                  <div className="mono" style={{ fontSize: "9px", color: "#00D4FF66", letterSpacing: "2px", marginBottom: "12px" }}>IP STATUS</div>
                  {IP_STATUS.map((ip, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: "1px solid var(--border-soft)", gap: "8px" }}>
                      <span className="sans" style={{ fontSize: "11px", color: "var(--muted-2)" }}>{ip.label}</span>
                      <span className="mono" style={{ fontSize: "9px", color: ip.color, letterSpacing: "1px" }}>{ip.status}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="mono" style={{ fontSize: "9px", color: "#00D4FF66", letterSpacing: "2px", marginBottom: "12px" }}>CURRENT HARDWARE</div>
                  {CURRENT_HARDWARE.map((hw, i) => (
                    <div key={i} className="mono" style={{ fontSize: "10px", color: "#555", padding: "5px 0", borderBottom: "1px solid #0A0D14", lineHeight: 1.4 }}>· {hw}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section id="connect" className="section">
        <div className="container">
          <div className="eyebrow">07 — CONNECT WITH US</div>
          <div className="section-divider" />
          <h2 className="section-title">
            This device doesn't exist yet.<br />
            <em style={{ color: "var(--accent)" }}>Help us build it.</em>
          </h2>
          <p className="section-lead">
            BioNorth is actively seeking clinical research partners, biomedical-engineering mentors, and
            early-stage funding. If you work in neurology, movement disorders, biomedical engineering, or
            medical-device investment, we'd love to hear from you.
          </p>

          <div className="grid grid-3" style={{ marginBottom: "40px" }}>
            {CONNECT_CARDS.map((card, i) => (
              <Reveal key={i} delay={i * 0.08} style={{ padding: "32px", border: `1px solid ${card.color}22`, background: `${card.color}04` }}>
                <div style={{ width: "32px", height: "2px", background: card.color, marginBottom: "20px" }} />
                <div className="sans" style={{ fontSize: "15px", color: "var(--heading)", fontWeight: 600, marginBottom: "12px" }}>{card.title}</div>
                <p className="sans" style={{ fontSize: "12px", color: "#777", lineHeight: 1.7, marginBottom: "24px" }}>{card.desc}</p>
                <a className="sans" href="mailto:biotech@bionorth.us" style={{ display: "block", textAlign: "center", border: `1px solid ${card.color}44`, color: card.color, padding: "10px 16px", fontSize: "11px", letterSpacing: "0.5px" }}>
                  {card.action} →
                </a>
              </Reveal>
            ))}
          </div>

          {/* Direct contact */}
          <Reveal className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", marginBottom: "40px" }}>
            <div>
              <div className="serif" style={{ fontSize: "22px", color: "var(--heading)", marginBottom: "8px" }}>Reach out directly</div>
              <div className="sans" style={{ fontSize: "13px", color: "var(--muted-3)", lineHeight: 1.6 }}>
                Email us, follow our work on GitHub, and watch for more projects coming soon.
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="mailto:biotech@bionorth.us" className="btn btn--primary">biotech@bionorth.us</a>
              <a href="https://github.com/bionorthtech" target="_blank" rel="noreferrer" className="btn btn--ghost">GitHub →</a>
              <button onClick={() => navigate("/side-projects")} className="btn btn--ghost">Side Projects →</button>
            </div>
          </Reveal>

          <Reveal style={{ padding: "32px", border: "1px solid var(--border)", background: "var(--bg-3)" }}>
            <div className="mono" style={{ fontSize: "9px", color: "#00D4FF66", letterSpacing: "2px", marginBottom: "20px" }}>FUNDING TARGETS BY PHASE</div>
            <div className="grid grid-5">
              {FUNDING_TARGETS.map((f, i) => (
                <div key={i} style={{ textAlign: "center", padding: "16px" }}>
                  <div className="mono" style={{ fontSize: "8px", color: "var(--faint)", letterSpacing: "1px", marginBottom: "8px" }}>{f.phase}</div>
                  <div className="serif" style={{ fontSize: "22px", color: f.color, marginBottom: "6px" }}>{f.amount}</div>
                  <div className="sans" style={{ fontSize: "10px", color: "#555", lineHeight: 1.4 }}>{f.source}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
