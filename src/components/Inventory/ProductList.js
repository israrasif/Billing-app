import React from 'react'
import { useSelector} from 'react-redux'
import ProductItem from './ProductItem'
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

const ProductList = () => {
    const setAllProducts = useSelector((state) => {
        return state.inventory
    })

    const classes = useStyles()

    return (
        <Grid >
            <Paper className={classes.paper}>
            <Grid className={classes.header}> 
                <Typography 
                    variant='h5'
                    align='center'
                    >Product List
                </Typography>
                <Typography
                    variant='h6'
                    align='center'
                > Total Products - {setAllProducts.length}
                </Typography>
            </Grid>
            {setAllProducts.length && 
            <Box className={classes.list}>
                {setAllProducts.map((ele) => {
                    return <ProductItem key={ele._id} {...ele}/>
                })}
            </Box>
                }
            </Paper>
        </Grid>
    )
}

export default ProductList