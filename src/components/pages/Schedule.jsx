import React from "react";
import CheckboxComponent from "../Checkbox";
import { weekdays } from "../../helper";
import MiniCalendar from "../DatePicker";

const Schedule = () => {
  return (
    <div className="mt-3 ml-5 flex justify-between">
      <div className="flex-col w-40">
        <h1 className="text-2xl font-semibold mb-3">Schedules</h1>
        <h2 className="text-lg font-semibold mb-3">Default</h2>
        {weekdays.map((day) => {
          return <CheckboxComponent day={day} />;
        })}
      </div>
      <MiniCalendar />
    </div>
  );
};

export default Schedule;
