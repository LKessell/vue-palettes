<h1 align="center">🎨 Vue-tiful Palettes 🌈</h1>

## Project Overview
I created this project to explore the [Vue.js](https://vuejs.org/) framework and [TypeScript](https://www.typescriptlang.org/). Users can create a randomized palette of five colors, lock in colors that they like, and save or delete palettes.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Reflections
I had some difficulty wrapping my mind around reactive state in Vue! Having mostly worked with React in the past, it felt very taboo to mutate my state variables directly. I would like to continue studying the options for reactivity, as I still don't have a firm grasp on when to reach for `reactive()` versus `ref()`.

One feature that I really liked is the scoped styling option for components. This is a really handy feature that could be very useful for avoiding conflicts in larger applications. I enjoyed using CSS Modules during my apprenticeship for similar functionality, and it is nice to see a feature like this baked in!

There is still a lot of room for continued exploration in this project, and many future additions to consider:
- Save palettes in local storage to persist across refreshes
- Allow users to name palettes
- Allow users to click on a saved palette to bring it up in the main palette view
- Allow users to choose the type of palette generated (monochromatic, triad, etc.)
- Add functionality to share palettes

## Attributions

Palettes generated with <a target="\_blank" href="https://www.thecolorapi.com/">The Color API</a>

<a target="_blank" href="https://icons8.com/icon/SZTl3l31z6gR/rgb-color-wheel">RGB Color Wheel</a>, <a target="_blank" href="https://icons8.com/icon/7DbfyX80LGwU/trash">Trash</a>, <a target="_blank" href="https://icons8.com/icon/3seXONfwoB83/padlock">Padlock</a>, and <a target="_blank" href="https://icons8.com/icon/0R7F3PxtxHVm/lock">Lock</a> icons by <a target="_blank" href="https://icons8.com">Icons8</a>
