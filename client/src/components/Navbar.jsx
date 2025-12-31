const Navbar = () => {
  return (
    <nav style={{
        height: "50px",
        background: "gray",
        color: "white",
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px"
    }}>
        <h1>cms</h1>
        <ul style={{
            display: 'flex',
            listStyle: "none",
            gap: "10px",
        }}>
            <li>Login</li>
            <li>Register</li>
        </ul>
    </nav>
  )
}

export default Navbar