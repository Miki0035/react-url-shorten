import { useState } from "react";
import "../styles/FormSection.css";

const FormSection = () => {
  const [linkText, setLinkText] = useState("");
  const [shortenedLink, setShortenedLink] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (linkText === "") {
      setError("Please add a link");
      setLinkText("");
      return;
    }
    setShortenedLink((prevState) => [...prevState, shortenUrl()]);
    setError("");
  };

  function shortenUrl() {
    const shortKey = generateShortKey();
    const shortUrl = `https://rel.ink/${shortKey}`;
    return shortUrl;
  }

  function generateShortKey() {
    return crypto.getRandomValues(new Uint32Array(1))[0].toString(36);
  }

  function copyToClipBoard(index: number, e: React.MouseEvent) {
    // Change Text , Background Color of Button to Copied
    (e.target as HTMLButtonElement).textContent = "Copied!";
    (e.target as HTMLButtonElement).style.backgroundColor = "hsl(260, 8%, 14%)";


    const copyText = document.querySelector(`.link-${index}`);
    navigator.clipboard.writeText(copyText!.textContent!);
  }
  return (
    <section className="form-section">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              style={{
                borderColor: error !== "" ? "hsl(0, 87%, 67%)" : "",
                borderWidth: error !== "" ? "3px " : "",
              }}
              type="text"
              name="text"
              id="text"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              placeholder="Shorten a link here..."
            />
            {error !== "" && <span className="error-message">{error}</span>}
          </div>
          <div className="form-btn-container">
            <button type="submit">Shorten It!</button>
          </div>
        </form>
      </div>
      {shortenedLink.length > 0 &&
        shortenedLink.map((link, index) => (
          <div key={index} className="shortened-link-container">
            <div className="original-link">{linkText}</div>
            <div className="shortened-link">
              <p className={`link-${index}`}>{link}</p>
              <button onClick={(e) => copyToClipBoard(index, e)}>copy</button>
            </div>
          </div>
        ))}
    </section>
  );
};

export default FormSection;
