import React, { useState, useEffect } from "react";
import "./App.css";
import MainTitle from "./components/MainTitle";

export interface IExperience {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

const App: React.FC = () => {
  const [experiences, setExperiences] = useState<IExperience[]>([]);
  const [index, setIndex] = useState(0);
  const experiencesUrl: string = "https://course-api.com/react-tabs-project";

  useEffect(() => {
    const getExperiences = async () => {
      const response = await fetch(experiencesUrl);
      const data = await response.json();
      setExperiences(data);
    };

    getExperiences();
  }, []);

  const styleContainer: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "2em",
    marginRight: "0.6em",
  };

  const styleBtnContainer: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "30%",
  };

  const styleExperienceContainer: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    textAlign: "left",
  };

  return (
    <div className="App">
      <MainTitle title="CV Tabs" barColor="#2caeba" />
      <div style={styleContainer}>
        <div style={styleBtnContainer}>
          {experiences.map((experience, idx) => (
            <div
              key={experience.id}
              className={`companyBtn ${idx === index ? "activeBtn" : ""}`}
              onClick={() => setIndex(idx)}
            >
              {experience.company}
            </div>
          ))}
        </div>
        {experiences[index] && (
          <div style={styleExperienceContainer}>
            <h2>{experiences[index].title}</h2>
            <h3>{experiences[index].company}</h3>
            <h4>{experiences[index].dates}</h4>
            <ul>
              {experiences[index].duties.map((duty, idx) => (
                <li key={idx}>{duty}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
