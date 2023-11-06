import React from 'react'
import Element from './Element'

const List = ({list, del, edit}) => {
  return (
    <div>
   <div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class=" p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-start">Item</div>
    </div>
    <div class="col">
      <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">Price</div>
    </div>
  </div>
</div>

      <ul>
        {list.map((elem)=>(
         <li key={elem.id}>
          <Element
         elem ={elem}
         del = {del}
        edit = {edit}/>
         </li>
        ))}
        
        </ul>
        </div>
  )
}

export default List