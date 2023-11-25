import React, {useContext} from "react";
import {TiDelete, TiMinus, TiPlus} from "react-icons/ti";
import {AppContext} from "../context/AppContext";

const ExpenseItem = (props) => {
    const {dispatch, currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        
        
        const expense = {
            name: name,
            cost: 10
        }

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency   }{props.cost}</td>
            <td>
                <button
                    className={'rounded-circle border-0 p-2 m-0'}
                    style={{backgroundColor: 'lightgreen'}}
                    onClick={event =>
                        increaseAllocation(props.name)}>
                    <TiPlus size={'1.5em'} color={'white'}></TiPlus>
                </button>
            </td>
            <td>
                <button
                    className={'rounded-circle border-0 p-2 m-0'}
                    style={{backgroundColor: 'red'}}
                    onClick={event =>
                        decreaseAllocation(props.name)}>
                    <TiMinus size={'1.5em'} color={'white'}/>
                </button>
            </td>
            <td>
                <TiDelete style={{cursor: 'pointer'}} size={'2.5em'} onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    )
}

export default ExpenseItem;