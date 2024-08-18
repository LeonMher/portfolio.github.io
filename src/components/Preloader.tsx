import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/index";

export const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Parner,</span>
        <span>Friend.</span>
      </div>
    </div>
  );
};
