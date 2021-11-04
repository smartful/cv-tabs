import React from "react";

export interface MainTitleProps {
  title: string;
  barColor: string;
}

const MainTitle: React.FC<MainTitleProps> = ({ title, barColor }) => {
  const titleStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const barStyle: React.CSSProperties = {
    width: "4rem",
    height: "0.4rem",
    backgroundColor: barColor,
    marginTop: "0.2rem",
  };

  return (
    <div style={titleStyle}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.2rem" }}>{title}</h1>
      <div style={barStyle}></div>
    </div>
  );
};

export default MainTitle;
