import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import "./NavbarComponent.css";
import logo from "../../assets/logo2.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function NavbarComponent() {
  const [active, setActive] = useState("nav_links");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActive("nav_links");
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navToggle = () => {
    setActive(active === "nav_links" ? "nav_links nav_active" : "nav_links");
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setActive("nav_links");
    setMenuOpen(false);
  };

  const scrollTo = () => {
    navigate("/");
    closeMenu();
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar_logo">
        <NavLink onClick={closeMenu} to={"/"}>
          <img className="logo_img" src={logo} alt="logo image" />
        </NavLink>
      </div>
      <div className="menu_icons" onClick={navToggle}>
        {active === "nav_links" ? <MenuRoundedIcon /> : <CloseRoundedIcon />}
      </div>
      <div className={active}>
        <NavLink onClick={closeMenu} className={"link"} to={"/"}>
          Home
        </NavLink>

        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          to="about"
          onClick={scrollTo}
        >
          About
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          to="courses"
          onClick={scrollTo}
        >
          Courses
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          to="contacts"
          onClick={scrollTo}
        >
          Contacts
        </Link>

        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          to="services"
          onClick={scrollTo}
        >
          Services
        </Link>
        <NavLink onClick={closeMenu} className={"link"} to={"/blogspace"}>
          Blogspace
        </NavLink>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          to="motivation"
          onClick={scrollTo}
        >
          Motivation
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          to="trainers"
          onClick={scrollTo}
        >
          Trainers
        </Link>
      </div>
    </nav>
  );
}

export default NavbarComponent;
