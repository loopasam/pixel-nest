/* eslint-disable @next/next/no-img-element -- local WebP covers are already optimized for the static Pages build. */

type Game =
  | {
      number: string;
      title: string;
      image: string;
      status: "live";
      href: string;
    }
  | {
      number: string;
      title: string;
      image: string;
      status: "upcoming";
    };

const games: Game[] = [
  {
    number: "01",
    title: "Dinoland",
    href: "https://loopasam.github.io/dinoland/",
    image: "./games/dinoland.webp",
    status: "live",
  },
  {
    number: "02",
    title: "Doudou Battler",
    image: "./games/doudou-battler.webp",
    status: "upcoming",
  },
];

const playableCount = games.filter((game) => game.status === "live").length;
const upcomingCount = games.length - playableCount;

export const dynamic = "force-static";

function GameCard({ game }: { game: (typeof games)[number] }) {
  const content = (
    <>
      <div className="game-art">
        <img src={game.image} alt="" />
        <span className="play-chip">{game.status === "live" ? "Play" : "Upcoming"}</span>
      </div>
      <div className="game-info">
        <strong>{game.title}</strong>
        <span>{game.status === "live" ? "Ready to play" : "In development"}</span>
      </div>
    </>
  );

  return game.status === "live" ? (
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
    <article className="game-card game-card--upcoming" aria-label={`${game.title}, upcoming`}>
      {content}
    </article>
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
          <strong>{playableCount}</strong> playable <span>·</span> {upcomingCount} upcoming
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
