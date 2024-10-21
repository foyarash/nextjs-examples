## Next.js app router with Auth0 and Redirection.io

Project demo demonstrating the setup of :

- Next.js with app router
- [Auth0](https://auth0.com/)
- Redirection.io with [Vercel middleware](https://github.com/redirectionio/vercel-middleware)

## How to use it ?

1. Clone the repository
2. Create a `.env` file with the following variables :
   - `AUTH0_SECRET`
   - `AUTH0_BASE_URL`
   - `AUTH0_CLIENT_ID`
   - `AUTH0_ISSUER_BASE_URL`
   - `AUTH0_CLIENT_SECRET`
   - `REDIRECTIONIO_TOKEN`
3. Run `yarn install`
4. Run `yarn dev`
5. Go to http://localhost:3000/

## How to setup Redirection.io ?

1. Go to https://redirection.io/
2. Create an account
3. Create a new project
4. Get the API key
5. Set the API key in the `.env` file

## How to setup Auth0 ?

1. Go to https://auth0.com/
2. Create an account
3. Create a new application
4. Get the Client ID, secret and domain
5. Update the `.env` accordingly
