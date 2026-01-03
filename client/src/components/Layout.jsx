import Navbar from "./Navbar"
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main style={{
        height: 'calc(100vh - 70px)'
      }}>
        <Outlet />
        {/* learn outlet in react-router-dom */}
      </main>
    </div>
  )
}

export default Layout