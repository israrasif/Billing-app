import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {startAddCustomer, startEditCustomer, startGetCustomers} from '../../actions/actions'
import TextField from '@material-ui/core/TextField'


const CustomerForm = (props) => {
    const {editName, editMobile, editEmail, editId, handleToggle} = props
    const [name, setName] = useState(editName ? editName : '')
    const [mobile, setMobile] = useState(editMobile ? editMobile : '')
    const [email, setEmail] = useState(editEmail ? editEmail : '')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const attr = e.target.name

        if (attr === 'name'){
            setName(e.target.value)
        }
        else if (attr === 'mobile'){
            setMobile(e.target.value)
        }
        else if (attr === 'email'){
            setEmail(e.target.value)
        }
    }

    console.log(editId)

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            name: name,
            mobile: mobile,
            email: email
        }

        if(editName) {
            dispatch(startEditCustomer(editId, formData))
            handleToggle()
        } else {
            dispatch(startAddCustomer(formData, props.history))
            setName('')
            setMobile('')
            setEmail('')
        }
    }

    return(
        <div>   
            <form 
                onSubmit={handleSubmit}>
                <TextField type='text' value={name} onChange={handleChange} name='name' placeholder='name'/> <br />
                <TextField type='text' value={mobile} onChange={handleChange} name='mobile' placeholder='mobile'/> <br />
                <TextField type='text' value={email} onChange={handleChange} name='email' placeholder='email'/> <br />
                <button type='submit'>save</button>
            </form>
        </div>
    )
}

export default CustomerForm