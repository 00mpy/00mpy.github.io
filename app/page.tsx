"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    label: "ENTRY / SCHEDULING",
    title: "Ridenet Data Processor",
    headline: "From export to an organised event in minutes.",
    description:
      "A local workflow that turns a downloaded Ridenet export into clearer entry data and a workable race schedule, without rebuilding the event by hand.",
    status: "PROCESS / READY",
    theme: "entry",
    points: [
      "Import and check the downloaded event export",
      "Organise entries and classes into a useful workspace",
      "Build and refine the race schedule locally",
    ],
    signals: [
      ["INPUT", "RIDENET EXPORT"],
      ["PROCESS", "LOCAL WORKSPACE"],
      ["OUTPUT", "ENTRIES + SCHEDULE"],
    ],
    flow: ["EXPORT", "CHECK", "ORGANISE", "SCHEDULE"],
  },
  {
    number: "02",
    label: "LIVE / LOCAL",
    title: "MYLAPS Local Timing",
    headline: "Trackside timing screens without an internet dependency.",
    description:
      "A local timing display that brings MYLAPS race information to screens around the circuit using the trackside network, without requiring Speedhive access.",
    status: "TIMING / LOCAL",
    theme: "timing",
    points: [
      "Receive timing information on the local network",
      "Serve a clear browser display to trackside screens",
      "Keep the display useful when external internet is unavailable",
    ],
    signals: [
      ["SOURCE", "MYLAPS TIMING"],
      ["NETWORK", "TRACKSIDE LOCAL"],
      ["DISPLAY", "BROWSER SCREENS"],
    ],
    flow: ["TIMING FEED", "LOCAL SERVER", "TRACK NETWORK", "SCREENS"],
  },
];

