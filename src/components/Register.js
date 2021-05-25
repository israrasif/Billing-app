import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {startRegister} from '../actions/actions'
import {Link} from 'react-router-dom'

const Register = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [address, setAddress] = useState('')

    const dispatch = useDispatch()

    const errors = useSelector((state) => {
        return state.errors
    })

    useEffect(() => {
        if(errors === 'registered'){
            props.history.push('/')
        }
    })

    const handleChange = (e) => {
        let attr = e.target.name

        if( attr === "username" ){
            setUsername(e.target.value)
        }
        else if( attr === "email" ){
            setEmail(e.target.value)
        }
        else  if( attr === "password" ){
            setPassword(e.target.value)
        }
        else  if( attr === "businessName" ){
            setBusinessName(e.target.value)
        }
        else  if( attr === "address" ){
            setAddress(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            username: username,
            email: email,
            password: password,
            businessName: businessName,
            address: address
        }

        dispatch(startRegister(formData, props.history))
    }

    return (
        <div class='glass'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value = {username}  name = 'username' onChange = {handleChange} /> < br/>
                <input type='text' value = {email}  name = 'email' onChange = {handleChange} /> < br/>
                <input type='text' value = {password}  name = 'password' onChange = {handleChange} /> < br/>
                <input type='text' value = {businessName} name = 'businessName' onChange={handleChange}/> <br />
                <textarea value = {address} name = 'address' onChange = {handleChange}></textarea> <br />
                <button type='submit'>register</button>
            </form>
            <Link to='/'>Login</Link>
        </div>
    )
}

export default Register