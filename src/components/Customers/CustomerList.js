import React from 'react'
import {useSelector} from 'react-redux'
import CustomerItem from './CustomerItem'
import Grid from '@material-ui/core/Grid'
import  {Box, makeStyles, Typography}  from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    paper: {
        maxHeight: '74vh',
        overflow: 'auto'
    },
    header: {
        width: '100%',
        height: '10vh',
        position: 'sticky',
        top: '0',
        backgroundColor: 'lightgrey',
    },
    list: {
        width: '100%',
        padding: '0 20px'
    },
})

const CustomerList = () => {

const classes = useStyles()

const getCustomers1 = useSelector((state) => {
    return state.customers
})
const getCustomers = getCustomers1.reverse()

return (
    <Box>
        <Paper className={classes.paper}> 
        <Box className={classes.header}>
            <Typography variant='h5' align='center'> Customers List </Typography>
            <Typography variant='h5' align='center'> Total Customers - {getCustomers.length}</Typography>
        </Box>
        {getCustomers.length && 
        <Box className={classes.list}>
            {getCustomers.map((ele) => {
                return <CustomerItem key={ele._id} id={ele._id}/>
            })}
        </Box>
        }
        </Paper>
    </Box>
)
}

export default CustomerList