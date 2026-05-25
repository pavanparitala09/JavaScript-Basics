# Backend Demo (In-Memory Express Server)

A basic Node.js Express server to practice routing structures and standard HTTP methods (GET, POST, PUT, DELETE).

## Files & Structure

* **[server.js](./server.js)**: Server entrypoint that boots the app on Port 3000, registers JSON parsing middleware, and mounts API routers.
* **[API/userApi.js](./API/userApi.js)**: Handles user resource routes `/users-api`.
* **[API/productApi.js](./API/productApi.js)**: Handles product catalog routes `/products-api`.
* **[users.http](./users.http) / [products.http](./products.http)**: Local HTTP test request sheets.

## ️ Getting Started

1.  Navigate to this folder:
    ```bash
    cd Backend-Demo
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the application:
    ```bash
    npm start
    ```
