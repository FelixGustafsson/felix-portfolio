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
  FaVuejs
} from 'react-icons/fa';
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5';
import {
  SiTypescript,
  SiMysql,
  SiAdobephotoshop,
  SiMongodb,
  SiPrisma,
  SiPostgresql
} from 'react-icons/si';
import { TbDatabaseSearch, TbSeo, TbSql, TbBrandCypress } from 'react-icons/tb';
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
          <FaPython />
          <FaNodeJs />
          <FaReact />
          <FaVuejs />
          <TbSql />
          <FaGitAlt />
          <FaGithub />
          <BsFiletypeJson />
          <FaDocker />
          <TbBrandCypress />
          <TbDatabaseSearch />
          <IoLogoFirebase />
          <SiMysql />
          <SiMongodb />
          <SiPostgresql />
          <SiPrisma />
          <FaFigma />
          <TbSeo />
          <FaWordpress />
          <SiAdobephotoshop />
        </IconContext.Provider>
      </div>
    </>
  );
};

export default TechStackGrid;
