import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import AnimeDetailsPage from "./Pages/AnimeDetailsPage";
import ErrorPage from "./Pages/ErrorPage";
import Error2Page from "./Pages/Error2Page"
import HomePage from "./Pages/HomePage";
import AnimeListPage from "./Pages/AnimeListPage";
import MyNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
       
       
        <Route path="/anime-list/:id" element={<AnimeDetailsPage />} />
        <Route path="/anime-list" element={<AnimeListPage />} />

        <Route path="/error" element={<Error2Page />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
