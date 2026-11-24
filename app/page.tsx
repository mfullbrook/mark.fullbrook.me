import { EmailLink } from "./email-link";

const LINKEDIN = "https://www.linkedin.com/in/markcfullbrook/";
const GITHUB = "https://github.com/mfullbrook";
const CV = "https://cv.fullbrook.me";
const ROBIN = "https://robinhq.co";

const career = [
  {
    period: "Now",
    title: "Principal Generative AI Software Engineer, Citi Markets Technology",
    detail:
      "I lead the architecture and engineering of an agentic AI platform for Citi’s Markets teams, and I still write and review the code.",
  },
  {
    period: "2024–25",
    title: "Generative AI Engineering Manager, Citi Innovation Labs",
    detail:
      "I grew the generative AI group from one engineer to more than 20 in a year, and we delivered one of Citi’s earliest production generative AI products.",
  },
  {
    period: "2021–23",
    title: "SVP Engineering Lead, Citi Innovation Labs",
    detail:
      "I led a global team of 12 engineers building an AI-enabled data remediation platform for a major regulatory programme.",
  },
  {
    period: "2016–21",
    title: "Director of Technology and Finance, Universal Packing Specialists",
    detail:
      "Board director of my family’s 65-person export packing and manufacturing business. I replaced its manual processes with one operational platform, down to real-time data capture on the shop floor.",
  },
  {
    period: "2012–16",
    title: "Senior Software Engineer, then Head of R&D, BloombergNEF",
    detail:
      "I built the mobile app and APIs for offline access to research, then ran R&D, including the native iOS and Android apps.",
  },
];

type Project = {
  name: string;
  meta: string;
  detail: string;
  link?: { href: string; label: string };
};

const citiProjects: Project[] = [
  {
    name: "Ask Markets",
    meta: "2026 · Architecture and engineering lead",
    detail:
      "An agentic AI platform that brings governed data, tools and workflows to Markets teams, in Microsoft Teams and on the web. It went from concept to production in nine months and is rolling out to 1,500 users.",
  },
  {
    name: "Orion",
    meta: "2024–25 · Generative AI Engineering Manager",
    detail:
      "One of Citi’s earliest production generative AI products. It drafts structured documents grounded in retrieval, and 2,000 underwriters use it every day to produce more than 600 documents a month.",
  },
  {
    name: "MAC Remediation",
    meta: "2022–23 · SVP Engineering Lead",
    detail:
      "An AI-enabled platform that supported the remediation of thousands of legal agreements for a major regulatory programme. I led the team of 12 that took it from inception to production.",
  },
];

