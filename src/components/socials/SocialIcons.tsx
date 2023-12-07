import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./socialicons.styles.scss";

const SocialIcons = () => {
  return (
    <>
      <div className="icons-container">
        <FaGithub className="icon" />
        <FaInstagram className="icon" />
        <FaLinkedin className="icon" />
      </div>
      <div className="contact">
        Email: felixgustafssong@gmail.com
        <br />
        Phone: +46733461297
      </div>
    </>
  );
};

export default SocialIcons;
