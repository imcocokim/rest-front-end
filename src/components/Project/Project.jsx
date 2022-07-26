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
          <div className={styles.day}>Day 1</div>
          <div className={styles.day}>Day 2</div>
          <div className={styles.day}>Day 3</div>
          <div className={styles.day}>Day 4</div>
          <div className={styles.day}>Day 5</div>
        </div>
      </div>
    </>
   );
}
 
export default Project;