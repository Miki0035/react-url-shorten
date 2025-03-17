import { useState } from "react";
import "../styles/FormSection.css";

const FormSection = () => {
  const [linkText, setLinkText] = useState("");
  return (
    <section className="form-section">
      <div className="form-container">
        <form action="">
          <div className="input-container">
            <input
              type="text"
              name="text"
              id="text"
              onChange={(e) => setLinkText(e.target.value)}
              placeholder="Shorten a link here..."
            />
          </div>
          <div className="form-btn-container">
            <button type="submit">Shorten It!</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
