import { EmailLink } from "./email-link";

const LINKEDIN = "https://www.linkedin.com/in/markcfullbrook/";
const GITHUB = "https://github.com/mfullbrook";
const CV = "https://cv.fullbrook.me";
const ROBIN = "https://robinhq.co";

const career = [
  {
    period: "Now",
    title: "Principal Generative AI Software Engineer, Citi",
    detail:
      "I build generative AI products that run in production at the bank. That covers retrieval, orchestration, evaluation and security, and then the work of getting people to use what we’ve built.",
  },
  {
    period: "2021–25",
    title: "Engineering leader",
    detail:
      "I led cross-functional engineering teams in London, New York, Tel Aviv and Shanghai. I grew the teams and shipped platforms, and stayed close to the code throughout.",
  },
  {
    period: "2016–21",
    title: "Director, family business",
    detail:
      "I helped run a 65-person company and modernised the systems it ran on. It’s where I learned operations, people and cash flow first-hand.",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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
          <a href="#robin">Robin</a>
          <a href={CV} target="_blank" rel="noreferrer">CV</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="status"><span aria-hidden="true" /> Mark Fullbrook · Principal generative AI engineer</p>
          <h1>I build generative AI products at a bank.</h1>
          <p className="intro">
            Before this I led engineering teams in four cities, and before that I helped run my family’s business. In my own time I’m building Robin, an AI phone agent for small businesses.
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
            <div><strong>Generative AI in production</strong><p>My day job, building AI products inside a regulated bank.</p></div>
          </div>
          <div className="signal-line">
            <span className="signal-index">02</span>
            <div><strong>Robin</strong><p>A phone agent that answers calls for owner-run businesses.</p></div>
          </div>
        </aside>
      </section>

      <section className="work-section wrap" id="work">
        <div className="section-intro">
          <p className="section-kicker">The work</p>
          <h2>What I’ve done so far.</h2>
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

      <section className="build-section" id="robin" aria-labelledby="building-title">
        <div className="wrap build-grid">
          <div className="section-intro">
            <p className="section-kicker">Independent project</p>
            <h2 id="building-title">Robin answers the phone when a small business can’t.</h2>
          </div>
          <div className="build-copy">
            <p>Robin is an AI phone agent for owner-run businesses. It picks up the call, finds out what the caller needs, takes their details and tells them what happens next.</p>
            <p>I’m building it on my own and testing it with small-business owners now.</p>
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
