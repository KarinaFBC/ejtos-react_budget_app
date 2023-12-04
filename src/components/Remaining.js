import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const value = 1040;
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = "1040")
    }, 0);

    return (
        <div className='alert alert-success'>
            <span>Remaining: {Location}{totalExpenses}</span>
            
        </div>
    );
};

export default Remaining;