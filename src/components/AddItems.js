import React,{useContext,useState} from 'react';
import {ListContext} from '../context/ListProvider';

function AddItems() {
    const {dispatch} = useContext(ListContext);
    const [items,setItems] = useState('');
    const handleSubmit=(e)=>{
       e.preventDefault();
       dispatch({type:"ADD_TODO",todo:{content:items}});
       setItems('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder="please enter text..." value={items} onChange={(e)=>setItems(e.target.value)} className="input" required/>
                <input type="submit" placeholder="submit" className="submit"/>
            </form>
        </div>
    )
}

export default AddItems;
