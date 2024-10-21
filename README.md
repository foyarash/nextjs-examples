# Redirection.io Next.js Examples Apps

![Redirection.io and Next.js](/logo.png)

This repository contains example applications demonstrating the integration of [Redirection.io](https://redirection.io/) with [Next.js](https://nextjs.org/), showcasing various setups and features.

These examples use the official [Redirection.io Vercel middleware](https://github.com/redirectionio/vercel-middleware). To add it to your own project, install it using npm or yarn:

```bash
yarn add @redirectionio/nextjs-examples
```

You can read more about the middleware in the [Vercel Middleware Integration Guide](https://redirection.io/documentation/developer-documentation/vercel-middleware-integration).

## Examples

### 1. Storyblok Example

A Next.js app with app router, demonstrating the integration of:

- Next.js app router and [Draft mode](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode)
- [Storyblok](https://www.storyblok.com/)
- Redirection.io with [Vercel middleware](https://github.com/redirectionio/vercel-middleware)

[View Storyblok Example README](storyblok-example/README.md)

### 2. Auth0 Example

A Next.js app with app router, showcasing the setup of:

- Next.js with app router
- [Auth0](https://auth0.com/)
- Redirection.io with [Vercel middleware](https://github.com/redirectionio/vercel-middleware)

[View Auth0 Example README](auth0-example/README.md)

### 3. Next-intl Example

A Next.js app with app router, demonstrating the integration of:

- Next.js with app router
- [Next-intl](https://next-intl-docs.vercel.app/) for internationalization
- Redirection.io with [Vercel middleware](https://github.com/redirectionio/vercel-middleware)

[View Next-intl Example README](next-intl-example/README.md)

## Getting Started

Each example project has its own README with specific instructions. Please refer to the individual README files for detailed setup and usage information.

## Common Setup Steps

1. Clone this repository
2. Navigate to the desired example directory
3. Create a `.env` file with the required environment variables (see individual READMEs)
4. Install dependencies: `yarn install`
5. Run the development server: `yarn dev`
6. Open http://localhost:3000 in your browser

## Redirection.io Setup

To use Redirection.io in these examples:

1. Go to https://redirection.io/
2. Create an account
3. Create a new project
4. Get the API key
5. Set the API key in the `.env` file of the respective example project
