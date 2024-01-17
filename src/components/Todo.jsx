import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useDispatch , useSelector} from 'react-redux';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import {addTodo , deleteTodo} from '../Features/TodoFeature'

function Todo() {

const allTodos = useSelector(state => state.Todos)
const dispatch = useDispatch()

const [todo , setTodo] = useState('')
useEffect  (() => { 
    console.log(allTodos , 'All todos')
}
, [allTodos])

const adding = () => {
  if(todo === '') {
      return
  }
    const newTodo = {
        title : todo,
        completed : false
    }
    dispatch(addTodo(newTodo))
    setTodo('')
}
const del = (id) => {
    dispatch(deleteTodo(id))
}

  return (
    <>
   <div className='flex justify-center' > 
   <InputGroup hasValidation size="sm" className="my-3 flex justify-center" style={{width : '30%'}}>
        <InputGroup.Text  style={{backgroundColor : '#DDEE35' , cursor:'grab'}} id="inputGroup-sizing-sm">Todo</InputGroup.Text>
        <Form.Control
        required
        placeholder='Enter Todo'
        type='text'
        isValid = {todo.length > 0} 
        isInvalid = {todo.length === 0}
          aria-label="Enter Todo"
          aria-describedby="inputGroup-sizing-sm"
          value={todo}
            onChange={(e) => setTodo (e.target.value)}
        />
        
        <InputGroup.Text id="inputGroup-sizing-sm" style={{backgroundColor : '#6CCD4F' , cursor:'grab'}} onClick={adding}>Add</InputGroup.Text>
      </InputGroup>
   </div>

    <div className='flex justify-center'>
    <ListGroup as="ol" numbered>
            
                {allTodos.todoList.map((todo , index) => {
                    return <ListGroup.Item id={todo.id} as="li">{todo.title}
                    <span className='flex justify-end'><Badge onClick={()=> del(todo.id)} bg="primary" pill>
                    ✔
                  </Badge>
                  <Badge onClick={()=> dispatch(deleteTodo(todo.id))} bg="secondary" style={{cursor : 'grab'}} pill>
                  ❌
                  </Badge></span>
                  </ListGroup.Item>
                })} 
            </ListGroup>
    </div>
    </>
  )
}

export default Todo
