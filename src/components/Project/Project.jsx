import styles from './Project.module.css'

const Project = () => {
  return ( 
    <>
      <div className={styles.project}>
        <div className={styles.projectTitle}>
          <h3>Project Title</h3>
        </div>
        <div className={styles.addItem}>
          <div className={styles.addItemTag}>
          <h4>Add Item</h4>
          </div>
          <form action="">
            <div>
            <label htmlFor="">Item</label>
            <input type="text" />
            </div>
            <label htmlFor="">Time</label>
            <select name="" id="">
              <option value="0900">0900</option>
              <option value="1000">1000</option>
              <option value="1100">1100</option>
              <option value="1200">1200</option>
              <option value="1300">1300</option>
              <option value="1400">1400</option>
              <option value="1500">1500</option>
              <option value="1600">1600</option>
              <option value="1700">1700</option>
            </select>
            <button>Add Item</button>
          </form>
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