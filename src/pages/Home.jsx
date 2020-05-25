import React from "react";

const Home = () => (
  <div className="Home">
    <div className="Home-container">
      <div className="Home-items">
        <div className="Pets">
          <div className="Pets-cover">
            <span>Emoji</span>
            <div className="Pets-type">Adopcion</div>
          </div>
          <div className="Pets-content">
            <div className="Pets-head">
              <h2>Nombre de la mascota</h2>
              <i>G</i>
            </div>
          </div>
          <div className="Pets-date">
            <i>Icono</i>
            <span>Fecha</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
