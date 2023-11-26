import React from "react";
import {CustomBootstrapButton} from '../../Common/MuiStyles/Styles'
import './ExploreMovies.css'

const ExploreMovies = () => {
    const BootstrapButton = CustomBootstrapButton()
      
  return (
    <section className="d-flex justify-content-center explore-movies-container">
      <BootstrapButton variant="contained">Explore Movies</BootstrapButton>

    </section>
  );
};

export default ExploreMovies;
