const games = [
  {
    number: "01",
    title: "Dinoland",
    href: "https://loopasam.github.io/dinoland/",
  },
  {
    number: "02",
    title: "Doudou Battler",
    href: "https://loopasam.github.io/doudou-battler/",
  },
  ...Array.from({ length: 10 }, (_, index) => ({
    number: String(index + 3).padStart(2, "0"),
    title: `Game ${String(index + 3).padStart(2, "0")}`,
    href: null,
  })),
];

export const dynamic = "force-static";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Pixel Nest</h1>
        <span>12 game slots</span>
      </header>

      <section className="game-grid" aria-label="Game library">
        {games.map((game) => {
          const content = (
            <>
              <span className="slot-number">{game.number}</span>
              <span className="slot-preview" aria-hidden="true">
                {game.href ? "Play" : "+"}
              </span>
              <span className="slot-footer">
                <strong>{game.title}</strong>
                <span>{game.href ? "Open ↗" : "Coming soon"}</span>
              </span>
            </>
          );

          return game.href ? (
            <a
              className="game-slot game-slot--live"
              href={game.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${game.title} in a new tab`}
              key={game.number}
            >
              {content}
            </a>
          ) : (
            <article className="game-slot game-slot--empty" key={game.number}>
              {content}
            </article>
          );
        })}
      </section>
    </main>
  );
}
