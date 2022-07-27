import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/projects`

async function getAllProjects() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return await res.json()
}

async function create(project){
  console.log(project)
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(project)
  })
  return res.json()
}
async function deleteProject(projectId){
  const res = await fetch(`${BASE_URL}/${projectId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  })
  return res.json()
}



export {
  getAllProjects,
  create,
  deleteProject
}