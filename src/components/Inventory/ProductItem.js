import React,{useState} from 'react'
import {deleteProduct} from '../../actions/actions'
import {useDispatch, useSelector} from 'react-redux'
import ProductForm from './ProductForm'
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

const ProductItem = (props) => {

    const [toggle, setToggle] = useState(true)

    const {_id} = props

    const classes = useStyles()

    const setAllProducts = useSelector((state) => {
        return state.inventory
    })

    const filtered = setAllProducts.find((ele) => {
        return _id === ele._id
    })

    const dispatch = useDispatch()

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <Grid >
        {toggle ? 
            (<Paper >
                <Grid container justify="space-between" className={classes.text}>

                    <Typography className={classes.item} item xs={6}>{filtered.name} - {filtered.price} </Typography> 
                                
                    <DeleteForeverIcon item xs={3} onClick={() => {dispatch(deleteProduct(_id))}} />
                                
                    <EditIcon item xs={3} onClick={() => {handleToggle()}} />

                </Grid>
            </Paper>) : (
            <div>
                <Paper>
                <ProductForm 
                    
                    toggle={toggle}
                    editName={filtered.name} 
                    editPrice={filtered.price} 
                    editId={_id}
                    handleToggle={handleToggle}
                    />
                
                </Paper>
            </div>
            )}
        </Grid>
    )
}

export default ProductItem