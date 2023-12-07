import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./socialicons.styles.scss";

const SocialIcons = () => {
  return (
    <>
      <div className="icons-container">
        <a href="https://github.com/FelixGustafsson" target="_blank">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.instagram.com/felix_gustafssonn/" target="_blank">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/felix-gustafsson/" target="_blank">
          <FaLinkedin className="icon" />
        </a>
      </div>
      <div className="contact">
        Email:{" "}
        <a href="mailto:felixgustafssong@gmail.com?">
          felixgustafssong@gmail.com
        </a>
        <br />
        Phone: +46733461297
      </div>
    </>
  );
};

export default SocialIcons;
