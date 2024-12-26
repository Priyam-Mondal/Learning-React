# 📚 Theme Workflow in React using Context API and Tailwind CSS

## 🚀 1. Overview
This document explains the implementation of a theme-switching workflow (Light/Dark mode) in a React application using **Context API** for state management and **Tailwind CSS** for dynamic styling.

---

## 📑 2. Key Concepts

### ✅ Context API
Provides a way to pass data (*theme state*) through the component tree without prop drilling.

**Components:**
- `createContext`: Creates a new context.
- `useContext`: Allows access to context data.
- `Provider`: Makes data available to all child components.

### ✅ Tailwind CSS Dynamic Styling
Uses global `light` or `dark` classes applied to the `<html>` tag.

**Conditional styling using prefixes:**
- `bg-white` → Light mode background.
- `dark:bg-gray-800` → Dark mode background.

### ✅ State Management
- `useState` manages the `themeMode` state.
- **State values:** `"light"` and `"dark"`.

---

## ⚙️ 3. Theme Context Setup

**File:** `theme.js`

```jsx
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}
```

- **ThemeContext:** Creates context with default values.
- **ThemeProvider:** Exposes the context to children.
- **useTheme Hook:** Custom hook to access theme context easily.

---

## 🛠️ 4. Global Theme State Management

**File:** `App.jsx`

```jsx
const [themeMode, setThemeMode] = useState("light");

const lightTheme = () => setThemeMode("light");
const darkTheme = () => setThemeMode("dark");

useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
}, [themeMode]);

return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <ThemeBtn />
        <Card />
    </ThemeProvider>
);
```

- **useState:** Tracks `themeMode`.
- **useEffect:** Updates `html` tag with `light` or `dark` class.
- **ThemeProvider:** Passes `themeMode`, `lightTheme`, and `darkTheme` functions.

---

## 🎨 5. Theme Toggle Button

**File:** `ThemeBtn.jsx`

```jsx
const { themeMode, lightTheme, darkTheme } = useTheme();

const onChangeBtn = (e) => {
    e.currentTarget.checked ? darkTheme() : lightTheme();
};

<input
    type="checkbox"
    checked={themeMode === "dark"}
    onChange={onChangeBtn}
/>
```

- **Access Context:** `useTheme` extracts `themeMode`, `lightTheme`, and `darkTheme`.
- **Toggle Theme:** Checkbox triggers `lightTheme` or `darkTheme`.

---

## 🃏 6. Dynamic Styling in Card Component

**File:** `Card.jsx`

```jsx
<div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
    <h5 className="text-gray-900 dark:text-white">Product Title</h5>
</div>
```

**Tailwind CSS Conditional Classes:**
- `bg-white`: Applies in Light Mode.
- `dark:bg-gray-800`: Applies in Dark Mode.
- `text-gray-900`: Light Mode text color.
- `dark:text-white`: Dark Mode text color.

The classes rely on the global `dark` class on `<html>`.

---

## 🌐 7. Workflow Summary

- **State Management:** `themeMode` is managed via `useState`.
- **Global Theme Class:** `useEffect` dynamically updates `html` class (`light/dark`).
- **Theme Provider:** Shares theme state and functions with child components.
- **Custom Hook:** `useTheme` simplifies theme context usage.
- **Dynamic Styling:** Tailwind CSS applies styles based on the global theme class.
- **Theme Toggle:** `ThemeBtn` triggers state changes.
- **Theme Adaptation:** `Card` dynamically adjusts styles using Tailwind classes.

---

## 📊 8. Advantages of This Approach

- 🔄 **Reusable Context:** Easily share theme state across components.
- 🎯 **Centralized State Management:** Single source of truth for theme.
- 🧠 **Simplified Hook Usage:** `useTheme` abstracts complexity.
- 🎨 **Effortless Styling:** Tailwind handles conditional styles seamlessly.

---

## ✅ 9. Key Takeaways

- Use **Context API** for global state management.
- Apply **Tailwind CSS** for dynamic class-based styling.
- Update `html` classes (`light/dark`) for global theme changes.
- Keep components **modular and reusable**.

---

Start building your theme-switching workflow with React, Context API, and Tailwind CSS today! 🚀🎨✨
