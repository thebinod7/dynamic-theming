import React from "react";

import LoginOne from "../../components/pages/login";
import LoginTwo from "../../components/pages/login2";
import { LAYOUT_CONFIG } from "../../config";

export default function Index() {
  return (
    <>
      {LAYOUT_CONFIG.LOGIN_LAYOUT === "Default" && <LoginOne />}
      {LAYOUT_CONFIG.LOGIN_LAYOUT === "Layout_Two" && <LoginTwo />}
    </>
  );
}
