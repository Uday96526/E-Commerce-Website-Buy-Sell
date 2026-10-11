# Buy & Sell Marketplace (React + Firebase)

Student / portfolio project: a classifieds-style buy-and-sell web app (OLX-inspired UI) built with **React**, **Context API**, and **Firebase** (Auth, Firestore, Storage).

> Course-era project (2022–2023). Presented as a learning demo, not a production marketplace.

## Features

- Browse and view product listings  
- Create listings (authenticated users)  
- Email/password auth (signup, login, password reset)  
- Admin views for managing posts  
- Profile update flows  

## Tech stack

- React 18 (`create-react-app`)  
- React Router v6  
- Context API for auth / app state  
- Firebase 9 (compat) — Auth, Firestore, Storage  
- Bootstrap / MUI for UI pieces  

## Setup

```bash
git clone https://github.com/Uday96526/E-Commerce-Website-Buy-Sell.git
cd E-Commerce-Website-Buy-Sell
cp .env.example .env
# paste your Firebase web app config into .env
npm install
npm start
```

Create a Firebase project, enable Email/Password auth, Firestore, and Storage, then fill `.env` from the Firebase console (Project settings → Your apps).

## Project layout

```
src/
  Components/     # UI pieces (Banner, Create, Login, etc.)
  Pages/          # Page-level views
  Routes/         # React Router
  contextStore/   # Auth and related context
  firebase/       # Firebase init (env-based config)
public/
assets/
```

## Notes

- Firebase credentials are loaded from environment variables (see `.env.example`).  
- Do not commit `.env`.  
- Older zip-only uploads of this project have been replaced with the source tree for clearer review on GitHub.

## Author

Uday Kumar
