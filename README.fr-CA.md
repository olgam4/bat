<p align='center'>
  <img src="./public/pwa-512x512.png" width="150"/>
</p>

<p align='center'>parce que nos premiers commits n'ont jamais de parents</p>

<br>

> Je gage que tes parents t'ont appris que tu es important, que tu es ici pour une raison. Mes parents m'ont appris une leçon différent, en mourant sur le trottoir pour aucune raison... Ils m'ont appris que le monde ne fait du sens que si tu le forces à en faire.
> 
> -- batman

<br>

<p align='center'>
  <a href="https://bat.glo.quebec" target="_blank">Demo</a>
</p

<br>

<p align='center'><a href="https://github.com/olgam4/bat#readme">English</a> | <b>Français</b></p>

<!-- Les contributions sont les bienvenues -->

<br>

<br>

![🚀 Deploy](https://github.com/olgam4/bat/actions/workflows/ci.yml/badge.svg)

## Features

* ⚡️ [Vite 3](https://vitejs.dev/) avec ~~[Vitest](https://vitest.dev/)~~ (pour le moment [brisé](https://github.com/solidjs/solid-start/runs/7685058495?check_suite_focus=true)), [pnpm](https://pnpm.js.org/)

* 🗿 [Solid](https://www.solidjs.com/), la librairie la plus [rapide](https://krausest.github.io/js-framework-benchmark/current.html)

* 🗂  [Génération des routes via l'arborescence](/src/routes/)

* 🔮 [Auto Import](https://github.com/antfu/unplugin-auto-import/)

* 🎨 [TailwindCSS](https://tailwindcss.com), [PostCSS](https://postcss.org/)

* 🙂 [Iconify avec TailwindCSS](https://github.com/JensDll/tailwindcss-plugin-icons)

* 🌎 [i18n](https://github.com/solidjs-community/solid-primitives/tree/main/packages/i18n) ready

* 🧽 [eslint](https://eslint.org/)

* 🦾 [TypeScript](https://www.typescriptlang.org/)

* 📱 [PWA](https://github.com/antfu/vite-plugin-pwa)

* 🖨 [SSR](https://github.com/solidjs/solid-start)

* 🦕 [Deno](https://deno.com/deploy) Edge Functions avec des GitHub Secrets

## Essayez le maintenant!

### Cloner en local

``` sh
npx degit olgam4/bat my-bat-mobile
cd my-bat-mobile
pnpm i # Si pnpm n'est pas utilisé, nous recommande fortement de l'essayer: npx i -g pnpm
```

### GitHub Template

[Créer un nouveau repo à partir de ce template](https://github.com/olgam4/bat/generate)

## Checklist

- [ ] Changer l'auteur dans `LICENSE`
- [ ] Changer le favicon dans `public`
- [ ] Retirer le `.FUNDING.yml`
- [ ] Ajouter les secrets pour le Projet Deno et son token
- [ ] Modifier les READMEs et retirer les routes

## Usage

### Développement

Simplement rouler et naviguer à `localhost:3000`

```bash
pnpm dev --open
```

### Build

On utilise ici vite et solid-start

```bash
pnpm build
```

## Remerciements

Ce projet est inspiré de 🏕 [antfu/vitesse](https://github.com/antfu/vitesse)
