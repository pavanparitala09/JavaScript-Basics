# E-Commerce Application Backend

A modular Express.js backend application designed to handle operations for an online shopping portal (user accounts, catalog items, and shopping workflows).

## Project Architecture

* **[server.js](./server.js)**: Configures application server port, routes mapping, MongoDB connectivity, and standard parsing.
* **[models/](./models/)**:
    * `UserModel.js`: Defines standard shopper and seller schemas.
    * `ProductModel.js`: Manages catalog item details (name, price, stock quantity, brand, categories).
* **[APIs/](./APIs/)**:
    * `UserAPI.js`: Handle registration, login, profile updates, and shopping carts.
    * `ProductAPI.js`: Supports product uploads, inventory checks, updates, and catalog queries.
* **[middlewares/](./middlewares/)**: Validates authorization states.

## ️ Usage
1.  Navigate here: `cd E-commers-app-backend`
2.  Install packages: `npm install`
3.  Configure database connection string inside code or `.env`.
4.  Launch service: `npm start`
