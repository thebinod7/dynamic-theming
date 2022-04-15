import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./constants";
import { navigate } from "@reach/router";

const SliderCarouselRedux = ({ featured_nfts }) => {
  const navigateTo = (link) => {
    navigate(link);
  };

  return (
    <div className="nft-big">
      <Slider {...settings}>
        {featured_nfts &&
          featured_nfts.map((nft, index) => (
            <div
              onClick={() => navigateTo(nft.price)}
              className="itm"
              index={index + 1}
              key={index}
            >
              <div className="nft_pic">
                <span>
                  <span className="nft_pic_info">
                    <span className="nft_pic_title">{nft.title}</span>
                    <span className="nft_pic_by">{nft.title}</span>
                  </span>
                </span>
                <div className="nft_pic_wrap">
                  <img
                    src="/img/collections/coll-1.jpg"
                    className="lazy img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default memo(SliderCarouselRedux);
