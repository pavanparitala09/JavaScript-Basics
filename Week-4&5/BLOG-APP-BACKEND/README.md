# Blog Application Backend (Cloudinary & Multer Integration)

A robust, enterprise-structured Express.js blogging backend featuring role-based access control and image upload streaming.

## 📂 Project Architecture

*   **[server.js](./server.js)**: Configures application routing, cookie parser, JSON readers, and global error handling middlewares.
*   **[config/](./config/)**:
    *   `multer.js`: Configures storage boundaries for processing file multipart submissions.
    *   `cloudinary.js`: Connects to Cloudinary cloud storage to upload image files.
*   **[middlewares/](./middlewares/)**:
    *   `VerifyToken.js`: Decodes JWT tokens.
    *   `UserVerify.js` / `AuthorVerify.js` / `AdminVerify.js`: Guards ensuring specific client roles are authorized for target routes.
*   **[models/](./models/)**: Mongoose data models.
    *   `UserModel.js`: User profiles (usernames, emails, encrypted passwords, avatars).
    *   `ArticleModel.js`: Article posts (title, body, category, author details, comments).
*   **[APIs/](./APIs/)**: Route controllers.
    *   `CommonApi.js`: Login, signup, and general user/article queries.
    *   `UserApi.js` / `AuthorApi.js` / `AdminApi.js`: Specific action routes (e.g. author post writing, admin article management).
*   **[services/AuthService.js](./services/AuthService.js)**: Auxiliary helper logic for auth state validation.

## ⚙️ Configuration Setup
Create a `.env` file in this directory with the following variables:
```env
PORT=4000
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## 🛠️ Usage
1.  Install packages: `npm install`
2.  Start in development mode: `npm run dev`
