import React, { useState, useEffect } from "react";
import ExploreMovies from "../ExploreMovies/ExploreMovies";
import SkeletonHome from "../../Common/Skeletons/SkeletonHome";
import CarouselBody from "./CarouselBody";
import Data from "../../Utils/Data.json";
import { lazy, Suspense } from "react";

const LazyCarouselBody = lazy(() => import("./CarouselBody"));

const CarouselContainer = () => {
  const [carouselData, setCarouselData] = useState();
  useEffect(() => {
    getCarouselData();
  }, [carouselData]);
  const getCarouselData = () => {
    setCarouselData(Data);
  };
  return (
    <main className="main-container">
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
              <Suspense fallback={<SkeletonHome />}>
                <LazyCarouselBody {...carouselDetail} />
              </Suspense>
            </li>
          ))}
      </ul>
      <ExploreMovies />
    </main>
  );
};
export default CarouselContainer;
