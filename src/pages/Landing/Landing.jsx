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

  const handleAddProject = async (newProjectData) => {
    const newProject = await projectService.create(newProjectData)
    setProjects([...projects, newProject])
  }

const handleDeleteProject = async (id) => {
  const deletedProject = await projectService.deleteProject(id)
  setProjects(projects.filter(project => project._id !== deletedProject._id))
}

  return (
    <main>
      <h1 className={styles.landing}>Welcome to RESTing</h1>
      <div className={styles.projectCard}>
        {projects.map(project =>
          <div className={styles.projectEntry}>
            <ProjectCard project={project} user={user} handleDeleteProject={handleDeleteProject}/>
          </div>
        )}
      </div>
      <AddProject handleAddProject={handleAddProject} user={user}/>
      <Project user={user} projects={projects}/>

    </main>
  )
}

export default Landing
