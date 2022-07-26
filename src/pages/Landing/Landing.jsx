import styles from './Landing.module.css'
import { useState, useEffect } from 'react'

import * as projectService from '../../services/projectService'

import ProjectCard from '../../components/ProjectCard/ProjectCard'
import AddProject from '../../components/AddProject/AddProject'
import Project from '../../components/Project/Project'

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
    <main>
      <h1 className={styles.landing}>Welcome to REST</h1>
      <ProjectCard projects={projects}/>
      <AddProject />
      <Project />

    </main>
  )
}

export default Landing
