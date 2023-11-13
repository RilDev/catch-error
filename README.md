# Catch Error

Summary of responses and how to handle them:

### Case 1: The server can handle the request

The response will come back with a boolean key `ok`. If the response has a successful status, ex: `200`, then it will be `true`, else it will be `false`. A payload is located in the responses `body`. For JSON data, it can be consumed using `JSON.stringify()` or `await response.json()`.

### Case 2: The server can't handle the request

The response will have a boolean `ok` key, but the `body` might not contain the expect data, which will cause an error that will be caught in the `catch` clause.

### Cases 3: The request fail.

Maybe because you are offline or becauses the server is unreachable, sometimes the request will fail because of the front. In that case, no `response` is returned and an `error` is immediately caught in the `catch` clause.

## Setup

You need to install NodeJS: https://github.com/nvm-sh/nvm

You also need Caddy installed: https://caddyserver.com/v2

## Scripts

### Dev

Run `npm run dev:server` to start the Node server on port `5000`.

Run `npm run dev:caddy` to start the server that will serve the front on port `8080` and proxy the Node server on `localhost:8080/api`. The proxying helps prevent CORS issues.

### Production

Run `npm start` to start the production setup.
