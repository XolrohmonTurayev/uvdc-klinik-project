import React from "react";

const DefaultBtn = ({ text, alignment, classList, click }) => {
  return (
    <div
      onClick={click}
      className={`default-btn font-poppins font-semibold cursor-pointer text-[15px] lg:text-[18px] text-center text-white  rounded-full lg:py-[10px] py-[8px] px-[20px] flex-custom   text-${alignment} ${classList}`}
    >
      {text}
    </div>
  );
};

export default DefaultBtn;
