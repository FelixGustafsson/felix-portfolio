import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import './socialicons.styles.scss'

const SocialIcons = () => {
    return (
        <div className="icons-container">
            <FaGithub className='icon' />
            <FaInstagram className='icon' />
            <FaLinkedin className='icon' />
        </div>
    )
}

export default SocialIcons