import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CartItems from './CartItems'
import AllBills from './AllBills'
import {addOrderItem, startAddBill, toggleAllBillsAction, selectedCustomer} from '../../actions/actions'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'
import TextField from '@material-ui/core/TextField';
import { makeStyles, Box } from '@material-ui/core';
import { Link } from 'react-router-dom'



const BillForm = (props) => {
    const [productName, setProductName] = useState('')
    const [productList, setProductList] = useState([])
    const [date, setDate] = useState()

    const toggleAllBills = useSelector((state) => {
        return state.bills.toggleAllBills
    })

    const selectedCustomer = useSelector((state) => {
        return state.bills.selectedCustomer
    })
    const allProducts = useSelector((state) => {
        return state.inventory
    })
    const orderList = useSelector((state) => {
        return state.orderList
    })

    const dispatch = useDispatch()

    const useStyles = makeStyles({
        header: {
            width: '100%',
            height: '10vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
      })

    const classes = useStyles();  

    const handleChange = (e) => {
        e.preventDefault()

        if (e.target.placeholder === 'productName') {
            setProductName(e.target.value)

            const filtered = allProducts.filter((ele) => {
                return ele.name.includes(e.target.value)
            })
            setProductList(filtered)
        }
    }

    const handleDateChange = (date) => {
        setDate(date)
    }

    const handleProductClick = (prod) => {
        dispatch(addOrderItem(prod))
        setProductList([])
        setProductName('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            date: date,
            customer: selectedCustomer._id,
            lineItems: orderList.map((ele) => {
                return {
                    product: ele._id,
                    quantity: ele.quantity
                }
            })
        }   
        dispatch(startAddBill(formData))
        dispatch(selectedCustomer({}))
    }

    const handleAllBills = () => {
        dispatch(toggleAllBillsAction(!toggleAllBills))
    }

    return (
        <div>
        {toggleAllBills ? (
        <div >
            <AllBills />
        </div>
        ) : (
        <div>
            <form onSubmit={handleSubmit}>
                <Box className={classes.header}>
                <TextField 
                    label="Product Name" 
                    type='text' 
                    value={productName} 
                    onChange={handleChange} 
                    />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={date}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </Grid>
                </MuiPickersUtilsProvider>
                <Link href='#' onClick={handleAllBills}>All Bills</Link>
                </Box>
            
                {productList.length !== 0 && 
                    <div >
                        <div >
                        {productList.map((ele, i) => {
                            return <a key={i} onClick={() => (handleProductClick(ele))}>{ele.name}</a>
                        })}
                        </div>
                    </div>
                }

                <CartItems/>
                
                <button
                    type='submit'
                    >
                        Generate Bill
            </button>
            </form> 
            
        </div>)
        }
        </div>
    )
}

export default BillForm 