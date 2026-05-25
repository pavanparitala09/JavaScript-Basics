# React Context API Demo

This project demonstrates how to use the React Context API to solve the "prop drilling" problem by sharing state across deeply nested components.

## 📂 Architecture

*   **[src/context/CounterContext.js](./src/context/CounterContext.js)**: Defines the context object and providers for sharing state values.
*   **[src/components/A.jsx](./src/components/A.jsx)** / **[B.jsx](./src/components/B.jsx)** / **[C.jsx](./src/components/C.jsx)**: Deeply nested components that consume and update the count state.
*   **[src/store/TestStore.js](./src/store/TestStore.js)**: A lightweight Zustand store demonstrating an alternative approach to global state management.

## 🛠️ Usage
1.  Install packages: `npm install`
2.  Launch development server: `npm run dev`
