# j1h00 portfolio v0.1

> checkout portfolio here
> [https://j1h00.github.io/toy-introduction/](https://j1h00.github.io/toy-introduction/)

## Skills
- Next.js project built with create-next-app 
- scroll trigger animation using gsap library 
- few CSS animation 
- designed with tailwind CSS 

## how to deploy 

> [refer to this blog](https://velog.io/@ricale/next.js-%EB%A1%9C-GitHub-Pages-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0)

use command below, which uses github-pages to deploy 

```bash
npm run deploy
```

this contains commands below

```bash
rm -rf node_modules/.cache 
next build 
next export 
touch out/.nojekyll 
git add -f out/ 
git commit -m \"Deploy Next.js to gh-pages\" 
git subtree push --prefix out origin gh-pages
```

- build & export 
- push to branch gh-pages 

