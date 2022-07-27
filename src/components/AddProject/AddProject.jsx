import styles from './AddProject.module.css'
import { useState, useRef, useEffect } from 'react';

const AddProject = (props) => {

  const [formData, setFormData] = useState({
    title: '',
    author: props.user
  })
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleSubmit= evt => {
    evt.preventDefault()
    props.handleAddProject(formData)
    setFormData({
      title:'',
      author: props.user
    })
  }

  return ( 
    <>
      <div className={styles.addProject}>
        <h3 className={styles.addProjectTag}>Add Project</h3>
        <form 
          action=""
          ref={formElement}
          onSubmit={handleSubmit}
          >
          <div className={styles.titleAndButton}>
          <label htmlFor="title-input">Title</label>
          <input 
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            />
          {/* <label htmlFor="days-input">Number of Days</label>
          <select 
            name="days" 
            id="days" 
            value={formData.days}
            onChange={handleChange}
            >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select> */}
          <button type="submit" disabled={!validForm}>Add Project</button>
          </div>
        </form>
      </div>
    </>
   );
}
 
export default AddProject;