import React, { memo, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselNew } from "./constants";

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
      title: "Demo NFT",
      price: 1.2,
      likes: 2,
      bid: 2,
      max_bid: 4,
    },
    {
      title: "Demo NFT",
      price: 1.2,
      likes: 2,
      bid: 2,
      max_bid: 4,
    },
    {
      title: "Demo NFT",
      price: 1.2,
      likes: 2,
      bid: 2,
      max_bid: 4,
    },
  ];

  return (
    <div className="nft">
      <Slider {...carouselNew}>
        {nfts &&
          nfts.map((nft, index) => (
            <div className="itm" index={index + 1} key={index}>
              <div className="d-item">
                <div className="nft__item">
                  <div className="author_list_pp">
                    <span onClick={() => window.open("/home1", "_self")}>
                      <img
                        className="lazy"
                        src="/img/author/author-2.jpg"
                        alt=""
                      />
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
                          src="/img/collections/coll-6.jpg"
                          className="lazy nft__item_preview"
                          onLoad={onImgLoad}
                          alt=""
                        />
                      </span>
                    </Outer>
                  </div>
                  <div className="nft__item_info">
                    <span onClick={() => window.open("/#", "_self")}>
                      <h4>{nft.title}</h4>
                    </span>
                    <div className="nft__item_price">
                      {nft.price} ETH
                      <span>
                        {nft.bid}/{nft.max_bid}
                      </span>
                    </div>
                    <div className="nft__item_action">
                      <span>Place a bid</span>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>{nft.likes}</span>
                    </div>
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
