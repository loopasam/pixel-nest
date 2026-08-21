/* eslint-disable @next/next/no-img-element -- game covers are pre-optimized WebP assets for a static GitHub Pages export. */

const games = [
  {
    title: "Dinoland",
    eyebrow: "A cozy creature garden",
    description:
      "Hatch eggs, care for a growing herd, and make a sunny little meadow come alive.",
    image: "./games/dinoland.webp",
    href: "https://loopasam.github.io/dinoland/",
    accent: "lime",
    number: "01",
    tags: ["Cozy", "Care", "Dinosaurs"],
  },
  {
    title: "Doudou Battler",
    eyebrow: "A plush-powered card duel",
    description:
      "Pick your strongest stat, face the rival deck, and let the bravest doudou win.",
    image: "./games/doudou-battler.webp",
    href: "https://loopasam.github.io/doudou-battler/",
    accent: "coral",
    number: "02",
    tags: ["Cards", "Strategy", "Plush heroes"],
  },
] as const;

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pixel Nest home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Pixel Nest</span>
        </a>
        <div className="library-status">
          <span className="status-dot" aria-hidden="true" />
          2 games ready
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="page-title">
        <p className="kicker">Welcome to the nest</p>
        <h1 id="page-title">
          Tiny worlds.
          <span>Big adventures.</span>
        </h1>
        <p className="hero-copy">
          Pick a game, press play, and drop into a world made for curious minds
          and quick little breaks.
        </p>
        <div className="hero-doodle" aria-hidden="true">
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✦</span>
          <span className="orbit" />
        </div>
      </section>

      <section className="library" aria-labelledby="library-title">
        <div className="section-heading">
          <div>
            <p className="section-label">The collection</p>
            <h2 id="library-title">Choose your next adventure</h2>
          </div>
          <p className="section-note">New worlds will land here.</p>
        </div>

        <div className="game-grid">
          {games.map((game) => (
            <article className={`game-card game-card--${game.accent}`} key={game.title}>
              <a
                className="game-visual"
                href={game.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Play ${game.title} in a new tab`}
              >
                <img src={game.image} alt="" />
                <span className="game-number" aria-hidden="true">
                  {game.number}
                </span>
                <span className="play-badge" aria-hidden="true">
                  <span>▶</span>
                </span>
              </a>

              <div className="game-body">
                <p className="game-eyebrow">{game.eyebrow}</p>
                <h3>{game.title}</h3>
                <p className="game-description">{game.description}</p>
                <div className="game-footer">
                  <ul className="tag-list" aria-label={`${game.title} genres`}>
                    {game.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a
                    className="play-link"
                    href={game.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Play ${game.title} in a new tab`}
                  >
                    Play <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>Made for playtime.</p>
        <span>Pixel Nest · 2026</span>
      </footer>
    </main>
  );
}
