import React,{useContext} from 'react';
import {ListContext} from '../context/ListProvider';

export const ListDetails = ()=>{
    const {todos,dispatch} = useContext(ListContext);
    return(
        todos.length>0 ?
        <div className="lists">
            <ul>
                {todos.map(todo=>{
                    return (<li key={todo.id} onClick={()=>dispatch({type:'REMOVE_TODO',id:todo.id})} className="item">{todo.content}</li>)
                })}
            </ul>
        </div>:
        <p className="message">you have no todos, add one?</p>
    )
}