import React, { useState, useEffect } from "react";
import {
  Container,
  IconButton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./NavBar.module.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add event listener for scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.sticky} ${scrolled ? styles.scrolled : ""}`}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" height={27} />
          </Link>

          {/* Navigation Links */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems={{ xs: "flex-start", md: "center" }}
            className={`${styles.navlinks} ${menuOpen ? styles.active : ""}`}
            pt={{ xs: 12, md: 1 }}
            pb={{ xs: 4, md: 1 }}
            px={{ xs: 4, md: 0 }}
          >
            <Link to="/">Home</Link>
            <Link to="/search">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>

            {/* Close Button for Mobile Menu */}
            {isMobile && menuOpen && (
              <IconButton
                aria-label="Close navigation menu"
                onClick={() => setMenuOpen(false)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 32,
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Stack>

          {/* Mobile Menu Icon */}
          {isMobile && !menuOpen && (
            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>
    </header>
  );
}
