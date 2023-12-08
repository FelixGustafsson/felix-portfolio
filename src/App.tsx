import About from "./components/about/About";
import Navigation from "./components/navigation/Navigation";
import SocialIcons from "./components/socials/SocialIcons";
import Title from "./components/title/Title";
import AnimatedCursor from "react-animated-cursor";

import "./App.styles.scss";
import ExperienceList from "./components/list/ExperienceList";
import WebsiteSummary from "./components/websiteSummary/WebsiteSummary";
import TechStackGrid from "./components/techstack/TechStackGrid";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={13}
        outerSize={25}
        color="0, 60, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={7}
        clickables={["a", "button"]}
      />
      <main className="main-container">
        <div className="info-container">
          <Title />
          <div className="navigation">
            <Navigation />
          </div>
          <div className="socials">
            <SocialIcons />
          </div>
        </div>
        <div className="resume-container">
          <div id="about">
            <About />
          </div>
          <div className="experience-list" id="experience">
            <ExperienceList />
          </div>
          <div>
            <TechStackGrid />
          </div>
          <div className="summary" id="projects">
            <WebsiteSummary />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
