import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
 

const Increment = () => {
const [num,setNum] = useState(0)

const increment = () =>{
    setNum(num+1)
}

const decrement = () => {
    if(num>0){
        setNum(num-1)
    }else{
        setNum(0)
    }
   
}

    return (
        <div className='mainDiv'>
            <div  className="centerDiv">
                <h1> {num} </h1>

                <div className=" btnDiv">
                    <Tooltip title="Add">
                        <Button onClick={increment} >
                            <AddIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Remove">
                        <Button onClick={decrement} >
                            <RemoveIcon />
                        </Button>
                    </Tooltip>
                </div>

            </div>

        </div>
    );
};

export default Increment;