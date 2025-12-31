import React, { useState } from 'react'

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
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name="name" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" name="email" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" name="password" onChange={handleChange}/>
            </div>
            <div>
                <button type='submit'>Save</button>
            </div>
        </form>
    )
}

export default Register