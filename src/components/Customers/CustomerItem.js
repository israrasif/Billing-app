import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {deleteCustomer, startGetCustomers} from '../../actions/actions'
import CustomerForm from './CustomerForm'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles({
    text: {
        height: '12vh',
        margin: '5px 0',
        alignItems: 'center'
    },
    item: {
        width: '25vw',
        textAlign: 'center'
    },
})

const CustomerItem = (props) => {
const classes = useStyles()

const [toggle, setToggle] = useState(true)
const {id} = props

const dispatch = useDispatch()

const getCustomer = useSelector((state) => {
    return state.customers
})

const filtered = getCustomer.find((ele) => {
    return ele._id === id
})

const handleToggle = () => {
    setToggle(!toggle)
}

const handleDelete = (id) => {
    dispatch(deleteCustomer(id))
    dispatch(startGetCustomers())
} 

    return (
        <div>
        {toggle ? 
            (<Paper>
                <Grid container justify="space-between" className={classes.text}>
                    <Typography className={classes.item} item xs={6}>{filtered.name} - {filtered.mobile} - {filtered.email} </Typography> 
                    <DeleteForeverIcon item xs={3} onClick={() => {handleDelete(id)}}>delete</DeleteForeverIcon>
                    <EditIcon item xs={3} onClick={() => {handleToggle()}}>edit</EditIcon >
                </Grid>
            </Paper>) : (
                <Paper>
                    <CustomerForm 
                        editName = {filtered.name}
                        editMobile = {filtered.mobile}
                        editEmail = {filtered.email}
                        editId = {filtered._id}
                        handleToggle = {handleToggle}
                    />
                </Paper>
            )}
        </div>
    )
}

export default CustomerItem