import React from 'react'
import {useSelector} from 'react-redux'
import CartItem from './CartItem'

const CartItems = (props) => {
    const orderList = useSelector((state) => {
        return state.orderList
    })

    return (
        <div 
            style={{
                minHeight: '350px',
            }}
            >
            <h4>Cart Items</h4>
            <div>
                {orderList.map((ele, i) => {
                    
                    return <CartItem key={i} {...ele}/>
                })}
            </div>
        </div>
    )
}

export default CartItems