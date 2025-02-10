import React, { useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
      <div className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__nav">
              <img src="" alt="logo" />
              <ul className="header__ul">
                <Link to={"/"}>Home</Link>
                <Link to={"/category"}>Product</Link>
                <Link to={"/favorite"}>Favorite</Link>
                <Link to={"/cart"}>Cart</Link>                                                       
                <Link to={"/contact"}>Contact</Link>                                
              </ul>
            </div>
            <div className="header__icon">
                <IoCartOutline />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
