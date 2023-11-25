import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, dispatch, remaining, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0)
    const handleBudgetChange = (event) => {
        if(event.target.value >= 20000) {
            alert(`You cannot exceed 20000. Remaining funds ${remaining}`)
            return
        }
        
        if(event.target.value <= totalExpenses) {
            alert(`You cannot reduce the budget lower than the spending`)
            return
        }
        
        
        
        setNewBudget(event.target.value);
        
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        })
    }
    
    return (
        <div className={'alert alert-secondary'}>
            <span>Budget: {currency}</span>
            <input type={'number'} step={'10'} value={newBudget} onMouseLeave={handleBudgetChange} onChange={handleBudgetChange}/>
        </div>
    );
};

export default Budget;