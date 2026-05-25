# Backend Demo 2 (Mongoose & JWT Integration)

An advanced Express backend that adds data persistence using MongoDB and stateless authentication using JSON Web Tokens (JWT).

## Files & Structure

* **[server.js](./server.js)**: Configures and initializes the MongoDB connection, registers Express JSON parsing, cookie parsers, API endpoints, and a central error-handling middleware.
* **[API/UsersAPI.js](./API/UsersAPI.js)**: Authentication routes (Register, Login) and user resource controllers.
* **[API/ProductAPI.js](./API/ProductAPI.js)**: Product management controllers.
* **[models/UserModel.js](./models/UserModel.js)**: User Mongoose Schema definition.
* **[models/ProductModel.js](./models/ProductModel.js)**: Product Mongoose Schema definition.
* **[middlewares/VerifyToken.js](./middlewares/VerifyToken.js)**: Access controller middleware that validates client JWT tokens stored in request cookies.

## ️ Requirements
* MongoDB running locally on: `mongodb://localhost:27017`

## ️ Getting Started

1.  Navigate to this folder:
    ```bash
    cd Backend-Demo2
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start server:
    ```bash
    npm start
    ```
