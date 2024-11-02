// Loader.js
import React, { useContext, useEffect, useState } from "react";

const Loader = () => {
  const [loader, setLoader] = useState(true);
  const changeLoader = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };
  useEffect(() => {
    changeLoader();
  }, []);
  return (
    loader && (
      <div className="fixed top-0 z-[100000] bottom-0 left-0 right-0 flex items-center justify-center bg-white">
        <div className="spinner"></div>
      </div>
    )
  );
};

export default Loader;
