import React, { memo, useState } from "react";
import NftCard from "./NftCard";

//react functional component
const ColumnNewRedux = () => {
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
    <div className="row">
      {nfts &&
        nfts.map((nft, index) => (
          <NftCard
            nft={nft}
            key={index}
            onImgLoad={onImgLoad}
            height={height}
          />
        ))}
    </div>
  );
};

export default memo(ColumnNewRedux);
