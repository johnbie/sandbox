---
author: Jangwon Lee
date: 2024-05-30
---

This project uses `babel` so that it can use ES6+ features, but it might not be needed.

Commands used:
```bash
npm init -y
npm install koa @babel/core @babel/preset-env @babel/register
node -r @babel/register app.js

# add router
npm install koa-router
```
