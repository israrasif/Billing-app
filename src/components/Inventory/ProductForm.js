import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {startAddProduct, startEditProduct} from '../../actions/actions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root : {
        padding: '50px 20px'
    },
})

const ProductForm = (props) => {

const {editName, editPrice, editId, handleToggle, toggle} = props
const [name, setName] = useState(editName ? editName : '')
const [price, setPrice] = useState(editPrice ? editPrice : '')

const dispatch = useDispatch()

const classes = useStyles()

const handleChange = (e) => {
    const attr = e.target.name
    
    if (attr === 'name'){
        setName(e.target.value)
    }
    else if (attr === 'price'){
        setPrice(e.target.value)
    }
}

const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
        name: name,
        price: price
    }

    if(editName) {
        handleToggle()
        dispatch(startEditProduct(editId, formData))
    } else {
        dispatch(startAddProduct(formData))
    }

    setName('')
    setPrice('')
}

return (
    <Grid>
        <form>
            <TextField 
                required
                type='text' 
                value={name} 
                onChange={handleChange} 
                name='name' 
                placeholder= 'Name'
                /> <br />
            <TextField 
                type='text' 
                value={price} 
                onChange={handleChange} 
                name='price' 
                placeholder= 'Price'
                /> <br />
            <button
                type='submit'>
                    save
            </button>
        </form>
    </Grid>
)
}

export default ProductForm