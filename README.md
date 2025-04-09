# React TV Movie UI 🎬

This is a responsive demo streaming UI built using **React**, **TypeScript**, and **Vite**.  
The app includes a landing page and two feature pages: **Popular Series** and **Popular Movies**.

## 🛠 Features

- 🔄 Shared layout with header, subheader, and footer
- 📱 Fully responsive design (desktop + mobile)
- 🧩 Reusable components (`Header`, `SubHeader`, `Footer`, `MediaCard`)
- 🔁 Dynamic subheading based on the current route
- 🌐 External links to Stan social media and app stores
- 🎨 Clean, minimal styling with custom icons and store badges

## 🧭 Pages

- `/` – Home page with links to Series and Movies
- `/series` – Popular Series titles
- `/movies` – Popular Movies titles

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
2. **Run the development server**
    ```
   npm run dev
App will run at: http://localhost:4000

3. **Lint**
   ```bash
   npm run lint

4. **Running Tests**

   This project uses [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/) for unit testing

   To run all tests:
   ```bash
   npm test

5. 🧪 Tech Stack
- React – UI library
- TypeScript – Static type checking
- Vite – Lightning-fast build tool
- React Router (HashRouter) – SPA routing, works with GitHub Pages
- Scoped CSS using plain .css files – Component-level styling with traditional CSS files
- Vitest & Testing Library – Unit testing framework and utilities

