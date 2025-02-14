---
author: Jangwon Lee
date: 2024-05-30
---

Commands run:
```bash
npm init -y
npm install -g ts-node
npm install typescript ts-node @types/node --save-dev
npm install express
npm install @types/express --save-dev
```

Commands for running:
```bash
npm start
npm run build
npm run serve
```

The `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true
  }
}
```

The import for express:
```js
import express, { Request, Response } from 'express';
```

The scripts section:
```js
{
  "scripts": {
    "start": "ts-node src/app.ts",
    "build": "tsc",
    "serve": "node dist/app.js"
  }
}
```

Running Docker:
```
docker build -t my-typescript-app .
docker run -d -p 3000:3000 my-typescript-app
```
