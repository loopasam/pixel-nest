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
  ...Array.from({ length: 10 }, (_, index) => ({
    number: String(index + 3).padStart(2, "0"),
    title: `Game ${String(index + 3).padStart(2, "0")}`,
    href: null,
    image: null,
  })),
];

export const dynamic = "force-static";

function GameCard({ game }: { game: (typeof games)[number] }) {
  const content = (
    <>
      <div className="game-art">
        {game.image ? (
          <img src={game.image} alt="" />
        ) : (
          <div className="placeholder-art" aria-hidden="true">
            <span>{game.number}</span>
          </div>
        )}
        {game.href && <span className="play-chip">Play</span>}
      </div>
      <div className="game-info">
        <strong>{game.title}</strong>
        <span>{game.href ? "Ready to play" : "Coming soon"}</span>
      </div>
    </>
  );

  return game.href ? (
    <a
      className="game-card game-card--live"
      href={game.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${game.title} in a new tab`}
    >
      {content}
    </a>
  ) : (
    <article className="game-card game-card--empty">{content}</article>
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
          <strong>2</strong> playable <span>·</span> 10 coming soon
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
