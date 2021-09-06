import React from "react";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
