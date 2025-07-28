# Roamwise Frontend

This is the frontend for the **Roamwise** app — a location-aware platform designed to help users navigate indoor spaces. It is built using **React Native** with **Expo** and follows a modular, file-based routing architecture.

---

## 🧰 Installation

Make sure you have [Node.js](https://nodejs.org/) installed (v16 or higher is recommended).

Install dependencies with `npm install`. This sets up everything needed to run and build the app.

---

## 🚀 Running the App

Start the development server using `npm start`. Once it launches, you can run the app on an Android/iOS emulator or physical device, scan the QR code using the **Expo Go** app on your phone, and access the Expo Developer Tools UI in your browser.

---

## 🔁 Resetting the Project

To reset the project to a clean state (removing boilerplate), run `npm run reset-project`. NOTE: THIS WILL ONLY BE DONE AT THE BEGINNING OF THE PROJECT. DO NOT RUN IT AGAIN IF THE PROJECT IS ALREADY IN DEV. This command moves the existing starter code to `app-example/` and creates a blank `app/` directory to start fresh.

---

## 🧪 Testing & Debugging

You can debug the app directly in your terminal, emulator, or through browser DevTools. Use `console.log()` for basic debugging, or tools like `expo-dev-client` or `React Native Debugger` for more advanced inspection.

---

## 🧱 Project Structure

Here's a general overview: `app/` contains screens and route-based navigation; `components/` holds reusable UI components; `constants/` contains shared colors, fonts, and sizes; `assets/` stores static files like images and fonts; `utils/` has utility functions; and `App.tsx` is the main entry point of the app. The app uses **file-based routing**—each file or folder inside `app/` becomes a route in the app.

---

## 📂 Referencing Files and Modules

To keep imports clean and manageable, this project uses **path aliases** configured in `tsconfig.json` and `babel.config.js`. Instead of messy relative imports like `import logo from '../../assets/images/roamwise.png'` or `import Button from '../../components/Button'`, you can use aliases that map to your project folders such as `import logo from '@/assets/images/roamwise.png'` and `import Button from '@/components/Button'`. Here, the alias `@/` points to the project root (where your `app/`, `components/`, and `assets/` folders live).

This works because `tsconfig.json` includes a `"paths"` section with `"@/*": ["./*"]`, and `babel.config.js` uses the `module-resolver` plugin with an alias mapping `"@"` to `"./"`.

---

## 🛠 Development Tips

Use [VS Code](https://code.visualstudio.com/) with the **React Native Tools** extension, or whichever text editor or IDE you prefer. Stick to atomic component patterns where components are small, modular, and reusable. Theme and styling are centralized in the `constants/` folder—stick to the defined colors and font sizes for consistency.

---

## 📬 Contact

For contributions or questions, refer to the main Roamwise repository or open an issue.
