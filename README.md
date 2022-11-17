# Shared next config example

This demonstrates two methods of config sharing for Next.js

First, a new [nextconfig](./packages/nextconfig/) workspace is created. 

1. In [docs](./apps/docs/next.config.js), the config is merged via object spread.
2. In [web](./apps/web/next.config.js), the config is merged using a withCommonConfig function.
