import React, { memo, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselNew5 } from "./constants";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const CarouselNewRedux = () => {
  const [height, setHeight] = useState(0);

  const onImgLoad = ({ target: img }) => {
    let currentHeight = height;
    if (currentHeight < img.offsetHeight) {
      setHeight(img.offsetHeight);
    }
  };

  const nfts = [
    {
      authorImg: "/img/author/author-1.jpg",
      featuredImg: "/img/collections/coll-1.jpg",
      name: "Bored Ape",
      tokenNumber: "#101",
      collectionId: 201,
      price: 1.2,
    },
    {
      authorImg: "/img/author/author-1.jpg",
      featuredImg: "/img/collections/coll-1.jpg",
      name: "Bored Ape",
      tokenNumber: "#102",
      collectionId: 202,
      price: 1.2,
    },
    {
      authorImg: "/img/author/author-1.jpg",
      featuredImg: "/img/collections/coll-1.jpg",
      name: "Bored Ape",
      tokenNumber: "#103",
      collectionId: 203,
      price: 1.5,
    },
  ];

  return (
    <div className="nft">
      <Slider {...carouselNew5}>
        {nfts &&
          nfts.map((nft, index) => (
            <div className="itm" index={index + 1} key={index}>
              <div className="d-item">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <span>
                      <img className="lazy" src={nft.authorImg} alt="" />
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                  <div
                    className="nft__item_wrap"
                    style={{ height: `${height}px` }}
                  >
                    <Outer>
                      <span>
                        <img
                          src={nft.featuredImg}
                          className="lazy nft__item_preview"
                          onLoad={onImgLoad}
                          alt=""
                        />
                      </span>
                    </Outer>
                  </div>
                  <div className="nft__item_info">
                    <span>
                      <h4>{nft.name}</h4>
                    </span>
                    <div className="nft__item_price">{nft.price} ETH</div>
                    <div className="nft__item_action">
                      <span>Buy Now</span>
                    </div>
                    <div className="nft__item_like"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default memo(CarouselNewRedux);
