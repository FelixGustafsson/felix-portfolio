import Project from "./Project";
import { projects } from '../../data/projects';

const ProjectsList = () => {
    return (
        <div>
            {projects.map((currentProject) => (
                <Project project={currentProject} />
            ))}
        </div>
    )
}

export default ProjectsList