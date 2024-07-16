# Compréhension d'une arborescence utilisant Vite

```txt
mon-projet/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   └── ExempleComponent.js
│   ├── styles/
│   │   └── main.css
│   ├── App.js
│   └── main.js
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

Le fichier maître est _index.html_, il doit être à la racine.  
Le reste est à placer dans le dossier _assets_. Que l'on peut découper comme on l'entend. A noter qu'à la racine de ce dossier nous aurons systématiquement _App.js_ et _main.js_

## index.html

Fichier html de base avec les bonnes en-tête, le body ne contient que `<div id="app"></div>`  
Importe _main.js_ dans le header `<script type="module" src="/src/main.js"></script>`

## main.js

Importe le style.  
Insère `App()` dans `#app`

## App.js

Assemble différents composant pour constituer notre page

## components

Les différents composants qui seront appelés par App

## vite.config.js

```js
import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
  },
});
```
