import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import {AppProvider} from './context/AppContext';
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
import Currency from "./components/Currency";
import {Col, Row} from "react-bootstrap";

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <Row className={'align-items-center'}>
                    <Col><Budget/></Col>
                    <Col><Remaining/></Col>
                    <Col><ExpenseTotal/></Col>
                    <Col><Currency/></Col>
                </Row>
                <h3 className={'mt-3'}>Allocation</h3>
                <div className={'row'}>
                    <div className={'col-sm'}>
                        <ExpenseList/>
                    </div>
                </div>
                <h3 className={'mt-3'}>Change allocation</h3>
                <div className={'row mt-3'}>
                    <AllocationForm/>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
