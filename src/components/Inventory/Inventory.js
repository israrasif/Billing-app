import React from 'react'
import ProductForm from './ProductForm'
import ProductList from './ProductList'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/styles'
import { CssBaseline, Typography, Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    root: {
        padding : '40px 20px',
        height: '74vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

const Inventory = (props) => {

const classes = useStyles()

return (
    <Box>
    <CssBaseline/>
    <Grid 
        container
        spacing={2}
        >
        
        <Grid item xs={12} >
            <Typography 
                align="center"
                variant='h4'>
                Inventory
            </Typography >
        </Grid>
        <Grid 
            item xs={4}>
            <Paper 
                className={classes.root}
                container 
                >
                <Typography 
                    item xs={5}
                    variant='h5'>
                    Add Product
                </Typography >
            <ProductForm item xs={7}/>
            </Paper>
        </Grid>
        <Grid item xs={8} >
            <ProductList />
        </Grid>
    </Grid>
    </Box>
)

}

export default Inventory 