import React,{useState, useEffect} from 'react'
import Form from './Form'
import List from './List'
import { v4 as uuidv4 } from 'uuid';
import bootstrap from 'bootstrap';

// or less ideally





const Main = () => {


const [inputs, setInputs] = useState({item: '', price: ''})
const [list, setList] = useState([]);
const [isEditing, setEditing] = useState(false);
const [count, setCount] = useState(0);
const [total, setTotal] = useState(0);

//functions 


//handle changes
const onChange =(e)=>{
  
  setInputs((prev)=>({...prev, [e.target.name]: e.target.value}))

}

// handle submitions
const onSubmit = (e)=>{
e.preventDefault();

 if (isEditing && inputs.item && inputs.price){
    
    const replacement = [...list];
    replacement[count] = {item: inputs.item, price: inputs.price, id: list[count].id}
setList(replacement)
setInputs({item: '', price: ''})
setEditing(false)
  }

  else{

    const start = inputs.item.split('').splice(0,1).toString();
  const end = inputs.item.split('').splice(1).join("");
  const upper = start.toUpperCase();
const ite = upper.concat(end)

const obj = {item: ite, price: inputs.price, id: uuidv4()}



setList( prev => ([...prev, obj]))
setInputs({item: '', price: ''})

  }

}

const del =(elem)=>{
  

  const el = list.filter((elemento)=>elemento.id !== elem);
  let elems = [...el];
  setList([...elems])
}

const edit=(elem)=>{
setEditing(true)
let i = 0;
for(i; i < list.length; i++){
  if (list[i].id === elem){
    setInputs({item: list[i].item, price: list[i].price})
    setCount(i);
  }
}
}

useEffect(() => {
  const total_de_valores=()=>{
    const listCopy = list;
    const listOfElems = [];
    listCopy.map((valor)=>{
      const x = valor.price;
      
    listOfElems.push(Number(x))

setTotal( listOfElems.reduce(reducir))


    function reducir(a, b){
      return a + b;
    }
    
    // console.log(total)

    })
    // console.log(elementoUnico)
    
  }
  total_de_valores()
 
}, [list])





  return (
    <div >
        <Form inputs = {inputs}
        onSubmit = {onSubmit}
        setInputs = {setInputs}
        onChange={onChange}
        isEditing = {isEditing}/>
        <br></br>
        <List 
        list ={list} 
        del = {del}
        edit = {edit}/>
       <hr></hr>
       <h3 className='h3color'>${total}</h3>
       <p className="text-primary">.text-primary</p>
    </div>
  )
}

export default Main