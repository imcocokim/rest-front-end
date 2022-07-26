import styles from './Project.module.css'

const Project = () => {
  return ( 
    <>
      <div className={styles.project}>
        <div className={styles.projectTitle}>
          <h3>Project Title</h3>
        </div>
        <div className={styles.addItem}>
          <h4>Add Item</h4>
        </div>
        <div className={styles.days}>
          <h4>Days</h4>
        </div>
      </div>
    </>
   );
}
 
export default Project;