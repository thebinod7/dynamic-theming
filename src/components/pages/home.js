import React from "react";
import SliderMain from "../components/SliderMain";
import FeatureBox from "../components/FeatureBox";
import NewNFTs from "../components/CarouselNewRedux";
import Footer from "../components/footer";

const home = ({ new_nfts, featured_nfts }) => (
  <div>
    <section
      className="jumbotron breadcumb no-bg h-vh"
      style={{ backgroundImage: `url(${"./img/bg-shape-1.jpg"})` }}
    >
      <SliderMain />
    </section>

    <section className="container no-top no-bottom">
      <FeatureBox featured_nfts={featured_nfts} />
    </section>

    <section className="container no-bottom">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center">
            <h2>New Items</h2>
            <div className="small-border"></div>
          </div>
        </div>
        <div className="col-lg-12">
          <NewNFTs new_nfts={new_nfts} />
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
export default home;
