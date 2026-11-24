const LINKEDIN = "https://www.linkedin.com/in/markcfullbrook/";
const GITHUB = "https://github.com/mfullbrook";
const ROBIN = "https://robinhq.co";

const roles = [
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

const notes = [
  {
    href: "/pages/ai-data-safety-uk.html",
    period: "Sep 2026",
    title: "AI vendor data safety: a UK reference",
    detail:
      "How Anthropic, OpenAI, Google, Microsoft and xAI handle training, retention and UK data residency, for anyone deciding which AI products are safe for company data. Compiled from vendor documentation.",
  },
];

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 100 90" aria-hidden="true">
      <rect className="logo-tile" width="100" height="90" />
      <g className="logo-glyph">
        <g transform="translate(16.75 14)">
          <rect x="-4.25" y="41.25" width="42.25" height="8" rx="2.75" transform="rotate(-45 17 44)" />
          <rect x="-4.25" y="14.25" width="42.25" height="8" rx="2.75" transform="rotate(45 17 17)" />
        </g>
        <rect x="50.5" y="69.75" width="32.31" height="8" rx="2.75" />
      </g>
    </svg>
  );
}

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Mark Fullbrook, home">
          <LogoMark />
          <span>mark.fullbrook</span>
        </a>
        <nav aria-label="Elsewhere">
          <External href={LINKEDIN}>LinkedIn</External>
          <External href={GITHUB}>GitHub</External>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>
            I’m <span className="name">Mark</span>, a principal engineer building generative AI
            products at a bank.
          </h1>
          <p>
            Before this I led engineering teams in four cities, and before that I helped run my
            family’s business. In my own time I’m building Robin, an AI phone agent for small
            businesses.
          </p>
        </section>

        <section className="block" aria-labelledby="work">
          <h2 id="work">Work</h2>
          <ol className="entries">
            {roles.map((role) => (
              <li key={role.period}>
                <div className="entry-head">
                  <h3>{role.title}</h3>
                  <span className="period">{role.period}</span>
                </div>
                <p>{role.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="block" aria-labelledby="robin">
          <h2 id="robin">Robin</h2>
          <div className="prose">
            <p className="lead">Robin answers the phone when a small business can’t.</p>
            <p>
              It’s an AI phone agent for owner-run businesses. It picks up the call, finds out what
              the caller needs, takes their details and tells them what happens next. I’m building
              it on my own and testing it with small-business owners now.
            </p>
            <p>
              <External href={ROBIN}>robinhq.co</External>
            </p>
          </div>
        </section>

        <section className="block" aria-labelledby="notes">
          <h2 id="notes">Notes</h2>
          <ul className="entries">
            {notes.map((note) => (
              <li key={note.href}>
                <div className="entry-head">
                  <h3>
                    <a href={note.href}>{note.title}</a>
                  </h3>
                  <span className="period">{note.period}</span>
                </div>
                <p>{note.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="block" aria-labelledby="contact">
          <h2 id="contact">Contact</h2>
          <div className="prose">
            <p>
              The best place to reach me is <External href={LINKEDIN}>LinkedIn</External>. My code
              is on <External href={GITHUB}>GitHub</External>.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} Mark Fullbrook</footer>
    </div>
  );
}
