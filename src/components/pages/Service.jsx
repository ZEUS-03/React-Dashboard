import React, { useState } from "react";
import logoImage from "../../assets/Untitled.png";

const Service = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6  mt-3 ml-5">Services</h1>

      <div className="mt-3 ml-5 flex ">
        <button
          className={`bg-[#047e70] px-8 py-2 text-md text-white font-semibold text-center mx-4 rounded-2xl ${
            activeButton === 1 ? "active bg-[#047e70]" : "bg-gray-500"
          }`}
          onClick={() => handleButtonClick(1)}
        >
          1:1 Call
        </button>
        <button
          className={`bg-[#047e70] px-8 py-2 text-md text-white font-semibold text-center mx-4 rounded-2xl ${
            activeButton === 2 ? "active bg-[#047e70]" : "bg-gray-500"
          }`}
          onClick={() => handleButtonClick(2)}
        >
          Text Query
        </button>
        <button
          className={`bg-[#047e70] mx-4 px-8 py-2 text-md text-white font-semibold text-center rounded-2xl ${
            activeButton === 3 ? "active bg-[#047e70]" : "bg-gray-500"
          }`}
          onClick={() => handleButtonClick(3)}
        >
          Webinar
        </button>
        <button
          className={` px-8 mx-4 py-2 text-md text-white font-semibold text-center rounded-2xl ${
            activeButton === 4 ? "active bg-[#047e70]" : "bg-gray-500"
          }`}
          onClick={() => handleButtonClick(4)}
        >
          + Add services
        </button>
      </div>
      <div className="flex justify-center w-[750px] mt-4">
        <img src={logoImage} className="w-[300px] mb-4" alt="Logo" />
      </div>
      <div className="flex justify-center w-[750px] mt-4">
        <button
          src={logoImage}
          className="mb-4 px-8 mx-4 py-2 bg-[#047e70] text-md text-white font-semibold text-center rounded-2xl"
          alt="Logo"
        >
          + Add
        </button>
      </div>
    </div>
  );
};

export default Service;
