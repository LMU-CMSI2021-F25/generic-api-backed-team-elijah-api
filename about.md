# Met Explorer

Met Explorer is a React web app that lets you search artworks from The Metropolitan Museum of Art and filter by department. Results are presented as responsive cards with images, title, artist, and a link to view the piece at The Met.

## API Used
- The Metropolitan Museum of Art Collection API  
  Docs: https://metmuseum.github.io/

Key endpoints:
- `/departments` to populate the filter dropdown
- `/search?hasImages=true&q={term}[&departmentId={id}]` to find object IDs
- `/objects/{id}` for artwork details

## What I’m proud of
- Fully abstracted network layer in a pure JS module (`src/api/metApi.js`)
- Nice loading and error feedback (spinner + banner)
- Clean, responsive grid with hover transitions and accessible alt text
- No console warnings (React + a11y)

## Deployment
Live site: https://met-explorer-eight.vercel.app


## Running locally
```bash
npm install
npm run dev
