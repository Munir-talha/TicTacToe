import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todoList: [{
        id:nanoid(),
        title:"Namwaz",
        completed:false
    }]
}


const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo : (state , action) => {
            console.log(action , " action")
            const newTodo = {
                id:nanoid(),
                title:action.payload.title,
                completed:action.payload.completed
            }
            state.todoList.push(newTodo)
        },
        deleteTodo : (state , action)=>{
            console.log(action.payload , " action")
            state.todoList.filter(todo => todo.id !== action.payload)
        }
    }

})

export const {addTodo , deleteTodo} = todoSlice.actions

export default todoSlice.reducer
