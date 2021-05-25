import React from 'react'
import {useDispatch} from 'react-redux'
import {incrementOrder, decrementOrder} from '../../actions/actions'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'

const CartItem = (props) => {
    const {name, price, _id, quantity} = props
    const dispatch = useDispatch()

    const handleIncrement = (e, id) => {
        e.preventDefault()
        dispatch(incrementOrder(id))
    }

    const handleDecrement = (e, id) => {
        e.preventDefault()
        dispatch(decrementOrder(id))
    }

    return (
        <div>
            <span>{name} - {price} </span>
            <AddCircleOutlineIcon fontSize= 'large' onClick={(e) => {handleIncrement(e, _id)}} />
            <span>{quantity}</span>
            <RemoveCircleOutlineIcon fontSize= 'large' onClick={(e) => {handleDecrement(e, _id)}} />
        </div>
    )
}

export default CartItem