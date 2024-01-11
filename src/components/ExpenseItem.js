import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaTimesCircle, FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleIncreaseBoudget = () => {

        const item = {
            name: props.name,
            quantity: 10,
        };

        dispatch({
            type: 'ADD_QUANTITY',
            payload: item,
        });
    };

    const handleDecreaseBoudget = () => {
        const item = {
            name: props.name,
            quantity: 10,
        };

        dispatch({
            type: 'RED_QUANTITY',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{parseInt(props.budget)}</td>
        <td><FaPlusCircle size='2.5em' color="chartreuse" onClick={handleIncreaseBoudget}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.5em' color="fuchsia" onClick={handleDecreaseBoudget}></FaMinusCircle></td>
        <td><FaTimesCircle size='2.5em' color="slategray" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;