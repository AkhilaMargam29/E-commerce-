import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from "./project.module.css"

const Cart = () => {
    let[state,setstate]=useState(null);
    let{id}=useParams();
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            setstate(res.data);
        }).catch(()=>{
            console.log("loading....");
        })
    },[])
  return (
    <div>
        {state==null?"nothing":(<div key={state.id}>
            <h3>{state.title}</h3>
            <h3>{state.category}</h3>
            <img src={state.image} alt="" id={styles.img1} />
            <h3>{state.price}</h3>
            {/* <h3>{state.rating.rate}</h3> */}
            {/* <h3>{state.rating.count}</h3> */}
            <Link to="/">go back</Link><br/><br/>
            <Link to={`/order/${state.id}`}>ordernow</Link>
        </div>)}
    </div>
  )
}
export default Cart