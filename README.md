# Shopify Next.js x Prisma Boilerplate

An embedded app starter template to get up and ready with Shopify app development with Next.js and Prisma.

I've included [notes](/docs/NOTES.md) on this repo which goes over the repo on why certain choices were made.

## Setup ssl locally

1- Install mkcert `(choco install mkcert / brew install mkcert)`

2- Run `mkcert -install` once only

3- Run `npm run ssl:create`

## Running the local ssl tunnel

Run `npm run tunnel`

## Video

I made a video that goes over the entire repo, creating theme extension and deploying with Vercel and PlanetScale.

[![Creating a Shopify app from scratch](http://i3.ytimg.com/vi/Z_JFpEJRh_g/hqdefault.jpg)](https://www.youtube.com/watch?v=Z_JFpEJRh_g)

## Tech Stack

- Next.js 13
- Prisma (Postgresql)

## Notes

- Refer to [SETUP](/docs/SETUP.md)
- The project comes with snippets to speed up development. Refer to [Snippets](/docs/SNIPPETS.md).
