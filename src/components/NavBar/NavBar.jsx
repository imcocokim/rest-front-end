import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <header className='App-header'>
        {user ?
          <nav className='navbar'>
            <Link className='navLink' to=""> REST</Link>
            <Link className='navLink' to=""> Welcome, {user.name}</Link>
            <Link className='navLink' to="" onClick={handleLogout}>LOG OUT</Link>
            {/* <Link className='navLink' to="/changePassword">Change Password</Link> */}
          </nav>
        :
          <nav className='navbar'>
              <Link className='navLink' to="/login">Log In</Link>
              <Link className='navLink' to="/signup">Sign Up</Link>
          </nav>
        }
      </header>
    </>
  )
}

export default NavBar
