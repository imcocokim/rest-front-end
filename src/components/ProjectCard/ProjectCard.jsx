import styles from './ProjectCard.module.css'

const ProjectCard = ({project}) => {
  return ( 

    <div >
      {project.title}
      <button className={styles.button}>x</button>
    </div>
  );
}

export default ProjectCard;