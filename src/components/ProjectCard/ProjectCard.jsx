import styles from './ProjectCard.module.css'

const ProjectCard = ({projects, user}) => {
  console.log(projects)
  return ( 

    <div className={styles.projectCard}>
      {projects.map(project => 
        <div className={styles.projectEntry}>{project.title}</div> 
      )}
    </div>
  );
}

export default ProjectCard;