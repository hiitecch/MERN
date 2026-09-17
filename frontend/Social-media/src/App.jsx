import Navbar from "./components/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;