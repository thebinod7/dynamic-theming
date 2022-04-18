import React from "react";

import DefaultHome from "../../components/pages/home";
import HomeOne from "../../components/pages/home_one";
import HomeFour from "../../components/pages/home4";
import { LAYOUT_CONFIG, MOCK_DATA } from "../../config";

export default function Index() {
  const card_info = [];

  return (
    <>
      {LAYOUT_CONFIG.HOME_LAYOUT === "Default" && (
        <DefaultHome
          featured_nfts={MOCK_DATA.FEATURED_NFTS}
          new_nfts={MOCK_DATA.NEW_NFTS}
          card_info={card_info}
        />
      )}
      {LAYOUT_CONFIG.HOME_LAYOUT === "Home_One" && (
        <HomeOne
          featured_nfts={MOCK_DATA.FEATURED_NFTS}
          new_nfts={MOCK_DATA.NEW_NFTS}
          card_info={card_info}
        />
      )}
      {LAYOUT_CONFIG.HOME_LAYOUT === "Home_Four" && (
        <HomeFour
          featured_nfts={MOCK_DATA.FEATURED_NFTS}
          new_nfts={MOCK_DATA.NEW_NFTS}
          card_info={card_info}
        />
      )}
    </>
  );
}
