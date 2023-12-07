import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <div>
      <div className="link-container">
        <div className="straight-line"></div>
        <a className="link" href="about">
          ABOUT
        </a>
      </div>
      <div className="link-container">
        <div className="straight-line"></div>
        <a className="link" href="#experience">
          EXPERIENCE
        </a>
      </div>
      <div className="link-container">
        <div className="straight-line"></div>
        <a className="link" href="#projects">
          PROJECTS
        </a>
      </div>
    </div>
  );
};

export default Navigation;
