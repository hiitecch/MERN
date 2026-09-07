import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TodoitemProvider } from "./store/TodoitemContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoitemProvider>
      <App />
    </TodoitemProvider>
  </StrictMode>
);