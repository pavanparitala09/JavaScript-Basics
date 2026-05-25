# Full-Stack User Management Application

A full-stack (MERN) web application containing an Express API server and a React Vite frontend workspace.

## Project Architecture

* **[backend/](./backend/)**: Express server using Mongoose.
    * `models/UserModel.js`: Mongoose Schema for user profiles.
    * `routes/UserRoutes.js`: HTTP endpoints to query, insert, update, and delete users.
    * `server.js`: Server entrypoint running database connections and parsers.
* **[frontend/](./frontend/)**: Client React dashboard application.
    * `src/components/`: Subcomponents managing user registration, list displays, search boxes, and profile cards.
    * `src/App.jsx`: State hub requesting backend APIs and rendering the UI layout.

## ️ Configuration Setup

### Backend Environment (`backend/.env`)
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## ️ Execution

1.  **Start API Server**:
    ```bash
    cd backend
    npm install
    npm start
    ```
2.  **Start Frontend Client**:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
