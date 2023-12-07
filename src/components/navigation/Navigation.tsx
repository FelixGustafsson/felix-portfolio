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
        <a className="link">PROJECTS</a>
      </div>
    </div>
  );
};

export default Navigation;
