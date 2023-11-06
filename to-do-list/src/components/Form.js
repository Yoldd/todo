import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const add = <FontAwesomeIcon icon={faPlus} size="2xs"/>
const editing = <FontAwesomeIcon icon={faPenToSquare} size="2xs" />

const Form = ({inputs, isEditing, onChange, onSubmit}) => {
  return (
    <div  > 
      <form onSubmit={onSubmit}>
      
      <input type='text'
      value={inputs.item}
      name='item'
      onChange={onChange}
      placeholder='Enter new Item here'
      required/>
      {" "}
      
      <input type='text'
      value={inputs.price}
      name='price'
      onChange={onChange}
      placeholder='Enter Price here'
       required/>
      {" "}
      <button type='submit'> { (isEditing)?  editing: add } </button>

</form>
    </div>
  )
}

export default Form