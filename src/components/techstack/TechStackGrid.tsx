import './techstack.styles.scss';
import { IconContext } from 'react-icons';
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaWordpress,
  FaReact,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5';
import { SiTypescript, SiMysql, SiAdobephotoshop } from 'react-icons/si';
import { TbDatabaseSearch, TbSeo, TbSql } from 'react-icons/tb';
import { BsFiletypeJson } from 'react-icons/bs';

const TechStackGrid = () => {
  return (
    <>
      <h2 className='subheading' style={{ paddingBottom: '1rem' }}>
        Tech stack
      </h2>
      <div className='tech-stack-grid'>
        <IconContext.Provider value={{ className: 'icons', size: '30' }}>
          <FaHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <SiTypescript />
          <FaReact />
          <FaNodeJs />
          <FaPython />
          <TbSql />
          <FaGitAlt />
          <FaGithub />
          <BsFiletypeJson />
          <FaDocker />
          <FaWordpress />
          <TbSeo />
          <TbDatabaseSearch />
          <IoLogoFirebase />
          <SiMysql />
          <FaFigma />
          <SiAdobephotoshop />
        </IconContext.Provider>
      </div>
    </>
  );
};

export default TechStackGrid;
