import React from "react";
import "./App.css";
import MainTitle from "./components/MainTitle";

const App: React.FC = () => {
  const experiencesUrl = "https://course-api.com/react-tabs-project";

  return (
    <div className="App">
      <MainTitle title="CV Tabs" barColor="#2caeba" />
    </div>
  );
};

export default App;
