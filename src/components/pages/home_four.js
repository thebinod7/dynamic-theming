import React from "react";
import SliderCarouselRedux from "../components/SliderCarouselRedux";
import FeatureBox from "../components/FeatureBox";
import CarouselCollectionRedux from "../components/CarouselCollectionRedux";
import ColumnNewRedux from "../components/ColumnNewRedux";
import Footer from "../components/footer";

//IMPORT DYNAMIC STYLED COMPONENT
import { StyledHeader } from "../Styles";
//SWITCH VARIABLE FOR PAGE STYLE
const theme = "LIGHT"; //LIGHT, GREY, RETRO

const homethree = ({ featured_nfts, new_nfts }) => (
  <div className="greyscheme">
    <StyledHeader theme={theme} />
    <section className="jumbotron no-bg no-bottom">
      <div className="container-fluid">
        <div className="row">
          <SliderCarouselRedux featured_nfts={featured_nfts} />
        </div>
      </div>
    </section>

    <section className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="style-2">New Items</h2>
        </div>
      </div>
      <ColumnNewRedux featured_nfts={featured_nfts} />
    </section>

    <section className="container no-top">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="style-2">Hot Collections</h2>
        </div>
      </div>
      <div className="container no-top">
        <div className="row">
          <div className="col-lg-12 px-0">
            <CarouselCollectionRedux />
          </div>
        </div>
      </div>
    </section>

    <section className="container no-top">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="style-2">Create and sell</h2>
        </div>
      </div>
      <div className="container px-0">
        <FeatureBox />
      </div>
    </section>

    <Footer />
  </div>
);
export default homethree;
