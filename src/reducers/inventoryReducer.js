const initialValue = []

const inventoryReducer = (state = initialValue, action) => {
    switch(action.type) {
        case 'ALL_PRODUCTS' : {
            return action.payload
        }
        case 'ADD_PRODUCT' : {
            return [{...action.payload}, ...state]
        }
        case 'DELETE_PRODUCT_STATE' : {
            return state.filter((ele) => {
                return action.payload !== ele._id
            })
        }
        default : {
            return state
        }
    }
}

export default inventoryReducer