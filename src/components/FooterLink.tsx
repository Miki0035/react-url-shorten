import "../styles/FooterLink.css";

const FooterLink = ({ link, sublink }: { link: string; sublink: string[] }) => {
  return (
    <div className="footer-links">
      <a href="/">{link}</a>
      <ul>
        {sublink.map((link) => (
          <li key={link}>
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLink;
