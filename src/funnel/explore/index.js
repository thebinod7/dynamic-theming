import React from "react";

import Explore1 from "../../components/pages/explore";
import Explore2 from "../../components/pages/explore2";
import { LAYOUT_CONFIG } from "../../config";

export default function Index() {
  return (
    <>
      {LAYOUT_CONFIG.EXPLORE_LAYOUT === "Default" && <Explore1 />}
      {LAYOUT_CONFIG.EXPLORE_LAYOUT === "Layout_Two" && <Explore2 />}
    </>
  );
}
