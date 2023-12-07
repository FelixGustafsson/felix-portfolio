import { data } from "../../data/projects";
import ListComponent from "../generalListComponent/ListComponent";
import { FaArrowRight } from "react-icons/fa6";
import "./experienceList.styles.scss";
import cv from "../../assets/Felix-Gustafsson-CV.pdf";

const ExperienceList = () => {
  return (
    <>
      <div>
        {data.map((object, i) => (
          <ListComponent key={i} data={object} />
        ))}
      </div>
      <div className="full-resume">
        <a href={cv} target="_blank">
          View full resumè
        </a>
        <div className="arrow">{<FaArrowRight />}</div>
      </div>
    </>
  );
};

export default ExperienceList;
