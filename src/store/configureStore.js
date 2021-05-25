import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import errorsReducer from '../reducers/errorsReducer'
import inventoryReducer from '../reducers/inventoryReducer'
import customersReducer from '../reducers/customersReducer'
import orderListReducer from '../reducers/orderListReducer'
import billsReducer from '../reducers/billsReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        errors: errorsReducer,
        inventory: inventoryReducer,
        customers: customersReducer,
        orderList: orderListReducer,
        bills: billsReducer,
    }), applyMiddleware(thunk))

    return store
}

export default configureStore