# starter-app

## Requirements
- NodeJS 8.9.4
- Yarn 1.7.0

## Directory Structure

```sh
starter-app/
├── api        # API server
├── public     # Frontend public static files
├── scripts    # Script for setup etc
├── shared     # Shared code between api and client, no spesific env api allowed here
└── src        # Frontend
```

## Setup

Install dependencies
```sh
yarn install
```

Seed the data if there's no any

```
yarn db:seed
```

Run the web api server

```sh
yarn dev:api
```

Run the web client server

```sh
yarn dev:web
```
