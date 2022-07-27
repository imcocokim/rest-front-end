import styles from './Project.module.css'
import { useState, useRef, useEffect } from 'react';
import Break from '../Break/Break';

const Project = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    minutes: '',
    author: props.user
  })
  return ( 
    <>
      <div className={styles.project}>
        <div className={styles.projectTitle}>
          <h3>Project Title</h3>
        </div>
        <div className={styles.addItem}>
          <div className={styles.addItemTag}>
          <h4>Add Task</h4>
          </div>
          <form action="">
            <label htmlFor="">Task:</label>
            <input type="text" />
            <label htmlFor="">Minutes:</label>
            <select name="" id="">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
            </select>
            <label htmlFor="">Day:</label>
            <select name="" id="">
              <option value="Day 1">Day 1</option>
              <option value="Day 2">Day 2</option>
              <option value="Day 3">Day 3</option>
              <option value="Day 4">Day 4</option>
              <option value="Day 5">Day 5</option>
              <option value="Day 6">Day 6</option>
            </select>
            <button>Add Task</button>
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