import React from 'react';

const Todolist = (props) => {
    
    return (
        <>
            <div className='todo-style'>
            <i className="fas fa-times" onClick ={()=> {
                props.onSelect(props.id)
            } } ></i> 
            <li> {props.itemVal} </li>
            </div>

        </>
    )

};

export default Todolist;