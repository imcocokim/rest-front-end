import styles from './ProjectCard.module.css'

const ProjectCard = ({projects}) => {
  console.log(projects)
  return ( 
    <div className={styles.projectCard}>
      {projects.map(project => 
        project.title 
      )}
    </div>
  );
}

export default ProjectCard;