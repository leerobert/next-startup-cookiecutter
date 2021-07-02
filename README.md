# next-startup-cookiecutter

A quick cookiecutter nextjs application that supports

- Database ORM via prisma
- Error handling via sentry
- SEO via next-seo
- Authentication via next-auth
- Analytics via plausible
- UI Components via Material UI
- Passwordless Email Signin & custom email sending with Sendgrid

all integrated and modifiable via `config.js`

## Quick startup

`yarn install`

### Local Environment File

Setup a local `.env` file with the following configurations

`touch .env`

```json
DATABASE_URL="postgresql://user:pw@host:port/dbName?sslmode=require"
SENDGRID_API_KEY="<sendgrid-api-key>"
SECRET="<some generated secret>"
```

### Configure `config.js`

Modify the configuration file with your own startup details.

### Setup Sentry

Create an account at sentry.io. Then follow the startup instructions here to link this repo with a sentry project.

https://docs.sentry.io/platforms/javascript/guides/nextjs/

## Authentication via next-auth

How to setup different social authentications on top of email registration:

https://github.com/hexrcs/prisma-next-auth#step-3-configure-next-auth

## Deployment

TODO: Describe how to deploy to vercel
