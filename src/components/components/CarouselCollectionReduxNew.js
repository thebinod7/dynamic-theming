import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settingsnew } from "./constants";
import CustomSlide from "./CustomSlide";

const CarouselCollectionRedux = () => {
  const featured_nfts = [
    {
      authorImg: "/img/author/author-1.jpg",
      featuredImg: "/img/collections/coll-3.jpg",
      name: "Bored Ape",
      tokenNumber: "#101",
      collectionId: 201,
    },
    {
      authorImg: "/img/author/author-1.jpg",
      featuredImg: "/img/collections/coll-3.jpg",
      name: "Bored Ape",
      tokenNumber: "#102",
      collectionId: 202,
    },
    {
      authorImg: "/img/author/author-1.jpg",
      featuredImg: "/img/collections/coll-3.jpg",
      name: "Bored Ape",
      tokenNumber: "#103",
      collectionId: 203,
    },
  ];

  return (
    <div className="nft">
      <Slider {...settingsnew}>
        {featured_nfts &&
          featured_nfts.map((item, index) => (
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
