import styles from './Landing.module.css'
import { useState, useEffect } from 'react'

import * as projectService from '../../services/projectService'

import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Landing = ({ user }) => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchAllProjects = async () => {
      const projectData = await projectService.getAllProjects()
    setProjects(projectData)
  
    }
    fetchAllProjects()
  }, [])
  

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <ProjectCard projects={projects}/>
    </main>
  )
}

export default Landing
