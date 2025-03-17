import { statCards } from "../constants";
import "../styles/StatSection.css";
import Card from "./Card";

const StatSection = () => {
  return (
    <section className="stat-section">
      <div className="stat-container">
        <div className="stat-header">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.{" "}
          </p>
        </div>
        <div className="stat-cards-container">
          {statCards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              image={card.img}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;
