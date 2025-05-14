<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework that I built for creating efficient and scalable server-side applications.
</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate me"/></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20me-Open%20Collective-41B883.svg" alt="Support me"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow me on Twitter"></a>
</p>

[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
[![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)

## Description

This is the Nest framework TypeScript starter repository that I created.

## Set up with my template

### Scaffold My Project

Follow these steps to initialize my NestJS project:

1. Download the scaffold script:

   ```bash
   curl -o scaffold-nest-js-project.sh https://raw.githubusercontent.com/aditya04tripathi/nestjs-starter-api-with-jwt-auth/refs/heads/main/scaffold-nest-js-project.sh
   ```

2. Make the script executable:

   ```bash
   chmod +x scaffold-nest-js-project.sh
   ```

3. Run the script:

   ```bash
   ./scaffold-nest-js-project.sh <project_name>
   ```

## How to run the server?

1. Spin up PostgreSQL container.
   ```bash
   docker-compose up -d
   ```
   OR (if the above command doesn't work)
   ```bash
   docker compose up -d
   ```

## Contributions

I welcome community contributions! If you would like to contribute:

1. Fork my repository.
2. Create a new branch with your feature or fix.
3. Submit a pull request and follow my contribution guidelines.

## Pull Requests

Before submitting a pull request, please:

- Ensure your changes adhere to my coding standards.
- Discuss any significant changes with me via an issue.
