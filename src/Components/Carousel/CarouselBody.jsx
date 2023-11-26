import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardImage from './CardImage'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import {swiperBreakPoints} from '../../Common/MuiStyles/Styles'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CarouselBody = (props) => {
  return (
    <>
      <div className="d-flex flex-col banner-container">
        <div className="d-flex banner-type">{props.title!=='Hero Banner'&&props.title}</div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={swiperBreakPoints(props)}
          className="mySwiper"
        >
          {props?.layoutTitles.titles.map(({ thumbnails }) => (
            <>
              <div className="d-flex">
                <SwiperSlide>
                  {Object.keys(thumbnails).map((keyName) => (
                    <CardImage thumbnails={thumbnails} keyName={keyName}/>
                  ))}
                </SwiperSlide>
                ...
              </div>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default CarouselBody;
