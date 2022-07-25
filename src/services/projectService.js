import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/projects`

async function getAllProjects() {
  const res = await fetch(`${BASE_URL}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

export {
  getAllProjects
}