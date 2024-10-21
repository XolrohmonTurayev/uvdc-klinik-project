import React from "react";
import InputMask from "react-input-mask";
const InputNumber = ({ id, place, func }) => {


  return (
    <div className=" flex  gap-2 mb-2 md:mb-6 contact-input w-full px-3 py-2 md:py-3 border-[1px] rounded-[8px] md:rounded-[14px] border-borderColor font-poppins font-normal text-sm md:text-lg">
      <div className="span">+998</div>
      <InputMask
        mask="(99)-999-99-99"
        placeholder="(__)-___-__-__"
        className="outline-none input"
        onChange={func}
        name={id}
        id={id}        
      >
        {(inputProps) => <input {...inputProps} type="tel" />}
      </InputMask>
    </div>
  );
};

export default InputNumber;
