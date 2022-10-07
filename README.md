<p align='center'>
  <img src="./public/pwa-512x512.png" width="150"/>
</p>

<p align='center'>because our first commits never have parents</p>

<br>

> I bet your parents taught you that you mean something, that you're here for a reason. My parents taught me a different lesson, dying in the gutter for no reason at all... They taught me the world only makes sense if you force it to.
> 
> -- batman

<br>

<p align='center'>
  <a href="https://bat.glo.quebec" target="_blank">Live Demo</a>
</p

<br>

<p align='center'><b>English</b> | <a href="/README.fr-CA.md">Français</a></p>

<!-- Contributions are welcome -->

<br>

<br>

![🚀 Deploy](https://github.com/olgam4/bat/actions/workflows/ci.yml/badge.svg)

## Features

* ⚡️ [Vite 3](https://vitejs.dev/) with ~~[Vitest](https://vitest.dev/)~~ (currently [broken](https://github.com/solidjs/solid-start/runs/7685058495?check_suite_focus=true)), [pnpm](https://pnpm.js.org/)

* 🗿 [Solid](https://www.solidjs.com/), [fastest](https://krausest.github.io/js-framework-benchmark/current.html) component library

* 🗂 [File based routing](/src/routes/)

* 🔮 [Auto Import](https://github.com/antfu/unplugin-auto-import/)

* 🎨 [TailwindCSS](https://tailwindcss.com), [PostCSS](https://postcss.org/)

* 🙂 [Iconify with CSS](https://github.com/JensDll/tailwindcss-plugin-icons)

* 🌎 [i18n](https://github.com/solidjs-community/solid-primitives/tree/main/packages/i18n) ready

* 🧽 [eslint](https://eslint.org/)

* 🦾 [TypeScript](https://www.typescriptlang.org/)

* 📱 [PWA](https://github.com/antfu/vite-plugin-pwa)

* 🖨 [SSR](https://github.com/solidjs/solid-start)

* 🦕 [Deno](https://deno.com/deploy) Edge Functions with Simple GitHub Secrets

* 🦀 [Tauri](https://tauri.app/) for Native Development

* [ ] Use [solid-query](https://github.com/TanStack/query/pull/4211/files)

## Try it now!

### Clone to local

``` sh
npx degit olgam4/bat my-bat-mobile
cd my-bat-mobile
pnpm i # If you are not already an avid pnpm-er, I really do suggest you give it a try !
```

### GitHub Template

[Create a repo from this template](https://github.com/olgam4/bat/generate)

## Checklist

- [ ] Change the author name in `LICENSE`
- [ ] Change the favicon in `public`
- [ ] Remove the `.FUNDING.yml`
- [ ] Add deno project name and token to Secrets
- [ ] Clean up the READMEs and remove routes

## Usage

### Development

Simply run and open `localhost:3000`

```bash
pnpm dev --open
```

### Build

Building uses vite and solid-start

```bash
pnpm build
```

### Start

Host a server to ping your build preview (requires `build`)

```bash
pnpm start
```

### Update dependencies

Try and find new minors, majors and bugfixes with taze

```bash
pnpm deps
```

### Lint your project

There is a very stripped-down eslint, which you can use

```bash
pnpm lint
```

### Run through Docker -- does not work on Mac M1+ chips

First build your app

```bash
 docker build . -t bat:latest
```

Then mount it using docker run

```bash
 docker run -it --init -p 3000:3000 bat:latest
```

### Build native apps

This project uses Tauri 🦀 to build native apps.

#### Dev

```bash
pnpm tauri dev
```

#### Build

```bash
pnpm tauri build
```

## Acknoledgements

This repo is inspired by 🏕 [antfu/vitesse](https://github.com/antfu/vitesse)
