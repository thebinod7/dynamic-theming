import React, { memo } from "react";

const CheckboxFilter = () => {
  return (
    <>
      <div className="item_filter_group">
        <h4>Select Categories</h4>
        <div className="de_form"></div>
      </div>

      <div className="item_filter_group">
        <h4>Collections</h4>
        <div className="de_form"></div>
      </div>
    </>
  );
};

export default memo(CheckboxFilter);
