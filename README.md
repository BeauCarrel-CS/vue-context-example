# Vue Context Example


Here is an example project showcasing the proposed State Management for the Errors Revamp.

Checkout the `global-context.ts` and `chart-context.ts` files to see how you can define your own context. Then see the various components to see how this context can be provided and consumed accross the application.

Notice how the Chart exists twice, with the same context logic, yet different context instances and can be updated independatly.
Also notice how updating the global context, updates both contexts accordingly.

See how we don't have to pass props down. This is an example, therefore small so the advantages of avoiding prop drilling is less obvious, but in llarge application this will save a lot of repetative code. 



This is a project template using [Vite](https://vitejs.dev/). It requires [Node.js](https://nodejs.org) version 18+ or 20+.

To start:

```sh
npm install
npm run dev

# if using yarn:
yarn
yarn dev

# if using pnpm:
pnpm install
pnpm run dev
```
