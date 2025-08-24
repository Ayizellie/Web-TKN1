import React from "react";
import { FaUserGraduate, FaChild, FaMedal } from "react-icons/fa";
import Sidebar from "../sidebaradmin/Sidebar";
const DaftarGaleri = () => {
const cards = [
    {title:"Murid", count: "110", label:"Murid Terdaftar", bgColor:"bg-[#F58CA2]", bgOpacity:"bg-opacity-50", icon: <FaChild className="text-2xl text-[#AC383D]" /> },
    {title:"Murid", count: "110", label:"Murid Terdaftar", bgColor:"bg-[#F4C7AB]", bgOpacity:"bg-opacity-50", icon: <FaMedal className="text-2xl text-[#BF8E34]" /> },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full bg-[#f8f8f8] min-h-screen">
        <div className="bg-white p-4 flex justify-between items-center mb-4 shadow-sm">
          <div className="flex items-center gap-2">
            <h1 className="text-md font-semibold text-gray-700">Admin1</h1>
          </div>
        </div>

        <div className="px-10 pb-2">
        <h1 className="text-xl font-medium text-[#064a8c]mb-2">Selamat Datang</h1>
        <p className="text-sm font-light text-[#047DD2]">Management Dashboard TK Negeri 1 Sangatta Utara</p>
      </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
            {cards.map((card, idx) => (
              <div key={idx} className={`rounded-2xl shadow-md p-5 ${card.bgColor}  ${card.bgOpacity} flex flex-col gap-2`}>
                <div className="font-bold text-black text-sm">{card.title}</div>
                <div className="font-normal text-black text-2xl flex items-center gap-13">{card.count} <span>{card.icon}</span></div>
                <div className="text-sm text-black">{card.label}</div>
              </div>
            ))}
          </div>
      </div>
      </div>  
  );
};
export default DaftarGaleri;