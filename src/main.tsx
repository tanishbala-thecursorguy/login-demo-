
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  
  // Workaround for theme initialization
  // Set dark theme by default
  if (typeof window !== 'undefined') {
    const root = document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  
  createRoot(document.getElementById("root")!).render(
    <App />
  );
  