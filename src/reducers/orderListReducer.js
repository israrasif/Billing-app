const initialValue = []

const orderListReducer = (state = initialValue, action) => {
    switch(action.type) {

        case 'ADD_ORDER' : {
            return [...state, {...action.payload, quantity: 1}]
        }

        case 'INCREMENT_ORDER' : {
            return state.map((ele) => {
                if(action.payload === ele._id) {
                    return {...ele, quantity : ele.quantity + 1}
                } else {
                    return ele
                }
            })
        }

        case 'DECREMENT_ORDER' : {
            return state.map((ele) => {
                if(action.payload === ele._id) {
                    return {...ele, quantity : ele.quantity - 1}
                } else {
                    return ele
                }
            })
        }

        default : {
            return state
        }
    }
}

export default orderListReducer