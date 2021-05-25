import { CssBaseline, makeStyles, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import React from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'

const useStyles = makeStyles({
    container: {
        maxWidth: '100%'
    },
    form : {
        marginLeft: '10px',
        padding : '40px 20px',
        height: '74vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center', 
    },
})

const Customers = () => {

const classes = useStyles()

return (
    <Grid container spacing={2} className={classes.container}>
        <CssBaseline/>
        <Grid item xs={12} >
            <Typography align='center' variant='h4'>Customers</Typography>
        </Grid>
        <Grid item xs={4}>
            <Paper className={classes.form}>
            <Typography variant='h5'>Add Customer</Typography>
            <CustomerForm />
            </Paper>
        </Grid>
        <Grid item xs={8}>
            <Paper>
            <CustomerList />
            </Paper>
        </Grid>
    </Grid>
)
}

export default Customers