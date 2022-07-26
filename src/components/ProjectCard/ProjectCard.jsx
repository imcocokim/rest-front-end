import styles from './ProjectCard.module.css'

const ProjectCard = ({projects, user}) => {
  console.log(projects)
  return ( 
    
    <div className={styles.projectCard}>
      {/* {user?.profile === } */}
      {projects.map(project => 
        project.title 
      )}
    </div>
  );
}

export default ProjectCard;