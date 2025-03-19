import logo from "./assets/images/logo.svg";
import "./App.css";
import {
  BoostSection,
  Footer,
  FormSection,
  HeroSection,
  MobileNav,
  StatSection,
} from "./components";
const App = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo-container">
            <a href="/">
              <img src={logo} alt="shortly logo" />
            </a>
            <ul>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
            </ul>
          </div>
          <MobileNav />
          <div className="btn-container">
            <a>Login</a>
            <a>Signup</a>
          </div>
        </nav>
      </header>
      <main>
        <HeroSection />
        <FormSection />
        <StatSection />
        <BoostSection />
        <Footer />
      </main>

      {/*  a link here... Shorten It! Advanced
        Features Link Shortening Branded Links Analytics Resources Blog
      Developers Support Company About Our Team Careers Contact
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="/">Your Name Here</a>.
      </div> */}
    </>
  );
};

export default App;
