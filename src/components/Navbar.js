import { Box, makeStyles } from '@material-ui/core'
import  Button  from '@material-ui/core/Button'
import React from 'react'
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        height: '10vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '& a': {
            color: 'purple',
            textDecoration: 'none',
        },
        "& *": {
            margin: '0 2px',
        },
    },
})

const Navbar = () => {

const classes = useStyles()

return (
    <Box className={classes.root}>
        <Button><Link className={classes.flexItem} to='/inventory'>Inventory</Link></Button>
        <Button><Link className={classes.flexItem} to='/customers'>Customers</Link></Button>
        <Button><Link className={classes.flexItem} to='/billing'>Bill</Link></Button>
        <Button><Link className={classes.flexItem} to='/' 
            onClick={() => {
                localStorage.removeItem('token')
            }}>Logout</Link>
        </Button>
    </Box>
)
}

export default Navbar