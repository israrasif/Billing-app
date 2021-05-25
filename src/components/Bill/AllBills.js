import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import {startDeleteBill, toggleAllBillsAction} from '../../actions/actions'

const AllBills = (props) => {
    const dispatch = useDispatch()

    const allBills = useSelector((state) => {
        return state.bills.allBills
    })
    const allCustomers = useSelector((state) => {
        return state.customers
    })
    const billsWithCustomer = allBills.map((bill) => {
        const found = allCustomers.filter((cust) => {
            return bill.customer == cust._id
        })
        if(found[0]){
            return {...bill, customerName : found}
        } else {
            return {...bill, customerName : 'deleted'}
        }
    })

    return (
        <div>
            <div>
                <h3>Total Bills - {allBills.length}</h3>
                <a href='#' onClick={() => {dispatch(toggleAllBillsAction(false))}}>Generate Bill</a>
            </div>
            <div>
            {billsWithCustomer.map((ele) => {
                return (
                    <div>
                        <span>{ele.date.slice(0,9)} - {ele.customerName[0].name ? ele.customerName[0].name: 'deleted'} - {ele.total}</span> 
                        <DeleteForeverIcon 
                            fontSize='large' 
                            onClick={() => {dispatch(startDeleteBill(ele._id))}}
                        />
                    </div>)
            })}
            </div>
        </div>
    )
}

export default AllBills