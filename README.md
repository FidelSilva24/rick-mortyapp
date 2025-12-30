# Rick & Morty Explorer

A modern **Vue 3 Single Page Application** that consumes the public Rick and Morty API to explore characters with pagination, filters, and a clean, production-oriented architecture.

This project focuses on **frontend engineering practices**, not just UI rendering.

---

## ✨ Features

- Fetches real data from a public API
- Server-side pagination
- Filters by status and species
- Global state management
- Loading and error handling
- Responsive grid layout
- Hover interaction for character details
- Environment-based configuration
- Clean separation of concerns

---

## 🧠 Architecture Overview

The application follows a layered architecture:


### Layers responsibility:

- **Views (UI)**  
  Render data and handle user interaction.

- **Store (Pinia)**  
  Manages global state, pagination, filters, loading and error states.

- **Service Layer**  
  Handles API communication, request building, and error normalization.

- **Environment Configuration**  
  API base URL is injected via `.env` files.

---

## 🏗️ Project Structure
src/
├─ views/
│ └─ CharactersView.vue
├─ stores/
│ └─ characters.js
├─ services/
│ └─ charactersService.js
├─ router/
│ └─ index.js
├─ assets/
└─ main.js


---

## 🔄 Data Flow

1. The view triggers a data load on mount
2. The store manages loading and pagination state
3. The service fetches data from the API
4. The UI reacts automatically to state changes

---

## 🌐 Environment Variables

The API base URL is configured using Vite environment variables:

```env
VITE_API_BASE_URL=https://rickandmortyapi.com/api

Install dependencies
npm install

Run in development mode
npm run dev

Open:

http://localhost:5173

📦 Production Build
npm run build
This generates a dist/ folder ready to be deployed to static hosting services such as AWS S3 + CloudFront.

Deployment (Concept)

The application can be deployed using:

Amazon S3 for static hosting

CloudFront as CDN

SPA routing fallback to index.html

This setup provides HTTPS, caching, and global distribution.

👤 Author

Built as a frontend architecture and engineering exercise focused on real-world application patterns.