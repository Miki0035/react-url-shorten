import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../styles/MobileNav.css";

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="mobile-container">
      <div className="mobile-menu">
        {!isVisible ? (
          <FontAwesomeIcon
            icon={faBars}
            size={"2x"}
            color="grey"
            onClick={() => setIsVisible(!isVisible)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setIsVisible(!isVisible)}
            size={"2x"}
            color="grey"
          />
        )}
      </div>
      {isVisible && (
        <div className="mobile-nav-container">
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <hr />
            <li>
              <a href="#">Login</a>
            </li>
            <li className="signup-nav-link">
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      )}{" "}
      {isVisible && (
        <div className="mobile-nav-container">
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <hr />
            <li>
              <a href="#">Login</a>
            </li>
            <li className="signup-nav-link">
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
