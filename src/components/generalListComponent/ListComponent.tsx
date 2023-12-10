import { MdArrowOutward } from "react-icons/md";
import "./listComponent.styles.scss";

interface Data {
  type: string;
  title: string;
  location?: string;
  description: string;
  imageURL?: string;
  projectURL?: string;
  tags: string[];
  dates?: string;
}
interface Props {
  data: Data;
}

const ListComponent = ({ data }: Props) => {
  if (data.type === "project") {
    return (
      <a href={data.projectURL} target="_blank">
        <div className="project-container">
          <img src={data.imageURL} alt={data.title + " Image"} />
          <div>
            <h2>
              {data.title}
              <span>
                <MdArrowOutward />
              </span>
            </h2>
            <p className="paragraph">{data.description}</p>
            <div className="tags-container">
              {data.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    );
  } else {
    return (
      <div className="experience-container">
        <div className="dates">{data.dates}</div>
        <div className="experience-info-container">
          <h2>{data.title}</h2>
          <p className="paragraph">{data.location}</p>
          <p className="paragraph">{data.description}</p>
          <div className="tags-container">
            {data.tags.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default ListComponent;
