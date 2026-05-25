# Blog Application Frontend (React + Vite Client)

A React single-page frontend application designed for authors and users to compose, view, and organize blog articles.

--- ## ️ Feature Guides & Implementations

### 1. Toast Notifications in React
To display success or error messages (e.g. signup success), the project utilizes **react-hot-toast**:
* **Installation**:
    ```bash
    npm install react-hot-toast
    ```
* **Integration**: Place the `<Toaster />` component at the application root:
    ```jsx
    <Toaster position="top-center" reverseOrder={false} />
    ```
* **Usage**:
    ```javascript
    import toast from "react-hot-toast";

    if (resObj.status === 201) {
        toast.success("Account created successfully");
        navigate("/login");
    }
    ```

### 2. User Profile Feed Grid (`UserProfile`)
* Fetches and displays articles from all authors.
* Renders articles inside a responsive grid layout:
    * **Extra Small (`xs`)**: 1 card column
    * **Small (`sm`)**: 2 cards column
    * **Medium (`md`)**: 3 cards column
    * **Large (`lg`+)**: 4 cards column

### 3. Author Profile Feed Grid (`AuthorProfile`)
* Queries only the articles written by the logged-in author.
* Uses the same responsive grid structure ($1 \rightarrow 2 \rightarrow 3 \rightarrow 4$ columns).

### 4. Article Detail View (`ArticleByID`)
* When a user clicks on an article card, the client redirects to the detailed view.
* Displays:
    * Title
    * Category
    * Content
    * Author name
    * Timestamps formatted in **IST** time standard.

--- ## Project Structure
* **`src/components/`**: Houses profiles, forms, card views, and detailing layout components.
* **`src/App.jsx`**: Layout root configuring route views and global triggers.

## Commands
1.  Install dependencies: `npm install`
2.  Launch development server: `npm run dev`
