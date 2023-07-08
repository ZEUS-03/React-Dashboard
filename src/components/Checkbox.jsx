import React, { useState } from "react";
import { Checkbox } from "antd";

const CheckboxComponent = ({ day }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="shadow-lg rounded-md px-7 py-4 text-md font-bold text-md mb-1 w-64 flex justify-between">
      <Checkbox checked={checked} onChange={handleCheckboxChange}>
        {day}
      </Checkbox>
      <span className="font-normal text-right"> Unavailable</span>
    </div>
  );
};

export default CheckboxComponent;
