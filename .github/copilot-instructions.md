# Copilot Instructions for ClientMern

## Project Overview
- **Stack:** React (with Vite), Tailwind CSS, custom API integration (see `api/`), context-based state management (see `context/`).
- **Structure:**
  - `src/` contains main app logic, views, components, and assets.
  - `api/` holds API abstraction modules (e.g., `axios.jsx`, `auth.jsx`).
  - `context/` provides React Contexts for authentication and shopping cart state.
  - `public/` and `styles/` contain static assets and global styles.

## Key Patterns & Conventions
- **API Calls:**
  - Use the `api/axios.jsx` module for HTTP requests. Other API logic is split into files like `auth.jsx` and `shoppingCar.jsx`.
  - Example: `import axios from '../api/axios'` in components/services.
- **State Management:**
  - Use React Context from `context/` for global state (e.g., `AuthContext`, `ShoppingContext`).
  - Wrap components in the appropriate provider in `App.jsx`.
- **Component Organization:**
  - Views are grouped by feature in `src/Views/` and `src/PrivateViews/`.
  - Shared UI elements (e.g., Navbar, Sidebar, Footer) are in their own subfolders.
  - Product-related UI is in `CardProduct/`, `AllProducts/`, and `shoppinComponents/`.
- **Routing & Protection:**
  - Use `ProtectedRoute.jsx` for route guarding (auth checks).
  - Main routes are defined in `App.jsx`.
- **Styling:**
  - Tailwind CSS is configured via `tailwind.config.js` and `postcss.config.js`.
  - Use utility classes in JSX; global styles in `styles/global.css`.

## Developer Workflows
- **Start Dev Server:**
  - `npm run dev` (uses Vite)
- **Build for Production:**
  - `npm run build`
- **Preview Production Build:**
  - `npm run preview`
- **Install Dependencies:**
  - `npm install`

## Integration Points
- **External APIs:**
  - All HTTP requests should go through the abstraction in `api/`.
- **Authentication:**
  - Managed via `AuthContext` and `api/auth.jsx`.
- **Shopping Cart:**
  - Managed via `ShoppingContext` and `api/shoppingCar.jsx`.

## Project-Specific Notes
- **File Naming:**
  - Some folders and files use lowercase or camelCase (e.g., `shoppinComponents/`, `allProducts.jsx`).
  - Be consistent with existing naming when adding new files.
- **Image Assets:**
  - Place in `public/img/` for static use, or `src/assets/` for imports.
- **Error Handling:**
  - Centralize API error handling in `api/axios.jsx` where possible.

## Examples
- To add a new protected view, create a component in `src/PrivateViews/`, add a route in `App.jsx`, and wrap it with `ProtectedRoute`.
- To add a new API endpoint, extend `api/axios.jsx` or add a new module in `api/`, then import and use in components.

---
For more details, see the `README.md` and explore the `src/`, `api/`, and `context/` directories.
