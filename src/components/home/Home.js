import React, { useState } from "react";
import { Link } from "react-router-dom";
import generate from "../../utils/pdf";
import classes from "./Home.module.css";

const Home = () => {
  const [data, setData] = useState({
    site_name: "Alexander House", // e.g. "Alexander House"
    reporter: "Antonio Caiazzo", // e.g. "Antonio Caiazzo"
    created: new Date(2022, 1, 3, 10, 30), // e.g. new Date(2022, 1, 3, 10, 30)
    from: new Date(2022, 0, 1), // e.g. new Date(2022, 0, 1)
    to: new Date(2022, 0, 31), // e.g. new Date(2022, 0, 31)
    ratings_by_level: {
      good: { label: "Excellent", co2: 2 }, // e.g. "Excellent", co2: 8
      moderate: { label: "Moderate", pm: 2, voc: 1 }, // e.g. "Moderate", pm: 2, voc: 1
      high: { label: "Poor", pm: 2 }, // e.g. "Poor", pm: 2
    },
  });

  /* Function for calling and generating pdf */
  const handleGeneratePdf = () => {
    generate(data);
  };

  return (
    <div className={classes.home}>
      <div className={classes.home__inner}>
        <h1 className={classes.home__title}>Generate report</h1>
        <button onClick={handleGeneratePdf} className={classes.home__button}>
          Generate pdf
        </button>
        <span className={classes.home__span}>or</span>
        <Link to="/form">Enter new data</Link>
      </div>
    </div>
  );
};

export default Home;
