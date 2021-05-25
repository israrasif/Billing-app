import axios from 'axios'

export const startRegister = (formData, history) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register', formData)
            .then((response) => {
                if(response.data.errors){
                    console.log('error')
                    console.log(response.data)
                    dispatch(errorAction())
                }
                else if (response.data.code === 11000 ){
                    console.log(response.data)
                    dispatch(duplicateError)
                }
                else if (response.data._id){
                    console.log(response.data)
                    dispatch(registerSuccess)
                    history.push('/')
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

export const errorAction = () => {
    return {
        type: 'ERROR'
    }
}

const duplicateError = {
    type: 'DUPLICATE'
}

const registerSuccess = {
    type: 'REGISTER_SUCCESS'
}

export const resetErrors = {
    type: 'RESET_ERRORS'
}


export const startLogin = (formData, history) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/users/login', formData)
            .then((response) => {
                console.log(response.data.token)
                localStorage.setItem('token', response.data.token)
                history.push('/inventory')
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

export const startAddProduct = (formData) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/products', formData, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                console.log(response.data)
                dispatch(startGetProducts())
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

export const startGetProducts = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/products', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                dispatch(allProducts(response.data))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

 
export const allProducts = (getProducts) => {
    return {
        type: 'ALL_PRODUCTS',
        payload: getProducts
    }
}

export const deleteProduct = (id) => {
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                console.log('deleted', response.data)
                dispatch(deleteProductState(response.data._id))
                dispatch(startGetProducts())
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const deleteProductState = (id) => {
    return {
        type: 'DELETE_PRODUCT_STATE',
        payload: id
    }
}

export const startEditProduct = (id, formData) => {
    return (dispatch) => {
        axios.put(`http://dct-billing-app.herokuapp.com/api/products/${id}`, formData, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                console.log(response.data)
                dispatch(startGetProducts())
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

//Customers Actions

export const startGetCustomers = () => {
    return (dispatch) => {
    axios.get('http://dct-billing-app.herokuapp.com/api/customers', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then((response) => {
            dispatch(allCustomers(response.data))
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

export const allCustomers = (getCustomers) => {
    return {
        type: 'ALL_CUSTOMERS',
        payload: getCustomers
    }
}

export const startAddCustomer = (formData) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/customers', formData, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                dispatch(startGetCustomers())
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

export const deleteCustomer = (id) => {
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                console.log('deleted', response.data.name)
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

export const startEditCustomer = (id, formData) => {
    return (dispatch) => {
        axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, formData, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                dispatch(startGetCustomers())
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

//Order List 

export const addOrderItem = (item) => {
    return {
        type: 'ADD_ORDER',
        payload: item
    }
}

export const incrementOrder = (id) => {
    return {
        type: 'INCREMENT_ORDER',
        payload: id
    }
}

export const decrementOrder = (id) => {
    return {
        type: 'DECREMENT_ORDER',
        payload: id
    }
}

export const startAddBill = (formData) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/bills', formData, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

// Bills

export const startAllBills = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/bills', {
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                dispatch(storeAllBills(response.data))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const storeAllBills = (allBills) => {
    return {
        type: 'ALL_BILLS',
        payload: allBills
    }
}

export const toggleAllBillsAction = (bool) => {
    return {
        type: 'TOGGLE_ALL_BILLS',
        payload: bool
    }
}

export const selectedCustomer = (cust) => {
    return {
        type: 'SELECTED_CUSTOMER',
        payload: cust
    }
}

export const startDeleteBill = (id) => {
    return(dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                console.log('deleted', response.data)
                dispatch(startAllBills())

            })
            .catch((error) => {
                alert(error.message)
            })
    }
}