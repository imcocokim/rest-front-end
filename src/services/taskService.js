import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/tasks`

async function getAllTasks() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  return await res.json()
}

async function create(task){
  console.log(task)
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  return res.json()
}
async function deleteTask(taskId){
  const res = await fetch(`${BASE_URL}/${taskId}`, {
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
  getAllTasks,
  create,
  deleteTask
}