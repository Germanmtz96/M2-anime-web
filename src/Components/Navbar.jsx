import React, { useEffect, useState } from "react";
import logo from "../assets/logo-1.png";
import { Link, useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Buscador from "./Buscador";
import axios from "axios";

function MyNavbar() {
  const navigate = useNavigate();
  const [randomAnime, setRandomAnime] = useState(null);

  useEffect(() => {
    const getRandomAnime = async () => {
      try {
        const response = await axios.get(
          "https://api.jikan.moe/v4/random/anime"
        );
        setRandomAnime(response.data.data);
      } catch (error) {
        console.log(error);
        navigate("/error");
      }
    };
    getRandomAnime();
  }, [navigate]);
  if (randomAnime === null) {
    return (
      <div>
        <BounceLoader className="spinner" size={150} aria-label="Loading Spinner"></BounceLoader>
        <h3> Loading ... </h3>;
      </div>
    );
  }
  return (
    <Navbar
      id="navbar"
      expand="lg"
      style={{ backgroundColor: "#6b20ee" }}
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height={40} />
        </Navbar.Brand>
        <Buscador />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Top 25 Animes
            </Nav.Link>
            <Nav.Link as={Link} to={`/anime-list/${randomAnime.mal_id}`}>
              Random Anime
            </Nav.Link>
            <Nav.Link as={Link} to="/anime-list">
              All anime
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
