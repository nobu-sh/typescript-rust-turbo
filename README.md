# Typescript Rust Turbo Boilerplate

A quickstart boilerplate for a [Turbo](https://turbo.build/) with [Yarn Berry](https://yarnpkg.com). I originally made this template for [SerenityJS](https://github.com/SerenityJS/serenity). We needed a centralized solution where we could keep packages made in [TypeScript](https://www.typescriptlang.org/) and packages made in [Rust](https://www.rust-lang.org/) using [napi-rs](https://napi.rs/) to expose node engine binaries.

Instead of the traditional `/apps` directory we only needed [launcher](./launcher) and [docs](./docs) app so we kept them in the root. This should be relatively easy to change back if you fancy that more.

## Prerequisites

Before you begin, ensure that you have the following tools installed on your system:

- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) - Package manager of choice.
- [Node](https://nodejs.org/en) - Version ^20 recommended.

## Usage

1. Clone the repository:
```bash
git clone https://github.com/nobu-sh/typescript-rust-turbo.git
```

2. Open the project in VSCode using the `typescript-rust-turbo.code-workspace` file located in the [.vscode](./.vscode) directory.

3. In the [root directory](./) and run `yarn` to install and link all workspace dependencies.

4. GLHF...

## Creating a new Package.

This has been made relatively simple. Running `yarn new` in the project root will take you through a setup powered by [Turbo Generators](https://turbo.build/repo/docs/core-concepts/monorepos/code-generation).

## Vercel Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

Login to your [Vercel](https://vercel.com) account by running:

```bash
npx turbo login
```

Then link the project by running:

```bash
npx turbo link
```