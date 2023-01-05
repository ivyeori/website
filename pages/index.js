import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import ParticleBackground from './particlesBackground'
export default function App() {
  return (
      <><Home /><ParticleBackground /></>
  );
}
