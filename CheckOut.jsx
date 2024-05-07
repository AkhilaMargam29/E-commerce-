import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CheckOut = () => {
    let[state,setstate]=useState()
    let changevalue=(e)=>{
        setstate(e.target.value);
    }
    let[id]=useParams()
    useEffect(()=>{
       axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
        setstate(res.data)
       }).catch(()=>{
        console.log("loading...");
       })
    },[])
    let allow=()=>{
        if(state==""){
        }
        else{

        }
    }
  return (
    <div>
        <form action="" value={state} onChange={changevalue}>
            <input type="text" name="" id="" />
           <button onClick={allow}></button>
        </form>
    </div>
  )
}
export default CheckOut