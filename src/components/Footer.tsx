import { footerLinks, socialIcons } from "../constants";
import "../styles/Footer.css";
import FooterLink from "./FooterLink";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-logo">
          <a href="">Shortly</a>
        </div>
        <div className="link-containers">
          {footerLinks.map(({ id, link, sublinks }) => (
            <FooterLink key={id} link={link} sublink={sublinks} />
          ))}
        </div>
        <div className="social-containers">
          {socialIcons.map((icon) => (
            <a key={icon} href="#">
              <img key={icon} src={icon} alt-={`${icon} png`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
