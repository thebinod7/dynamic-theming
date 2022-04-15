import React, { memo, useState } from "react";
import NftCard from "./NftCard";

const ColumnNewThreeColRedux = () => {
  const [height, setHeight] = useState(0);

  const onImgLoad = ({ target: img }) => {
    let currentHeight = height;
    if (currentHeight < img.offsetHeight) {
      setHeight(img.offsetHeight);
    }
  };

  const nftList = [
    {
      id: 1,
      title: "Bored apes",
      price: "1.3",
      featuredImg: "/img/collections/coll-2.jpg",
      likes: 4,
    },
    {
      id: 1,
      title: "Bored apes",
      price: "1.4",
      featuredImg: "/img/collections/coll-2.jpg",
      likes: 5,
    },
    {
      id: 1,
      title: "Bored apes",
      price: "0.4",
      featuredImg: "/img/collections/coll-2.jpg",
      likes: 7,
    },
  ];

  return (
    <div className="row">
      {nftList &&
        nftList.map((nft, index) => (
          <NftCard
            nft={nft}
            key={index}
            onImgLoad={onImgLoad}
            height={height}
            className="d-item col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4"
          />
        ))}
    </div>
  );
};

export default memo(ColumnNewThreeColRedux);
