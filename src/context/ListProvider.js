import React,{createContext,useReducer,useEffect} from 'react';
import { todoReducer } from '../reducer/todoReducer';

export const ListContext = createContext();

const ListProvider = (props)=>{
    const [todos,dispatch]= useReducer(todoReducer,[],()=>{
        const value = localStorage.getItem('todos');
        return value ? JSON.parse(value):[];
    })
    useEffect(()=>{
       localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])

    return(
        <ListContext.Provider value={{todos,dispatch}}>
         {props.children}
        </ListContext.Provider>
    )
}

export default ListProvider;