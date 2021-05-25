import { Box, Grid, Paper, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import {useSelector} from 'react-redux'
import BillForm from './BillForm'
import CustomerCard from './CustomerCard'

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
        alignItems: 'center'
    },
})

const BillContainer = () => {

const classes = useStyles()

const toggleAllBills = useSelector((state) => {
    return state.bills.toggleAllBills
})

return (
    <Box>
        <Grid container spacing={2} className={classes.container}>
            <Grid align='center' item xs={12}><Typography variant='h4'>Billing</Typography></Grid>
            <Grid item xs={4}>
                <Paper className={classes.form}>
                <CustomerCard />
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <Paper>
                <BillForm />
                </Paper>
            </Grid>
        </Grid>
    </Box>
)
}

export default BillContainer