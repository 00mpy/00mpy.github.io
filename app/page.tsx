"use client";

import { useEffect, useState } from "react";
import { siteContent } from "./site-content";

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

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

function StatusLight() {
  return <i className="status-light" aria-hidden="true" />;
}

function Gauge() {
  return (
    <div className="gauge" aria-hidden="true">
      <div className="gauge-ring" />
      <span className="gauge-needle" />
      <span className="gauge-pin" />
      <strong>FLOW</strong>
      <small>ACTIVE</small>
    </div>
  );
}

function TraceField() {
  return (
    <div className="trace-field" aria-hidden="true">
      <span className="trace trace-primary" />
      <span className="trace trace-secondary" />
      <span className="trace trace-tertiary" />
      <i className="trace-axis" />
    </div>
  );
}

function MiniBars() {
  return (
    <div className="mini-bars" aria-hidden="true">
      <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
    </div>
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
        <a className="brand" href="#top" aria-label={siteContent.brand + " home"}>
          <BrandMark />
          <span>{siteContent.brand}</span>
        </a>

        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Primary navigation">
          {siteContent.nav.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-status">
          <span>{siteContent.header.utility}</span>
          <span className="ready"><StatusLight /> {siteContent.header.status}</span>
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
          <p className="eyebrow reveal-one">
            <span aria-hidden="true" />
            {siteContent.hero.eyebrow}
          </p>
          <h1 id="hero-title">
            <span className="reveal-two">{siteContent.hero.lineOne}</span>
            <span className="accent-line reveal-three">{siteContent.hero.lineTwo}</span>
          </h1>
          <p className="hero-intro reveal-four">{siteContent.hero.introduction}</p>
          <a className="primary-cta reveal-four" href="#work">
            {siteContent.hero.action}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <aside className="hero-console" aria-label="Illustrative trackside system status">
          <div className="console-shell">
            <div className="console-header">
              <span>LOCAL RACE SYSTEM / LIVE</span>
              <SignalBars />
            </div>

            <div className="console-main">
              <Gauge />
              <dl className="console-readouts">
                <div><dt>ENTRY PROCESS</dt><dd>READY</dd></div>
                <div><dt>TIMING FEED</dt><dd>LOCAL</dd></div>
                <div><dt>NETWORK</dt><dd>OFFLINE</dd></div>
              </dl>
            </div>

            <MiniBars />

            <div className="console-footer">
              <span>RIDENET / PROCESS</span>
              <span>MYLAPS / DISPLAY</span>
              <span className="active">LOCAL-FIRST</span>
            </div>
          </div>
        </aside>
      </section>

      <div className="system-strip" aria-label="Project characteristics">
        {siteContent.systemStrip.map((item, index) => (
          <span className={index === 2 ? "active" : ""} key={item}>{item}</span>
        ))}
      </div>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <header className="section-intro">
          <div>
            <p className="section-kicker">{siteContent.workIntroduction.kicker}</p>
            <h2 id="work-title">
              {siteContent.workIntroduction.title}
              <em>{siteContent.workIntroduction.accent}</em>
            </h2>
          </div>
          <p>{siteContent.workIntroduction.description}</p>
        </header>

        <div className="project-list">
          {siteContent.projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

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
                <div className="project-console-header">
                  <span>{project.status}</span>
                  <span className="live"><StatusLight /> LIVE</span>
                </div>

                <div className="project-readouts">
                  {project.readouts.map((readout) => (
                    <div key={readout.label}>
                      <span>{readout.label}</span>
                      <strong>{readout.value}</strong>
                    </div>
                  ))}
                </div>

                <TraceField />

                <div className="project-console-footer">
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
        <div className="approach-dial" aria-hidden="true">
          <i className="dial-outer" />
          <i className="dial-middle" />
          <i className="dial-inner" />
          <span>LOCAL</span>
        </div>

        <div className="approach-copy">
          <p className="section-kicker">{siteContent.approach.kicker}</p>
          <h2 id="approach-title">
            {siteContent.approach.title}
            <em>{siteContent.approach.accent}</em>
          </h2>
          <p>{siteContent.approach.description}</p>
        </div>

        <ol className="approach-steps">
          {siteContent.approach.steps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="notes-section" id="notes" aria-labelledby="notes-title">
        <div className="notes-heading">
          <p className="section-kicker">{siteContent.notes.kicker}</p>
          <h2 id="notes-title">{siteContent.notes.title}</h2>
        </div>
        <div className="notes-grid">
          {siteContent.notes.items.map((item, index) => (
            <article key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top">
          <BrandMark />
          {siteContent.brand}
        </a>
        <p>{siteContent.footer.statement}</p>
        <div className="footer-meta">
          {siteContent.footer.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <small>{siteContent.footer.disclaimer}</small>
      </footer>
    </main>
  );
}
