import Navbar from "./Navbar"
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
        {/* learn outlet in react-router-dom */}
      </main>
    </div>
  )
}

export default Layout