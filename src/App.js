import React from 'react'
import {Route, withRouter} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Inventory from './components/Inventory/Inventory'
import Navbar from './components/Navbar'
import Customers from './components/Customers/Customers'
import BillContainer from './components/Bill/BillContainer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {startGetProducts, startGetCustomers, startAllBills} from './actions/actions'
import {useDispatch} from 'react-redux'

const App = (props) => {
  const dispatch = useDispatch()

  const token = localStorage.getItem('token')
  if(token){
    dispatch(startGetProducts())
    dispatch(startGetCustomers())
    dispatch(startAllBills())
  }

  return (
    <div >
      <div>
        {token && <Navbar /> }
      </div>
        <Route path='/' component={Login} exact={true}/>
        <Route path='/register' component={Register} />
        <Route path='/inventory' component={Inventory}/>
        <Route path='/customers' component={Customers}/>
        <Route path='/billing' component={BillContainer}/>
    </div>
  )
}

export default withRouter(App)