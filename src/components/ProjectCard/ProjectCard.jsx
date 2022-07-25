const ProjectCard = ({projects}) => {
  return ( 
    <div>
      {projects.map(project => 
        project.title 
      )}
    </div>
  );
}

export default ProjectCard;