import styles from './Task.module.css'

const TaskContainer = () => {
  return ( 
    <div className={styles.task}>
      <h4>TASK TITLE</h4>
      <p>minutes selected</p>
    </div>
  )
}

export default TaskContainer