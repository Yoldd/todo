import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const iedit = <FontAwesomeIcon icon={faPen} size="2xs" />
const idelete = <FontAwesomeIcon icon={faTrashCan} size="2xs" />
const Element = ({elem, del, edit}) => {
  return (
    
    <div class="container">

  <div class="row">

  
    


    <div class="col">
    {elem.item}
    </div>
    <div class="col">
    $ {elem.price}
    </div>
    <div class="col">
    <button onClick={()=>edit(elem.id)}>{iedit}</button>{" "}
    <button onClick={()=>del(elem.id)}>{idelete}</button>
    </div>
    
    </div>
    </div>
   
  )
}

export default Element