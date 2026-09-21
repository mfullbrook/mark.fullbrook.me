const career = [
  {
    period: "Now",
    title: "Principal Generative AI Software Engineer, Citi",
    detail:
      "Building production AI products in a tightly regulated bank — from retrieval and orchestration to evaluation, security and the last mile of adoption.",
  },
  {
    period: "2021–25",
    title: "Engineering leader",
    detail:
      "Led cross-functional engineering teams across London, New York, Tel Aviv and Shanghai. Grew organisations, shipped platforms and stayed close enough to the code to know where the sharp edges were.",
  },
  {
    period: "2016–21",
    title: "Director, family business",
    detail:
      "Helped run a 65-person company and modernised the systems underneath it. A practical education in operations, people, cash flow and why software only matters when it changes the work.",
  },
];

const principles = [
  ["Make it real", "A useful system in production teaches more than a perfect diagram."],
  ["Earn trust", "AI products need evidence, guardrails and a clear answer to ‘why should I rely on this?’"],
  ["Stay close", "The best technical leaders understand the code, the customer and the constraint."],
] as const;

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
          <a href="#thinking">Thinking</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="status"><span aria-hidden="true" /> Principal GenAI engineer · engineering leader · product builder</p>
          <h1>I build AI systems that survive real data, real users and real constraints.</h1>
          <p className="intro">
            I’m Mark Fullbrook, a principal generative-AI engineer and engineering leader. I work across architecture, evaluation, security and adoption, turning complex ideas into products people can trust and use. Today I focus on production generative AI in financial services. Independently, I’m developing Robin, an AI phone agent for small businesses.
          </p>
          <div className="hero-links">
            <a className="primary-link" href="https://www.linkedin.com/in/markcfullbrook/" target="_blank" rel="noreferrer">
              Connect on LinkedIn <ArrowIcon />
            </a>
            <a href="https://github.com/mfullbrook" target="_blank" rel="noreferrer">View GitHub</a>
          </div>
        </div>

        <aside className="signal" aria-label="Current focus">
          <div className="signal-head">
            <span>Current focus</span>
            <span className="live"><i /> active</span>
          </div>
          <div className="signal-line">
            <span className="signal-index">01</span>
            <div><strong>Production generative AI</strong><p>Reliable systems built around enterprise data, risk and users.</p></div>
          </div>
          <div className="signal-line">
            <span className="signal-index">02</span>
            <div><strong>Robin</strong><p>An independent AI phone agent for owner-operated businesses.</p></div>
          </div>
          <div className="signal-line">
            <span className="signal-index">03</span>
            <div><strong>Independent product development</strong><p>Turning customer problems into small, testable products.</p></div>
          </div>
        </aside>
      </section>

      <section className="work-section wrap" id="work">
        <div className="section-intro">
          <p className="section-kicker">The work</p>
          <h2>From architecture to adoption.</h2>
          <p>I’ve spent my career designing systems, leading teams and turning difficult technology into working products. Today that means building production generative AI in a regulated environment.</p>
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

      <section className="build-section" aria-labelledby="building-title">
        <div className="wrap build-grid">
          <div className="build-number" aria-hidden="true">CALL → ACTION</div>
          <div className="build-copy">
            <p className="section-kicker">Independent project</p>
            <h2 id="building-title">Robin answers the phone when a small business can’t.</h2>
            <p>Robin is an AI phone agent for owner-operated businesses. It answers calls, understands what the caller needs, captures the right information and makes the next step clear. I’m currently validating it with small-business owners.</p>
            <a href="https://robinhq.co" target="_blank" rel="noreferrer">Visit Robin <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="thinking-section wrap" id="thinking">
        <div className="section-intro compact">
          <p className="section-kicker">How I think</p>
          <h2>The hard part starts after the model works.</h2>
        </div>
        <div className="principles">
          {principles.map(([title, words]) => (
            <article key={title}><h3>{title}</h3><p>{words}</p></article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="wrap footer-grid">
          <div><p className="section-kicker">Say hello</p><h2>Interested in production AI, product engineering or turning difficult problems into useful software?</h2></div>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/markcfullbrook/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            <a href="https://github.com/mfullbrook" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
          </div>
        </div>
        <div className="wrap colophon"><span>© {new Date().getFullYear()} Mark Fullbrook</span><span>AI engineer · engineering leader · product builder</span></div>
      </footer>
    </main>
  );
}
