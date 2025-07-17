import "./Footer.css";
import { GithubIcon, LinkedinIcon, WebIcon } from "../../assets/icons/icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <p className="footer__credit">Developed by Angel Juarez</p>
          <div className="footer__social">
            <a
              href="https://github.com/ajuarezse"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <GithubIcon className="footer__icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/angel-juarez-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <LinkedinIcon className="footer__icon" />
            </a>
            <a
              href="https://angeljuarez.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <WebIcon className="footer__icon" />
            </a>
          </div>
        </div>
        <p className="footer__year">2025</p>
      </div>
    </footer>
  );
}

export default Footer;
