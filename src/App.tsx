import About from "./components/about/About";
import Navigation from "./components/navigation/Navigation";
import SocialIcons from "./components/socials/SocialIcons";
import Title from "./components/title/Title";
import AnimatedCursor from "react-animated-cursor";

import "./App.styles.scss";
import ExperienceList from "./components/list/ExperienceList";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={13}
        outerSize={25}
        color="0, 60, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={10}
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
          <About />
          <div className="experience-list">
            <ExperienceList />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
