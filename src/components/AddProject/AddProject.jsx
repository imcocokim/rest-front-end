import styles from './AddProject.module.css'
import { useState } from 'react'

const AddProject = (props) => {
  // const [formData, setFormData] = useState({
  //   title: '',
  //   days: ''
  // })

  // const handleSubmit = evt => {
  //   evt.preventDefault()
  //   props.handleAddProject(formData)
  //   setFormData({
  //     title: '',
  //     days: ''
  //   })
  // }

  return ( 
    <>
      <div className={styles.addProject}>
        <h3>Add Project</h3>
        <form action="">
          <label htmlFor="">Title</label>
          <input type="text" />
          <label htmlFor="">Number of Days</label>
          <select name="days" id="days">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
          </select>
          <button type="submit">Add Project</button>
        </form>
      </div>
    </>
   );
}
 
export default AddProject;