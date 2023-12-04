import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";


const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{parseInt(props.unitprice)}</td>
        <td><IoIosAddCircle size='2.2em' color="green" onClick={handleDeleteItem}></IoIosAddCircle></td>     
        <td><IoIosRemoveCircle size='2.2em' color="red" onClick={handleDeleteItem}></IoIosRemoveCircle></td>        
        <td><IoIosCloseCircle size='1.5em' color="black" onClick={handleDeleteItem}></IoIosCloseCircle></td>     

        </tr>
    );
};

export default ExpenseItem;