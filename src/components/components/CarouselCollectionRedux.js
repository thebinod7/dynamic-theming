import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./constants";
import CustomSlide from "./CustomSlide";

const CarouselCollectionRedux = () => {
  const hotCollections = [
    {
      avatar: "/img/author/author-1.jpg",
      banner: "/img/collections/coll-1.jpg",
      username: "John Doe",
      uniqueId: 101,
      collectionId: 201,
    },
    {
      avatar: "/img/author/author-1.jpg",
      banner: "/img/collections/coll-1.jpg",
      username: "John Doe",
      uniqueId: 102,
      collectionId: 202,
    },
    {
      avatar: "/img/author/author-1.jpg",
      banner: "/img/collections/coll-1.jpg",
      username: "John Doe",
      uniqueId: 103,
      collectionId: 203,
    },
  ];

  return (
    <div className="nft">
      <Slider {...settings}>
        {hotCollections &&
          hotCollections.map((item, index) => (
            <CustomSlide
              key={index}
              index={index + 1}
              avatar={item.avatar}
              banner={item.banner}
              username={item.username}
              uniqueId={item.uniqueId}
              collectionId={item.collectionId}
            />
          ))}
      </Slider>
    </div>
  );
};

export default memo(CarouselCollectionRedux);
