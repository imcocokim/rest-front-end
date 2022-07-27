import styles from './ProjectCard.module.css'

const ProjectCard = ({project, handleDeleteProject}) => {
  return ( 

    <div key={project._id}>
      {project.title}
      <button className={styles.button} onClick={() => handleDeleteProject(project._id)}>x</button>
    </div>
  );
}

export default ProjectCard;