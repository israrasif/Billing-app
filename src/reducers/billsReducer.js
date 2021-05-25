const initialValue = {
    allBills: [],
    toggleAllBills: false,
    selectedCustomer: {}
}

const billsReducer = (state = initialValue, action) => {

    switch(action.type) {

        case 'ALL_BILLS' : {
            return {
                ...state,
                allBills: action.payload
            }
        }

        case 'TOGGLE_ALL_BILLS' : {
            return {
                ...state,
                toggleAllBills: action.payload
            }
        }

        case 'SELECTED_CUSTOMER' : {
            return {
                ...state,
                selectedCustomer : action.payload
            }
        }

        default : {
            return state
        }
    }
}

export default billsReducer