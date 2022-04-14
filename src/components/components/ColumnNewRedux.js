import React, { memo, useState } from "react";
import NftCard from "./NftCard";

const ColumnNewRedux = ({ featured_nfts }) => {
  const [height, setHeight] = useState(0);

  const onImgLoad = ({ target: img }) => {
    let currentHeight = height;
    if (currentHeight < img.offsetHeight) {
      setHeight(img.offsetHeight);
    }
  };

  return (
    <div className="row">
      {featured_nfts &&
        featured_nfts.map((nft, index) => (
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
