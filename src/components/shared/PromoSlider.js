import React from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Pagination, Autoplay, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles } from '@material-ui/core/styles'
// import useStyles from "./style";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import Banner from "assets/images/promo-banner.png";


const useStyles = makeStyles( theme => ({
    promoWrapper: {
        "& .swiper-pagination": {
            bottom: 16,
        },
        "&& .swiper-pagination-bullet": {
            background: '#fff',
            opacity: 0.4,

            "&.swiper-pagination-bullet-active": {
                opacity: 1,
            },
        },
    },
    promoImage: {
        // borderRadius: 8,
        width:"100%"
    }, 
}))

export default function PromoSlider() {
  const classes = useStyles();

  const promos = [
    { source: Banner, alt: "Banner-images", uri: "" },
    { source: Banner, alt: "Banner-images", uri: "" },
    { source: Banner, alt: "Banner-images", uri: "" },
    { source: Banner, alt: "Banner-images", uri: "" },
    { source: Banner, alt: "Banner-images", uri: "" },
    { source: Banner, alt: "Banner-images", uri: "" },
  ];

  SwiperCore.use([Pagination, Autoplay, Mousewheel]);

  return (
    <Swiper
      className={classes.promoWrapper}
      pagination={{ clickable: true }}
      loop={true}
      // spaceBetween={10}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      mousewheel
    >
      {promos.map((promo, index) => (
        <SwiperSlide key={index}>
          <Link to={promo.uri}>
            <img
              src={promo.source}
              alt={promo.alt}
              className={classes.promoImage}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}