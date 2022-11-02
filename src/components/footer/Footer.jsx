import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Peroti</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">
              Qualifications
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/lucas_peroti/"
            className="home__social-icon"
            target="__blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-peroti/"
            className="home__social-icon"
            target="__blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/lucasperoti"
            className="home__social-icon"
            target="__blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer_copy">
            &#169; Lucas Peroti. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