const independentProjects: Project[] = [
  {
    name: "claude-rc",
    meta: "2026 · Open source",
    detail:
      "A daemon, CLI and web panel for starting Claude Code sessions on always-on machines and driving them from a phone.",
    link: { href: "https://github.com/mfullbrook/claude-rc", label: "mfullbrook/claude-rc" },
  },
  {
    name: "Gaffer",
    meta: "2026 · Open source",
    detail:
      "A local supervisor that turns a Linear issue into a reviewed pull request. Codex writes the tests, Claude writes the code, and I keep merge and deploy authority.",
  },
  {
    name: "livekit-sdk",
    meta: "Open source",
    detail:
      "A PHP SDK for LiveKit, generated from the protobuf definitions. I wrote it because no first-party PHP SDK existed.",
    link: { href: "https://github.com/mfullbrook/livekit-sdk", label: "mfullbrook/livekit-sdk" },
  },
  {
    name: "StarForge",
    meta: "2026 · Client build for QuietStar",
    detail:
      "A project register and Kanban board for a UK acoustics firm, built on the SharePoint they already pay for. Dragging a card files the folder. The founders and five staff use it every day.",
  },
  {
    name: "Porthole",
    meta: "2026 · Personal tool",
    detail:
      "A tailnet index page that lists every HTTP service running on my machine, so I can open any of them from whichever device is in my hand.",
  },
  {
    name: "Pennywise",
    meta: "2026 · Personal tool",
    detail:
      "Explains credit card bills from a local ledger reconciled to every statement. The arithmetic is deterministic, and the language model only explains it.",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="projects">
      {projects.map((project) => (
        <article key={project.name}>
          <span className="project-meta">{project.meta}</span>
          <h4>{project.name}</h4>
          <p>{project.detail}</p>
          {project.link && (
            <a href={project.link.href} target="_blank" rel="noreferrer">
              {project.link.label} <ArrowIcon />
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header wrap">
        <a className="wordmark" href="#top" aria-label="Mark Fullbrook, home">
          <span className="mark"><span>MF</span></span>
          <span>Mark Fullbrook</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#robin">Robin</a>
          <a href={CV} target="_blank" rel="noreferrer">CV</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="status"><span aria-hidden="true" /> Mark Fullbrook · Principal generative AI engineer · London</p>
          <h1>I build generative AI products at a bank.</h1>
          <p className="intro">
            Before this I led engineering teams across London, New York, Tel Aviv and Shanghai, and before that I helped run my family’s business. In my own time I’m building Robin, an AI phone agent for small businesses.
          </p>
          <div className="hero-links">
            <a className="primary-link" href={LINKEDIN} target="_blank" rel="noreferrer">
              Connect on LinkedIn <ArrowIcon />
            </a>
            <a href={CV} target="_blank" rel="noreferrer">Read my CV</a>
            <a href={GITHUB} target="_blank" rel="noreferrer">View GitHub</a>
          </div>
        </div>

        <aside className="signal" aria-label="Current focus">
          <div className="signal-head">
            <span>Current focus</span>
            <span className="live"><i /> active</span>
          </div>
          <div className="signal-line">
            <span className="signal-index">01</span>
            <div><strong>Ask Markets</strong><p>My day job: an agentic AI platform for Citi’s Markets teams.</p></div>
          </div>
          <div className="signal-line">
            <span className="signal-index">02</span>
            <div><strong>Robin</strong><p>An AI receptionist for UK small businesses, built and run on my own.</p></div>
          </div>
          <div className="signal-line">
            <span className="signal-index">03</span>
            <div><strong>QuietStar</strong><p>Consulting: a knowledge base over past projects, to speed up quoting.</p></div>
          </div>
        </aside>
      </section>

      <section className="work-section wrap" id="work">
        <div className="section-intro">
          <p className="section-kicker">The work</p>
          <h2>Where I’ve worked.</h2>
          <p>This is the short version. The full history is on my CV.</p>
          <a className="text-link" href={CV} target="_blank" rel="noreferrer">Read my CV <ArrowIcon /></a>
        </div>
        <div className="timeline">
          {career.map((item) => (
            <article className="timeline-item" key={item.period}>
              <span className="period">{item.period}</span>
              <div><h3>{item.title}</h3><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section wrap" id="projects">
        <div className="section-intro">
          <p className="section-kicker">Projects</p>
          <h2>What I’ve built.</h2>
        </div>
        <div className="project-group">
          <h3>At Citi</h3>
          <ProjectList projects={citiProjects} />
        </div>
        <div className="project-group">
          <h3>Independent</h3>
          <ProjectList projects={independentProjects} />
        </div>
      </section>

      <section className="build-section" id="robin" aria-labelledby="building-title">
        <div className="wrap build-grid">
          <div className="section-intro">
            <p className="section-kicker">Independent project</p>
            <h2 id="building-title">Robin answers the phone when a small business can’t.</h2>
          </div>
          <div className="build-copy">
            <p>Robin is an AI receptionist for UK small businesses. It answers every call, takes the details down and gets them to the owner.</p>
            <p>It runs on LiveKit Agents and SIP telephony. I designed it, built it and run it on my own, and it’s pre-launch while I line up the first pilots.</p>
            <a className="text-link" href={ROBIN} target="_blank" rel="noreferrer">Visit Robin <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="wrap footer-grid">
          <div><p className="section-kicker">Say hello</p><h2>Email is best, or find me on LinkedIn.</h2></div>
          <div className="footer-links">
            <EmailLink><ArrowIcon /></EmailLink>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            <a href={GITHUB} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
            <a href={CV} target="_blank" rel="noreferrer">CV <ArrowIcon /></a>
          </div>
        </div>
        <div className="wrap colophon"><span>© {new Date().getFullYear()} Mark Fullbrook</span></div>
      </footer>
    </main>
  );
}
