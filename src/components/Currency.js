import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Dropdown from 'react-bootstrap/Dropdown'


const Currency = () => {
    const {currency, dispatch} = useContext(AppContext)
    const [newCurrency, setNewCurrency] = useState(currency)
    const [selectedCurrency, setSelectedCurrency] = useState('Pound')

    const Currencies = [{
        US_DOLLAR: '$',
        EU_EURO: 'Є',
        UK_POUND: '£',
        IN_RUPEE: '₹'
    }]

    const handleChange = (eventKey,e) => {
        setNewCurrency(eventKey)
        setSelectedCurrency(e.target.innerHTML)
        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: eventKey
        })
        
        
    }

    return (
        <Dropdown onSelect={handleChange} className={'alert alert-dark'}>
            <Dropdown.Toggle style={{border: 'none'}} variant={'alert alert-dark p-0 m-0'} id={'dropdown-basic'} onChange={handleChange}>
                Currency: ({selectedCurrency})
            </Dropdown.Toggle>
            
            <Dropdown.Menu>
                <Dropdown.Item eventKey={Currencies.map((item) => item.US_DOLLAR)}>$ Dollar</Dropdown.Item>
                <Dropdown.Item eventKey={Currencies.map((item) => item.UK_POUND)}>£ Pound</Dropdown.Item>
                <Dropdown.Item eventKey={Currencies.map((item) => item.EU_EURO)}>Є Euro</Dropdown.Item>
                <Dropdown.Item eventKey={Currencies.map((item) => item.IN_RUPEE)}>₹ Rupee</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>


    )
}

export default Currency