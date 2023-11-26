import React, { useState, useEffect } from "react";
import CarouselBody from './CarouselBody'
import Data from "../../Utils/Data.json";

const CarouselContainer = () => {
  const [carouselData, setCarouselData] = useState();
  useEffect(() => {
    getCarouselData();
  }, [carouselData]);
  const getCarouselData = () => {
    setCarouselData(Data);
  };
  return (
    <main>
      <ul className="nav_list flex-col">
        {carouselData &&
          carouselData.titles.map((carouselDetail) => (
            <li
              className={
                carouselDetail.moduleId !== "101.692170.1597914000050"
                  ? "ml-4"
                  : ""
              }
              key={carouselDetail.moduleId}
            >
             
                  <CarouselBody {...carouselDetail} />
               
            </li>
          ))}
      </ul>
    </main>
    
  );
};
export default CarouselContainer;