function SignalBars() {
  return (
    <span className="signal-bars" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = document.documentElement;

    const handlePointer = (event: PointerEvent) => {
      root.style.setProperty("--mx", String(event.clientX / window.innerWidth - 0.5));
      root.style.setProperty("--my", String(event.clientY / window.innerHeight - 0.5));
    };

    const handleScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? window.scrollY / available : 0);
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main id="top">
      <div
        className="scroll-progress"
        style={{ transform: "scaleX(" + progress + ")" }}
        aria-hidden="true"
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Oompy Code Work home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>OOMPY / CODE WORK</span>
        </a>

        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Primary navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#notes" onClick={() => setMenuOpen(false)}>Notes</a>
        </nav>

        <div className="header-status">
          <span>TRACKSIDE UTILITY / 2026</span>
          <span className="ready"><i /> SYSTEM READY</span>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="issue-line reveal-one">01—02 / INDEPENDENT SYSTEM STUDY</p>
          <p className="eyebrow reveal-one">
            <span aria-hidden="true" />
            HOBBY-BUILT SOFTWARE FOR MOTORCYCLE RACING
          </p>
          <h1 id="hero-title">
            <span className="reveal-two">Small tools.</span>
            <span className="accent-line reveal-three"><em>Faster</em> race days.</span>
          </h1>
          <p className="hero-intro reveal-four">
            AI-assisted software that removes the slow parts from Ridenet entry
            processing and brings MYLAPS timing to local trackside screens.
          </p>
          <a className="primary-cta reveal-four" href="#work">
            Explore the work <span aria-hidden="true">→</span>
          </a>
        </div>

        <aside className="telemetry-panel" aria-label="Illustrative local race system status">
          <div className="panel-frame">
            <div className="panel-topline">
              <span>LOCAL RACE SYSTEM / LIVE</span>
              <SignalBars />
            </div>

            <div className="panel-main">
              <div className="gauge">
                <div className="gauge-face">
                  <span className="gauge-needle" />
                  <span className="gauge-pin" />
                  <strong>FLOW</strong>
                  <small>ACTIVE</small>
                </div>
              </div>

              <dl className="panel-readout">
                <div><dt>ENTRY PROCESS</dt><dd>READY</dd></div>
                <div><dt>TIMING FEED</dt><dd>LOCAL</dd></div>
                <div><dt>NETWORK</dt><dd>OFFLINE</dd></div>
              </dl>
            </div>

            <div className="panel-chart" aria-hidden="true">
              <i /><i /><i /><i /><i /><i /><i /><i />
            </div>

            <div className="panel-footer">
              <span>RIDENET / PROCESS</span>
              <span>MYLAPS / DISPLAY</span>
              <span className="active">LOCAL-FIRST</span>
            </div>
          </div>
        </aside>
      </section>

      <div className="programme-strip" aria-label="Project characteristics">
        <span>SESSION / 01</span>
        <span>MOTORCYCLE OPERATIONS SOFTWARE</span>
        <span className="green">LOCAL / OFFLINE</span>
        <span>DATA / FAST</span>
        <span>RACE DAY / READY</span>
      </div>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <header className="section-intro">
          <div>
            <p className="section-kicker">SELECTED WORK / 2026</p>
            <h2 id="work-title">Two problems,<br /><em>worked through.</em></h2>
          </div>
          <p>
            Practical tools shaped around real trackside friction. Each project
            keeps the workflow close, understandable and useful under race-day pressure.
          </p>
        </header>

        <div className="project-register">
          {projects.map((project) => (
            <article className={"project-card " + project.theme} key={project.number}>
              <div className="project-number" aria-hidden="true">{project.number}</div>

              <div className="project-copy">
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p className="project-headline">{project.headline}</p>
                <p className="project-description">{project.description}</p>
                <ul>
                  {project.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>

              <div className="project-console" aria-label={project.title + " workflow summary"}>
                <div className="console-head">
                  <span>{project.status}</span>
                  <span className="console-light"><i /> LIVE</span>
                </div>
                <div className="console-grid">
                  {project.signals.map(([label, value]) => (
                    <div className="console-row" key={label}>
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
                <div className="console-visual" aria-hidden="true">
                  <span className="trace trace-one" />
                  <span className="trace trace-two" />
                  <span className="trace trace-three" />
                  <span className="console-axis" />
                </div>
                <div className="console-meta">
                  <span>MODE / UTILITY</span>
                  <span>STATE / AVAILABLE</span>
                </div>
              </div>

              <div className="project-flow">
                {project.flow.map((step, index) => (
                  <span key={step}>
                    {step}
                    {index < project.flow.length - 1 && <i aria-hidden="true" />}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section" id="approach" aria-labelledby="approach-title">
        <div className="approach-orbit" aria-hidden="true">
          <i /><i /><i />
          <span>LOCAL</span>
        </div>

        <div className="approach-copy">
          <p className="section-kicker">WHY THESE EXIST</p>
          <h2 id="approach-title">Built from problems<br />experienced <em>at the circuit.</em></h2>
          <p>
            These are independent, problem-led experiments by a hobby AI-assisted
            coder. AI helps explore and test ideas; the aim is simply to remove
            avoidable work and make race days easier.
          </p>
        </div>

        <ol className="approach-steps">
          <li><span>01</span><strong>EXPERIENCE</strong><p>Notice the repeated task or trackside limitation.</p></li>
          <li><span>02</span><strong>SIMPLIFY</strong><p>Build the smallest useful local workflow around it.</p></li>
          <li><span>03</span><strong>REFINE</strong><p>Use it in context, learn, and improve the practical details.</p></li>
        </ol>
      </section>

      <section className="notes-section" id="notes" aria-labelledby="notes-title">
        <p className="section-kicker">PUBLIC PROJECT NOTES</p>
        <h2 id="notes-title">The work is the story.<br />Private data is not.</h2>
        <div className="notes-grid">
          <p>No customer information is shown or used to demonstrate these projects.</p>
          <p>No personal profile is required—the focus stays on the problems and the tools.</p>
          <p>Ridenet and MYLAPS are named only because the projects address workflows around those systems.</p>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          OOMPY / CODE WORK
        </a>
        <p>SMALL TOOLS <i>/</i> FASTER RACE DAYS</p>
        <div className="footer-meta">
          <span>INDEPENDENT</span>
          <span>AI-ASSISTED</span>
          <span>PROBLEM-LED</span>
          <span>2026</span>
        </div>
        <small>
          Independent hobby projects. Ridenet and MYLAPS are referenced solely
          to describe the workflows these tools are designed around.
        </small>
      </footer>
    </main>
  );
}
