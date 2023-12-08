import "./techstack.styles.scss";
import { IconContext } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaWordpress,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TbDatabaseSearch, TbSeo } from "react-icons/tb";

const TechStackGrid = () => {
  return (
    <>
      <h2 className="subheading" style={{ paddingBottom: "1rem" }}>
        Tech stack
      </h2>
      <div className="tech-stack-grid">
        <IconContext.Provider value={{ className: "icons", size: "30" }}>
          <FaHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <SiTypescript />
          <FaReact />
          <FaNodeJs />
          <FaPython />
          <FaGitAlt />
          <FaDocker />
          <FaWordpress />
          <TbSeo />
          <TbDatabaseSearch />
        </IconContext.Provider>
      </div>
    </>
  );
};

export default TechStackGrid;
