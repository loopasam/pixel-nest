# Pixel Nest

A playful launch station for small browser games.

## Games

- [Dinoland](https://loopasam.github.io/dinoland/)
- **Doudou Battler** — upcoming

## Live site

<https://loopasam.github.io/pixel-nest/>

The `main` branch is built and deployed to GitHub Pages through GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run build
npm run pages:prepare
npm run test:artifact
npm run lint
```

## Adding a game

1. Add a 16:10 WebP cover to `public/games/`.
2. Add the game's number, title, cover path, and status to the `games` array in `app/page.tsx`. Live games also need their public URL; upcoming games do not.
3. Run the production verification commands above.
4. Push to `main`. GitHub Actions will build the site, deploy it to Pages, and run a live smoke test.
