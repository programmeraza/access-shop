import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__logo">
              <img src="" alt="logo" />
            </div>
            <div className="footer__block-flex">
              <ul className="footer__ul">
                <h3>Pages</h3>
                <Link to={"/"}>Home</Link>
                <Link to={"/category"}>Product</Link>
                <Link to={"/favorite"}>Favorite</Link>
                <Link to={"/cart"}>Cart</Link>
              </ul>
              <div className="footer__flex">
                <ul className="footer__ul">
                  <h3>Payment</h3>
                  <p>
                    All payments on the access.uz website are <br /> made through a secure gateway
                  </p>
                </ul>
                <ul className="footer__ul">
                  <h3>Contact us</h3>
                  <p>+998 91 001 06 57</p>
                  <a className="footer__ul-link" href="#">Trmn.store karimberdiyevaziz077@gmail.com</a>
                  <p>
                    Ташкент, пр. Олой Бозори, 59/7 <br /> Республика Узбекистан
                  </p>
                  <p>
                    Для оптовой покупке <br /> обращайтесь в @TruemanStore
                  </p>
                </ul>
              </div>
            </div>
            <div className="footer__bottom">
              <Link>Instagram</Link>
              <Link>Developed by Aziz Karimberdiyev</Link>
              <Link>© 2025 Access Store</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
