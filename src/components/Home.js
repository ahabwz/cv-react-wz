import React, { useState, useEffect } from "react";
import { homeData } from "../DataImport";
const Home = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
  }, [isDark]);
  return (
    <section className="home" id="home">
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          <img src={homeData.homeImage} className="home__img" alt="" />
          <h1 className="home__title">
            {homeData.homeTitle1} <b> {homeData.homeTitle2}</b>
          </h1>
          <h3 className="home__profession"> {homeData.homeProfession}</h3>

          { <div>
            <a href="../assets/CV.pdf" className="home__button-movil">
              Pobierz PDF
            </a>
          </div> }
        </div>
        <div className="home__address bd-grid">
          {homeData.homeInformation.map((data, i) => (
            <span className="home__information" key={i}>
              <i className={`home__icon bx ${data.icon}`} />
              {data.text}
            </span>
          ))}
        </div>
      </div>
      {/* Zmiana motywu */}
      <i
        onClick={() => setIsDark(!isDark)}
        className={`bx change-theme ${isDark ? "bx-sun" : "bx-moon"}`}
        title="Theme"
        id="theme-button"
      />
      {/* Generowanie PDF */}
      { <a
        className="generate-pdf"
        href="../assets/CV.pdf"
        target="_blank"
        download
        id="resume-button"
      >
        <i className="bx bx-download" title="Export PDF" />
      </a> }
    </section>
  );
};

export default Home;
