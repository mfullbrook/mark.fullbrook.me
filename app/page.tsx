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
          <p className="status"><span aria-hidden="true" /> Based near London, building practical AI</p>
          <h1>I build AI products that have to work in the real world.</h1>
          <p className="intro">
            I’m Mark Fullbrook — a principal AI engineer, engineering leader and founder. I turn difficult, regulated problems into software people can actually use.
          </p>
          <div className="hero-links">
            <a className="primary-link" href="https://www.linkedin.com/in/markcfullbrook/" target="_blank" rel="noreferrer">
              Connect on LinkedIn <ArrowIcon />
            </a>
            <a href="https://github.com/mfullbrook" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <aside className="signal" aria-label="Current focus">
          <div className="signal-head">
            <span>Current focus</span>
            <span className="live"><i /> active</span>
          </div>
          <div className="signal-line">
            <span className="signal-index">01</span>
            <div><strong>Applied generative AI</strong><p>Systems that survive contact with enterprise data, risk and users.</p></div>
          </div>
          <div className="signal-line">
            <span className="signal-index">02</span>
            <div><strong>Robin</strong><p>An AI phone agent designed around the reality of running a small business.</p></div>
          </div>
          <div className="signal-line">
            <span className="signal-index">03</span>
            <div><strong>Founder mode</strong><p>Talking to customers, testing assumptions and shipping the smallest useful thing.</p></div>
          </div>
        </aside>
      </section>

      <section className="work-section wrap" id="work">
        <div className="section-intro">
          <p className="section-kicker">The work</p>
          <h2>Engineering, leadership and a bias for shipping.</h2>
          <p>I’ve spent my career moving between the system and the organisation around it. These days, that means building trustworthy AI inside financial services while creating my own products outside it.</p>
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
          <div className="build-number" aria-hidden="true">10→100</div>
          <div className="build-copy">
            <p className="section-kicker">What I’m building</p>
            <h2 id="building-title">Robin answers the phone when a small business can’t.</h2>
            <p>It’s an AI phone agent for owner-operated businesses: handle the call, understand what the customer needs, and make sure the right person gets the right information. I’m currently working toward the first ten customers — then the next hundred.</p>
            <a href="https://robinhq.co" target="_blank" rel="noreferrer">Visit Robin <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="thinking-section wrap" id="thinking">
        <div className="section-intro compact">
          <p className="section-kicker">How I think</p>
          <h2>Technology is the easy part. Useful is harder.</h2>
        </div>
        <div className="principles">
          {principles.map(([title, words]) => (
            <article key={title}><h3>{title}</h3><p>{words}</p></article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="wrap footer-grid">
          <div><p className="section-kicker">Say hello</p><h2>Interested in practical AI, product engineering or the founder journey?</h2></div>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/markcfullbrook/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            <a href="https://github.com/mfullbrook" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
          </div>
        </div>
        <div className="wrap colophon"><span>© {new Date().getFullYear()} Mark Fullbrook</span><span>Engineer · leader · founder</span></div>
      </footer>
    </main>
  );
}
