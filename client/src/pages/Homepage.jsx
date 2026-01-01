import { Link } from "react-router-dom"
import { FLEXCENTER } from "../styles/styles"

const Homepage = () => {
  return (
    <div style={{
      ...FLEXCENTER,
      height: `calc(100vh - 70px)`,
      flexDirection: 'column',
      gap: "10px"
    }}>
      <h1>This is a personal feedback system with admin dashboard</h1>
      <div>
        <span>To start <Link to='/register'>Register</Link></span> or existing user can <Link to='/login'>Login</Link>
      </div>
    </div>
  )
}

export default Homepage