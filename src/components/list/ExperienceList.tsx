import { data } from "../../data/projects";
import ListComponent from "../generalListComponent/ListComponent";

const ExperienceList = () => {
  return (
    <div>
      {data.map((object) => (
        <ListComponent data={object} />
      ))}
    </div>
  );
};

export default ExperienceList;
