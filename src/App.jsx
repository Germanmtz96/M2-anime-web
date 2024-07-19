import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import AnimeDetailsPage from "./Pages/AnimeDetailsPage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import AnimeListPage from "./Pages/AnimeListPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/anime-list/:id" element={<AnimeDetailsPage />} />
        <Route path="/anime-list" element={<AnimeListPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
