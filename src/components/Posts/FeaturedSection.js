import React, { useState } from "react";
import { Swiper } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";

import "swiper/swiper-bundle.min.css";
import "./FeaturedSection.css";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

function FeaturedSection(props) {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", (e) => {
    setWindowWidth(e.target.innerWidth);
  });

  if (windowWidth >= 800) {
    return (
      <Swiper
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      >
        {props.children}
      </Swiper>
    );
  } else {
    return <div className="vertical-featured-posts">{props.children}</div>;
  }
}

export default FeaturedSection;
