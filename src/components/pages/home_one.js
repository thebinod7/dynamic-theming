import React from "react";
import Particle from "../components/Particle";
import SliderMainParticle from "../components/SliderMainParticle";
import FeatureBox from "../components/FeatureBox";
import NewNFTs from "../components/CarouselCollectionRedux";
import FeaturedNFTs from "../components/ColumnNewRedux";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: #fff;
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const homeone = ({ featured_nfts, new_nfts, card_info }) => (
  <div>
    <GlobalStyles />
    <section
      className="jumbotron no-bg"
      style={{ backgroundImage: `url(${"./img/background/2.jpg"})` }}
    >
      <Particle />
      <SliderMainParticle />
    </section>

    <section className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center">
            <h2>Featured Items</h2>
            <div className="small-border"></div>
          </div>
        </div>
      </div>

      <FeaturedNFTs featured_nfts={featured_nfts} />
    </section>

    <section className="container-fluid bg-gray">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center">
            <h2>New Items</h2>
            <div className="small-border"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <NewNFTs new_nfts={new_nfts} />
          </div>
        </div>
      </div>
    </section>

    <section className="container-fluid bg-gray">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center">
            <h2>Create and sell your NFTs</h2>
            <div className="small-border"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <FeatureBox />
      </div>
    </section>

    <Footer />
  </div>
);
export default homeone;
