# Find Hospitals App

## Project Overview
A React-based web application that allows users to log in with Google authentication, fetch their current location, and display nearby hospitals on an interactive map.

## Features
- Google Authentication with Firebase
- Fetch user's current location
- Display nearby hospitals using Google Maps API
- Interactive map with markers for hospitals
- Responsive UI designed with Tailwind CSS

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/find-hospitals.git
   ```
2. Navigate to the project directory:
   ```sh
   cd find-hospitals
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables in a `.env` file:
   ```sh
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

## Running the Project
```sh
npm run dev
```

## Deploying to GitHub Pages
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy:
   ```sh
   npm run deploy
   ```

## Convert to APK
1. Install Capacitor:
   ```sh
   npm install @capacitor/core @capacitor/cli
   ```
2. Initialize Capacitor:
   ```sh
   npx cap init find-hospitals com.vikalsingh.hospitallocator
   ```
3. Add Android platform:
   ```sh
   npx cap add android
   ```
4. Open Android Studio and build the APK.

## Technologies Used
- React.js
- Firebase Authentication
- Google Maps API
- Tailwind CSS
- Vite.js

## License
This project is licensed under the MIT License.

## Author
Vikal Singh

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
