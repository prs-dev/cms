import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FLEXCENTER } from '../styles/styles'

const Register = () => {
    const [state, setState ] = useState({
        name: '',
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
            height: "100vh",
            ...FLEXCENTER,
            gap: "10px",
            flexDirection: "column"
        }}>
            <div style={{...FLEXCENTER, flexDirection: "column"}}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" onChange={handleChange}/>
            </div>
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
                Already Registered? <Link to="/login">Login</Link>
            </div>
        </form>
    )
}

export default Register