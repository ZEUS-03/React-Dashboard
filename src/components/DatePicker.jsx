import { Calendar, theme } from "antd";
import React from "react";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const MiniCalendar = () => {
  const { token } = theme.useToken();

  const wrapperStyle = {
    width: 350,
    height: 100,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={wrapperStyle} className="mr-20 mt-4">
      <Calendar
        className="shadow-lg text-center mt-14"
        style={{ backgroundColor: "#82d8cd", color: "#82d8cd" }}
        fullscreen={false}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};

export default MiniCalendar;
