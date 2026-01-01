import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FLEXCENTER } from '../styles/styles'

const Login = () => {
    const [state, setState ] = useState({
        email: '',
        password: ''
    })
    const handleChange = e => setState(prev => ({...prev, [e.target.name]: e.target.value}))
    
    const handleSubmit = async () => {
        try {

        } catch (error) {
            console.log("error in handleSubmit function")
        }
    }

    console.log("state", state)
    return (
        <form action="" onSubmit={handleSubmit} style={{
            height: `100vh`,
            ...FLEXCENTER,
            flexDirection: "column",
            gap: "10px"
        }}>
            <div style={{...FLEXCENTER, flexDirection: "column"}}>
                <label htmlFor="">Email</label>
                <input type="email" name="email" onChange={handleChange}/>
            </div>
            <div style={{...FLEXCENTER, flexDirection: "column"}}>
                <label htmlFor="">Password</label>
                <input type="password" name="password" onChange={handleChange}/>
            </div>
            <div>
                <button type='submit'>Save</button>
            </div>
            <div>
                New user? <Link to='/register'>Register</Link>
            </div>
        </form>
    )
}

export default Login