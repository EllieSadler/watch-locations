This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Watch Locations Exercise

This is a basic proof of concept for displaying a list of previous watch locations upon request by clicking on a button.

### Requirements / Roadmap List

1. create faker getLastLocation API 
- should include the following fields 
-- address {street, city, state}
-- executionTime

2. create function to make API call
- define timestamp
- add item to results array w/ only timestamp
- await api call
- update item in results w/ returned data

3. button onClick to run API call function

4. display a list of memoized results 
- sort results from newest to oldest 
-- `results.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1);`
- should display "Loading..." if the item exists in list but `!result.executionTime`


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
