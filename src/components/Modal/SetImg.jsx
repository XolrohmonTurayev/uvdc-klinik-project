import React, { useContext } from 'react'
import { ModalUser } from '../../context/ModalContext';

const SetImg = ({img}) => {
    const { openImgModal } = useContext(ModalUser);
  return (
    <div
    className="
    absolute top-0 left-0 right-0 bottom-0 bg-[#2222225c] opacity-0 group-hover:opacity-100
    flex justify-center items-center transition-opacity duration-300
  "
  >
    <div
      onClick={() => openImgModal(img)}
      className="
      bg-[#2222225c] cursor-pointer hover:bg-[#047857] text-white absolute rounded-[10px] text-[20px]
      flex justify-center items-center h-[50px] w-[50px] border border-[#ffffff26] z-50
      transition-transform duration-500
      group-hover:translate-y-0 group-hover:opacity-100
      opacity-0 translate-y-5
    "
    >
      <i className="fa-solid fa-magnifying-glass-plus"></i>
    </div>
  </div>
  )
}

export default SetImg