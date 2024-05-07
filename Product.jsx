import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./project.module.css"

const Product = () => {
    let[state,setstate]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/").then((res)=>{
            setstate(res.data)
        })
        .catch(()=>{
            console.log("loading...");
        })
    },[])
  return (
    <div>
        {state.map((data)=>{
            return <div key={data.id} id={styles.div}>
                <h3> title:{data.title}</h3>
                <h3> price{data.price}</h3>
                <img src={data.image} alt="" id={styles.img} /><br/>
                <h3> category:{data.category}</h3><br/>
                <Link to={ `/cart/${data.id}`}>add to cart</Link><br/><br/>
            </div>
          
        })}

    </div>
  )
}

export default Product