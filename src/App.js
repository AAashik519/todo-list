import React, { useState } from 'react';
import Todolist from './Component/Todolist';

const App = () => {
  const [inputList, setInputList] = useState(" ")
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);

  }
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });
    setInputList('')
  }



  const  deleteItems= (id)=>{
     setItems((oldItems)=>{
       return oldItems.filter((arrElem,index)=>{
         return index !==id;
       })
     } )
  }

  return (
    <div className='main-div'>
      <div className='center-div'>
        <br />
        <h1>Your notes </h1>
        <br />
        <input type="text" placeholder='Add a Items' value={inputList} onChange={itemEvent} />

        <button onClick={listOfItems}> + </button>


        <ol>
          {
            items.map((itemVal, index) => {
              return <Todolist
                key={index}
                id={index}
                itemVal={itemVal}
                onSelect ={deleteItems}
              ></Todolist>
            })
          }
        </ol>


      </div>

    </div>
  );
};

export default App;