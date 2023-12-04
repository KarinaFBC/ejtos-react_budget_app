import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, Location } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
        
    }, 0);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Location}{}</span>

                    <input
                        required='required'
                        type='number'
                        id='cost'
                        // value={quantity}
                        style={{size: 10}}>
                            
                        </input>
        </div>
    );
 
};

export default Budget;