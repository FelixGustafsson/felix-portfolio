import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <div>
      <div className="link-container">
        <div className="straight-line"></div>
        <a className="link">ABOUT</a>
      </div>
      <div className="link-container">
        <div className="straight-line"></div>
        <a className="link">EXPERIENCE</a>
      </div>
      <div className="link-container">
        <div className="straight-line"></div>
        <a className="link" href="project-container">
          PROJECTS
        </a>
      </div>
    </div>
  );
};

export default Navigation;
