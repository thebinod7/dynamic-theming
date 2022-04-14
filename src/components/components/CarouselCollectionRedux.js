import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./constants";
import CustomSlide from "./CustomSlide";

const CarouselCollectionRedux = ({ new_nfts }) => {
  return (
    <div className="nft">
      <Slider {...settings}>
        {new_nfts &&
          new_nfts.map((item, index) => (
            <CustomSlide
              key={index}
              index={index + 1}
              authorImg={item.authorImg}
              featuredImg={item.featuredImg}
              name={item.name}
              tokenNumber={item.tokenNumber}
              collectionId={item.collectionId}
            />
          ))}
      </Slider>
    </div>
  );
};

export default memo(CarouselCollectionRedux);
