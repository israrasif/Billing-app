const initialValue = []

const inventoryReducer = (state = initialValue, action) => {
    switch(action.type) {
        case 'ALL_CUSTOMERS' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}

export default inventoryReducer