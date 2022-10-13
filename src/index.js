import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import ClassChanger from "./react-components/ClassChanger.js"

import 'swiper/css';
import 'swiper/css/pagination';

import "./css/tailwind/tailwind.css"
import "./index.sass";

import firstImage from "./assets/images/subject_1.png"
import secondImage from "./assets/images/subject_2.png"
import thirdImage from "./assets/images/subject_3.png"

import { IconContext } from "react-icons";
import { Fab } from 'konsta/react';
import { FiPhoneCall } from 'react-icons/fi';


const Gallery = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={5}
      loop
      pagination={
        {
          el: '.pagination-wrapper',
          clickable: true,
        }
      }
      centeredSlides
      slidesPerView={3.4}
      className={".swiper"}
    >
      <SwiperSlide>
        {({ isActive }) => (
          <img className={isActive ? "rounded-xl border-2 border-blue-500" : ""} src={firstImage} />
        )}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => (
          <img className={isActive ? "rounded-xl border-2 border-blue-500" : ""} src={secondImage} />
        )}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => (
          <img className={isActive ? "rounded-xl border-2 border-blue-500" : ""} src={thirdImage} />
        )}
      </SwiperSlide>

    </Swiper>
  );
}

const root = ReactDOMClient.createRoot(
  document.getElementById('react-root-carousel')
);
root.render(Gallery());

const classChangerRoot = ReactDOMClient.createRoot(
  document.getElementById("react-root-class")
);
classChangerRoot.render(<ClassChanger currentclass={8} />);

const fabRoot = ReactDOMClient.createRoot(
  document.getElementById("react-root-fab")
);
fabRoot.render(<Fab
  colors={{
    bgMaterial: "bg-sky-200",
    touchRipple: "bg-sky-200"
  }}
  href="tel:+73433021854"
  material
  className="animate-bounce fixed right-4-safe bottom-4-safe z-20"
  icon={<IconContext.Provider value={{ color: "#4b5563"}}>
    <div>
      <FiPhoneCall />
    </div>
  </IconContext.Provider>}
/>)

