import React, { memo } from "react";

const CustomSlide = ({
  index,
  authorImg,
  featuredImg,
  name,
  tokenNumber,
  collectionId,
}) => {
  return (
    <div className="itm" index={index}>
      <div className="nft_coll">
        <div className="nft_wrap">
          <span>
            <img src={featuredImg} className="lazy img-fluid" alt="" />
          </span>
        </div>
        <div className="nft_coll_pp">
          <span
            onClick={() => window.open("/colection/" + collectionId, "_self")}
          >
            <img className="lazy" src={authorImg} alt="" />
          </span>
          <i className="fa fa-check"></i>
        </div>
        <div className="nft_coll_info">
          <span
            onClick={() => window.open("/colection/" + collectionId, "_self")}
          >
            <h4>{name}</h4>
          </span>
          <span>{tokenNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(CustomSlide);
