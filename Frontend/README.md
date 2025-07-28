# Roamwise Frontend

This is the frontend for the **Roamwise** app — a location-aware platform designed to help users navigate indoor spaces. It is built using **React Native** with **Expo** and follows a modular, file-based routing architecture.

---

## 🧰 Installation

Make sure you have [Node.js](https://nodejs.org/) installed (v16 or higher is recommended).

Install dependencies:

```bash
npm install
```

This sets up everything needed to run and build the app.

---

## 🚀 Running the App

Start the development server:

```bash
npm start
```

Once it launches:

- You can run the app on an Android/iOS emulator or physical device.
- You can scan the QR code using the **Expo Go** app on your phone.
- You'll also get access to the Expo Developer Tools UI in your browser.

---

## 🔁 Resetting the Project

To reset the project to a clean state (removing boilerplate):

```bash
npm run reset-project
```

`NOTE THIS WILL ONLY BE DONE AT THE BEGINNING OF THE PROJECT. DO NOT RUN IT AGAIN IF THE PROJECT IS ALREADY IN DEV`

This will:
- Move the existing starter code to `app-example/`
- Create a blank `app/` directory to start fresh

---

## 🧪 Testing & Debugging

You can debug the app directly in your terminal, emulator, or through browser DevTools. Use:

- `console.log()` for basic debugging
- `expo-dev-client` or `React Native Debugger` for more advanced inspection

---

## 🧱 Project Structure

Here's a general overview:

```
app/             # Screens and route-based navigation
components/      # Reusable UI components
constants/       # Shared colors, fonts, sizes
assets/          # Static files (images, fonts)
utils/           # Utility functions
App.tsx          # Main entry point of the app
```

The app uses **file-based routing**. Each file or folder inside `app/` becomes a route in the app.

---

## 🛠 Development Tips

- Use [VS Code](https://code.visualstudio.com/) with the **React Native Tools** extension. or whatever text editor/IDE works for you.
- Stick to atomic component patterns: components should be small, modular, and reusable.
- Theme/styling is centralized in `constants/`. Stick to defined colors and font sizes.

---

## 📬 Contact

For contributions or questions, refer to the main Roamwise repo or open an issue.
