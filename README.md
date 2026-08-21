# Pixel Nest

A playful launch station for small browser games.

## Games

- [Dinoland](https://loopasam.github.io/dinoland/)
- [Doudou Battler](https://loopasam.github.io/doudou-battler/)

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
node --test tests/rendered-html.test.mjs
```
