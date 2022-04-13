import React, { memo } from "react";
import Select from "react-select";
import { categories, status, itemsType } from "./constants/filters";

const TopFilterBar = () => {
  const defaultValue = {
    value: null,
    label: "Select Filter",
  };

  const customStyles = {
    option: (base, state) => ({
      ...base,
      background: "#fff",
      color: "#333",
      borderRadius: state.isFocused ? "0" : 0,
      "&:hover": {
        background: "#eee",
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
    }),
    control: (base, state) => ({
      ...base,
      padding: 2,
    }),
  };

  return (
    <div className="items_filter">
      <form
        className="row form-dark"
        id="form_quick_search"
        name="form_quick_search"
      >
        <div className="col">
          <input
            className="form-control"
            id="name_1"
            name="name_1"
            placeholder="search item here..."
            type="text"
          />
          <button id="btn-submit">
            <i className="fa fa-search bg-color-secondary"></i>
          </button>
          <div className="clearfix"></div>
        </div>
      </form>
      <div className="dropdownSelect one">
        <Select
          styles={customStyles}
          menuContainerStyle={{ zIndex: 999 }}
          options={[defaultValue, ...categories]}
        />
      </div>
      <div className="dropdownSelect two">
        <Select styles={customStyles} options={[defaultValue, ...status]} />
      </div>
      <div className="dropdownSelect three">
        <Select styles={customStyles} options={[defaultValue, ...itemsType]} />
      </div>
    </div>
  );
};

export default memo(TopFilterBar);
