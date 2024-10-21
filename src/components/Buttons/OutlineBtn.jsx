import React from "react";

const OutlineBtn = ({ text, alignment, classList, click }) => {
  return (
    <div onClick={click} className={` border border-main font-poppins font-semibold cursor-pointer text-[15px] lg:text-[18px] text-center text-main  rounded-full lg:py-[10px] py-[8px] px-[20px] flex-custom    text-${alignment} ${classList}`}>
      {text}
    </div>
  );
};

export default OutlineBtn;
