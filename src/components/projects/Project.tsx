import { MdArrowOutward } from "react-icons/md";
import './project.styles.scss'

interface Project {
    title: string;
    description: string;
    imageURL: string;
    projectURL: string;
    tags: string[];
}
interface Props {
    project: Project;
}

const Project = ({ project }: Props) => {
    return (
        <div className="project-container">
            <img src={project.imageURL} alt={project.title + ' Image'} />
            <div>
                <h2>{project.title} <span><MdArrowOutward /></span></h2>
                <p className="paragraph">{project.description}</p>
                <div className="tags-container">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project