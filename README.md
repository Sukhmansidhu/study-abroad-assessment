# Study Abroad Frontend Technical Assessment
Repository Link : https://github.com/Sukhmansidhu/study-abroad-assessment.git
## Project Overview

This project is built using Next.js, TypeScript, Zustand, and Material UI (MUI).

The application includes:
- Authentication system
- Protected routes
- Users management
- Products management
- Search functionality
- Pagination
- Category filtering
- Product details pages
- Responsive dashboard UI
- Client-side caching
- Performance optimizations

All backend data is fetched from the DummyJSON public REST API.

---

# Features

## Authentication
- Admin login using DummyJSON Auth API
- Zustand state management
- Protected dashboard routes
- Token persistence using localStorage

---

## Users Module
- Users listing page
- Search users
- Pagination support
- Single user details page
- Responsive MUI table layout

---

## Products Module
- Products listing page
- Search products
- Category filtering
- Pagination support
- Single product details page
- Product image carousel
- Responsive MUI grid layout

---

# Technologies Used

- Next.js 16
- TypeScript
- Material UI (MUI)
- Zustand
- Axios
- DummyJSON REST API

---

# Zustand State Management

Zustand was selected because:
- Lightweight and simple
- Minimal boilerplate
- Easy async API handling
- Faster setup compared to Redux
- Ideal for small and medium-sized applications

---

# Performance Optimizations

## React.memo
Used to avoid unnecessary re-rendering of reusable components like ProductCard.

## useMemo
Used for optimized pagination calculations.

## useCallback
Used for optimizing reusable API functions.

## API-side Pagination
Implemented using limit and skip parameters to prevent loading large datasets.

---

# Client-side Caching

Caching is implemented using Zustand store state.

Benefits:
- Reduces unnecessary API requests
- Improves application performance
- Improves user experience

---

# Installation

```bash
npm install
```

---

# Run Development Server

```bash
npm run dev
```

Open:
http://localhost:3000

---

# Build Project

```bash
npm run build
```

---

# Start Production Server

```bash
npm start
```

---

# API Used

https://dummyjson.com/

---

# Authentication Credentials

```txt
Username: emilys
Password: emilyspass
```

---

# Folder Structure

```txt
src/
 ├── app/
 ├── components/
 ├── services/
 ├── store/
```

---

# Notes

Authentication is implemented using Zustand and DummyJSON Auth API.

The next-auth package is installed and can be extended further for production-level authentication flows.