import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Home</h1>
      <p>Welcome to the site.</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <nav style={{ padding: "1rem", display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
