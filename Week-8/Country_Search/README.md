# Country Search Engine (REST API Integration)

A React application that queries and filters countries in real-time by communicating with the public REST Countries API.

## Project Architecture

* **[src/components/SearchBox.jsx](./src/components/SearchBox.jsx)**: Input text fields to capture and filter queries.
* **[src/components/CountryGrid.jsx](./src/components/CountryGrid.jsx)** / **[CountryCard.jsx](./src/components/CountryCard.jsx)**: Render individual profiles (flags, populations, regions, capitals).
* **[src/App.jsx](./src/App.jsx)**: Handles the `useEffect` hooks that call the API on page mount and load results.

## API Reference
Uses standard HTTP requests to fetch country records from `https://restcountries.com/v3.1/all`.

## ️ Usage
1.  Install packages: `npm install`
2.  Launch: `npm run dev`
