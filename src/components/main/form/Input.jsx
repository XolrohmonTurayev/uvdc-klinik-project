import React from "react";

const Input = ({ id, place, func }) => {
  const handleChange = () => {
  
    
  };
  return (
    <input
      className=" mb-2 md:mb-6 contact-input w-full px-3 py-2 md:py-3 border-[1px] rounded-[8px] md:rounded-[14px] border-borderColor font-poppins font-normal text-sm md:text-lg"
      type="text"
      id={id}
      name={id}
      onChange={func}
      placeholder={place}
    />
  );
};

export default Input;
