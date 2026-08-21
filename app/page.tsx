/* eslint-disable @next/next/no-img-element -- local WebP covers are already optimized for the static Pages build. */

const games = [
  {
    number: "01",
    title: "Dinoland",
    href: "https://loopasam.github.io/dinoland/",
    image: "./games/dinoland.webp",
  },
  {
    number: "02",
    title: "Doudou Battler",
    href: "https://loopasam.github.io/doudou-battler/",
    image: "./games/doudou-battler.webp",
  },
];

export const dynamic = "force-static";

function GameCard({ game }: { game: (typeof games)[number] }) {
  return (
    <a
      className="game-card game-card--live"
      href={game.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${game.title} in a new tab`}
    >
      <div className="game-art">
        <img src={game.image} alt="" />
        <span className="play-chip">Play</span>
      </div>
      <div className="game-info">
        <strong>{game.title}</strong>
        <span>Ready to play</span>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header>
        <div className="brand-row">
          <div className="brand-mark" aria-hidden="true">
            PN
          </div>
          <div>
            <h1>Pixel Nest</h1>
            <p>Game library</p>
          </div>
        </div>
        <p className="library-count">
          <strong>{games.length}</strong> playable
        </p>
      </header>

      <section className="game-grid" aria-label="Game library">
        {games.map((game) => (
          <GameCard game={game} key={game.number} />
        ))}
      </section>
    </main>
  );
}
