# Blog Application Backend (MERN Architecture)

A modular and highly structured Express.js server utilizing Mongoose schemas to build a multi-role blogging backend (supporting Users, Authors, and Admins).

--- ## Project Architecture

* **[server.js](./server.js)**: Configures server environment loading (`dotenv`), database initialization (`mongoose`), routes registration, and complex error-handling middleware.
* **[models/](./models/)**: Data structures.
    * `UserModel.js`: Stores user profiles (usernames, email strings, password hashes, user roles like standard, author, admin).
    * `ArticleModel.js`: Stores article schemas (title, content, tags, author, feedback/comments array, active flag).
* **[APIs/](./APIs/)**: Role-separated routes.
    * `CommonApi.js`: Handles general operations such as registration and authentication.
    * `UserAPI.js`: Handles reader features (subscribing, reading, commenting).
    * `AuthorAPI.js`: Handles creator features (writing, editing, archiving articles).
    * `AdminAPI.js`: Handles administration features (flagging, user verification, overview statistics).
* **[middlewares/](./middlewares/)**: Access layers.
    * `verifyToken.js`: Checks JWT signature headers/cookies.
    * `checkUser.js` / `checkAuthor.js` / `checkAdmin.js`: Role verification checks.
* **[services/authService.js](./services/authService.js)**: Helper module containing modular authentication and signup steps.

--- ## ️ Step-by-Step Backend Setup Guide

1.  **Initialize Project**:
    ```bash
    npm init -y
    ```
2.  **Install Required Modules**:
    ```bash
    npm install express mongoose dotenv cookie-parser jsonwebtoken bcryptjs
    ```
3.  **Environment Setup**: Create a `.env` file:
    ```env
    PORT=4000
    DB_URL=mongodb://localhost:27017/anuragdb
    JWT_SECRET=your_jwt_signing_key
    ```
4.  **Launch Database Server**: Make sure MongoDB is active.
5.  **Run Server**:
    ```bash
    npm start
    ```
    or (with nodemon):
    ```bash
    nodemon server.js
    ```

--- ## ️ Error Handling
The global error handling middleware in `server.js` automatically catches and formats:
* Mongoose validation errors (returns HTTP 400 with details).
* Mongoose duplicate key error index values (code 11000).
* Invalid ObjectId values (CastError).
* Strict Schema violation field queries.
