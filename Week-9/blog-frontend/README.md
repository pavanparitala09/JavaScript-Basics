# Blog Frontend Client (Zustand State Store)

A React single-page app displaying dynamic dashboard layouts styled using custom styling layouts.

## Project Architecture

* **[src/store/authStore.js](./src/store/authStore.js)**: Configures global credentials, auth tokens, user types, and state updates using **Zustand**.
* **[src/components/](./src/components/)**:
    * `Home.jsx` / `Header.jsx` / `Footer.jsx` / `RootLayout.jsx`: Application shell.
    * `Login.jsx` / `Register.jsx`: Member auth inputs.
    * `AdminDashboard.jsx` / `AuthorDashboard.jsx` / `UserDashboard.jsx`: Dedicated views loaded according to active roles.
    * `AddArticle.jsx` / `Article.jsx`: Creating and viewing items.
    * `ProtectedRoute.jsx`: Guards checking if user state matches credentials.
* **[src/styles/common.js](./src/styles/common.js)**: Shared stylesheet objects.

## ️ Usage
1.  Install packages: `npm install`
2.  Launch application: `npm run dev`
