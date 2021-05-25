import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectedCustomer} from '../../actions/actions'
import TextField from '@material-ui/core/TextField';

const CustomerCard = () => {
    const [customerName, setCustomerName] = useState('')
    const [customerList , setCustomerList] = useState([])
    const [cust, setCust] = useState({})

    const dispatch = useDispatch()

    const allCustomers = useSelector((state) => {
        return state.customers
    })

    const handleChange = (e) => {
        e.preventDefault()

        if(e.target.name === 'customerName'){
            setCustomerName(e.target.value)

            const filtered = allCustomers.filter((ele) => {
                return ele.name.includes(e.target.value) || ele.mobile.includes(e.target.value)
            })
            setCustomerList(filtered)
        } 
    }
    const handleClick = (cust) => {
        setCust(cust)
        setCustomerList([])
        setCustomerName('')
        dispatch(selectedCustomer(cust))
    }


    return (
        <div>
            <form >
                <TextField 
                    name='customerName'
                    type='text' 
                    value={customerName} 
                    onChange={handleChange} 
                    placeholder='Customer Name'
                    /> <br />

            {customerList.length !== 0 && 
                <div className='dropdown'>
                    <div className= 'dropdown-content' >
                    {customerList.map((ele, i) => {
                        return <a key={i} onClick={() => (handleClick(ele))}>{ele.name}</a>
                    })}
                    </div>
                </div>
            }
            {cust.name && 
                <div>
                    <h4>Name - {cust.name}</h4>
                    <h4>Ph - {cust.mobile}</h4>
                </div>
            }
            </form>
        </div>
    )
}

export default CustomerCard