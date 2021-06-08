import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListComponent from './ListComponent';

const ToDoList=()=>{
    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);

    const itemEvent=(event)=>{
        setItem(event.target.value);
    }
    const storeItems =()=>{
        setNewItem((prevValue)=>{
            return [...prevValue,item]
        });
        setItem("");
    }
    return(
        <>
            <div className="main_class">
                <div className="center_div">
                    <br />
                    <h1>ToDoList</h1>
                    <br />
                    <input type="text" value={item} placeholder="Add an Item" onChange={itemEvent}/>
                    <Button className='newBtn' onClick={storeItems}> <AddIcon /> </Button>
                    <ol>
                    {
                        newitem.map((val,index)=>{
                            return <ListComponent key={index} text ={val}/>
                        })
                    }
                    </ol>
                    <br />
                </div>
            </div>
        </>
    );
}

export default ToDoList