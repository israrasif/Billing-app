import React, { useState, useEffect } from 'react'
import {startLogin} from '../actions/actions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('token')){
            props.history.push('/inventory')
        }
    },[])

    const handleChange = (e) => {
        let attr = e.target.name

        if( attr === "email" ){
            setEmail(e.target.value)
        }
        else  if( attr === "password" ){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            email: email,
            password: password,
        }

        dispatch(startLogin(formData, props.history))
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value = {email}  name = 'email' onChange = {handleChange} /> < br/>
                <input type='text' value = {password}  name = 'password' onChange = {handleChange} /> < br/>
                <button type='submit'>login</button>
            </form>
            <Link to='/register'>Register</Link>
        </div>
    )
}

export default Login 