import {NavLink, Outlet} from 'react-router-dom' 
import {FaUser} from 'react-icons/fa'
import {FaHome} from 'react-icons/fa'
import {FaMessage} from 'react-icons/fa6'
import { FaRegListAlt } from 'react-icons/fa'
import {useAuth} from '../../store/auth'


const AdminLayout = () => {
  const {user } = useAuth();
  console.log('admin layout', user)

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li><NavLink to="/admin/users"> <FaUser/> users</NavLink></li>
              <li><NavLink to="/admin/contacts"> <FaMessage/> contacts</NavLink></li>
              <li><NavLink to="/service"> <FaRegListAlt/> services</NavLink></li>
              <li><NavLink to="/"> <FaHome/> Home</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  )
}

export default AdminLayout