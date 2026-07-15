"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    index: "01",
    label: "DATA SYSTEMS",
    title: "Race intelligence, made legible.",
    copy: "Messy event data becomes one calm operational view — built for speed, clarity, and the moments where accuracy matters.",
    tags: ["DATA", "WORKFLOWS", "DESKTOP"],
    tone: "lime",
  },
  {
    index: "02",
    label: "LOCAL PLATFORMS",
    title: "Real-time tools that stay close.",
    copy: "Local-first services connect timing hardware, live feeds, and people without turning the day into a cloud dependency.",
    tags: ["REAL-TIME", "LOCAL-FIRST", "RESILIENT"],
    tone: "violet",
  },
  {
    index: "03",
    label: "INTERACTIVE PRODUCTS",
    title: "Complex work, simple surfaces.",
    copy: "Thoughtful interfaces make technical systems feel direct: fewer steps, clearer states, and feedback that arrives at the right time.",
    tags: ["UX", "AUTOMATION", "TOOLS"],
    tone: "coral",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = document.documentElement;

    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--mx", `${event.clientX / window.innerWidth - 0.5}`);
      root.style.setProperty("--my", `${event.clientY / window.innerHeight - 0.5}`);
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main ref={mainRef}>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Oompy home">
          OOMPY<span>°</span>
        </a>

        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

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

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow reveal-1">
            <span className="status-dot" />
            DIGITAL SYSTEMS / BRISBANE, AU
          </div>
          <h1 id="hero-title">
            <span className="outline-word reveal-2">Work</span>
            <span className="solid-word reveal-3">in motion.</span>
          </h1>
          <p className="hero-intro reveal-4">
            I turn complex operations into focused digital products — designed to move data, people, and decisions forward.
          </p>
        </div>

        <div className="hero-scene" aria-hidden="true">
          <div className="scene-glow" />
          <div className="orbit orbit-a"><i /></div>
          <div className="orbit orbit-b"><i /></div>
          <div className="core-shape">
            <div className="face face-front">BUILD</div>
            <div className="face face-back">TEST</div>
            <div className="face face-right">SHIP</div>
            <div className="face face-left">LEARN</div>
            <div className="face face-top" />
            <div className="face face-bottom" />
          </div>
          <div className="float-label label-a">01 / SYSTEMS</div>
          <div className="float-label label-b">02 / INTERFACES</div>
          <div className="float-label label-c">03 / MOMENTUM</div>
          <div className="scene-plane" />
        </div>

        <a className="scroll-cue" href="#work">
          <span>SCROLL TO EXPLORE</span>
          <i aria-hidden="true">↓</i>
        </a>
      </section>

      <section className="manifesto" aria-label="What I do">
        <p>STRATEGY <i>×</i> SYSTEMS <i>×</i> INTERACTION <i>×</i> MOTION</p>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p><span>SELECTED</span> / 2026</p>
          <h2 id="work-title">Building useful things<br />for the real world.</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.index} tabIndex={0}>
              <div className="project-number">{project.index}</div>
              <div className="project-visual" aria-hidden="true">
                <div className="visual-grid" />
                <div className="visual-object">
                  <div className="object-ring ring-one" />
                  <div className="object-ring ring-two" />
                  <div className="object-sphere" />
                </div>
                <span>{project.label}</span>
              </div>
              <div className="project-content">
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.copy}</p>
                <div className="project-footer">
                  <ul aria-label="Project themes">
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <span className="project-arrow"><Arrow /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="process" aria-labelledby="process-title">
        <div className="process-orb" aria-hidden="true"><i /><i /><i /></div>
        <div className="process-copy">
          <p className="section-kicker">THE WAY THROUGH</p>
          <h2 id="process-title">Find the signal.<br />Shape the system.<br /><em>Keep it moving.</em></h2>
          <p>
            The work starts by making the real problem visible. From there, I prototype the smallest useful path, test it against reality, and evolve it without losing clarity.
          </p>
        </div>
        <ol className="process-steps">
          <li><span>01</span><strong>MAP</strong><p>Understand the pressure, the people, and the moving parts.</p></li>
          <li><span>02</span><strong>MAKE</strong><p>Turn the best idea into something real enough to challenge.</p></li>
          <li><span>03</span><strong>MOVE</strong><p>Ship, learn, refine — without burying the product in process.</p></li>
        </ol>
      </section>

      <footer id="contact">
        <div className="footer-kicker"><span className="status-dot" /> AVAILABLE FOR THE NEXT GOOD PROBLEM</div>
        <h2>Let&apos;s make it<br /><span>move.</span></h2>
        <a className="contact-link" href="mailto:hello@oompy.dev">
          hello@oompy.dev <Arrow />
        </a>
        <div className="footer-meta">
          <p>BRISBANE / AUSTRALIA</p>
          <p>DESIGNED IN MOTION</p>
          <p>© 2026 OOMPY</p>
        </div>
        <div className="footer-orbit" aria-hidden="true" />
      </footer>
    </main>
  );
}
