import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Order = () => {
   let [state,setstate]=useState(null);
   let[count,setCount]=useState(1)
   let[id]=useParams()
   useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
        setstate(res.data);
    }).catch(()=>{
        console.log("loading...");
    })
   },[])
   let increase=()=>{
    setCount(count+1);

   }
   let decrease=()=>{
    if(count<=1){
    }
    else{
        setCount(count-1);
    }
    
   }
   let totalprice=()=>{
    return count*state.price;
   }

  return (
    <div>
        {state==null?"nothing":(<div key={state.id}>
            <h3>{state.title}</h3>
            <h3>{state.category}</h3>
            <h3> PRICE:{state.price}</h3>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <h3> total-price:{totalprice}</h3>

        </div>)}
        
    </div>
  )
}
export default Order