import logo from "./assets/images/logo.svg";
import "./App.css";
import { FormSection, HeroSection, MobileNav, StatSection } from "./components";
const App = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo-container">
            <a href="#">
              <img src={logo} alt="shortly logo" />
            </a>
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
      </main>
      {/*  a link here... Shorten It! Advanced
      Statistics Brand Recognition Boost your brand
      recognition with each click. Generic links don’t mean a thing. Branded
      links help instil confidence in your content. Detailed Records Gain
      insights into who is clicking your links. Knowing when and where people
      engage with your content helps inform better decisions. Fully Customizable
      Improve brand awareness and content discoverability through customizable
      links, supercharging audience engagement. Boost your links today Get
      Started Features Link Shortening Branded Links Analytics Resources Blog
      Developers Support Company About Our Team Careers Contact
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </>
  );
};

export default App;
