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
const [valid , setValid] = useState(false)
const [todo , setTodo] = useState('')
useEffect  (() => { 
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
  setValid(false)
}
const edit = (todo) => {
  setTodo(todo.title)
  dispatch(deleteTodo(todo.id))

}
const markChecked = (id) => {
  dispatch(deleteTodo(id))
  alert('Marked as completed')
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
        isValid = {todo.length > 0 } 
        isInvalid = {todo.length === 0 && valid}
        aria-label="Enter Todo"
        aria-describedby="inputGroup-sizing-sm"
        value={todo}
        onKeyDown={(e) => {
          if(e.key === 'Enter') {
            adding()
          }
        }
        }
        onChange={(e) => {
          setTodo (e.target.value)
          setValid(true)  
        }}
        />
        
        <InputGroup.Text id="inputGroup-sizing-sm" style={{backgroundColor : '#6CCD4F' , cursor:'grab'}} onClick={adding}>Add</InputGroup.Text>
      </InputGroup>
   </div>

    <div className='flex justify-center'>
    <ListGroup as="ol" numbered>
      {
      allTodos.todoList.map((todo , index) => {
          return <ListGroup.Item id={todo.id} key={index} as="li">{todo.title}
          <span className='flex justify-end'><Badge onClick={() => markChecked(todo.id)} bg="primary" pill>
          ✔
        </Badge>
        <Badge onClick={()=> dispatch(deleteTodo(todo.id))} bg="secondary" style={{cursor : 'grab'}} pill>
        ❌
        </Badge>
        <Badge  bg="secondary" onClick={()=> edit(todo)} style={{cursor : 'grab' , color: 'black'}} pill>
        Edit
        </Badge></span>
        </ListGroup.Item>
      })} 
    </ListGroup>
    </div>
    </>
  )
}

export default Todo
