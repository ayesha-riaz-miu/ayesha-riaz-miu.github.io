import axios from 'axios'
import React, { ChangeEvent, MouseEvent, useState } from 'react'

type Product={

    id:number,
    title:string,
    description:string,
    price:number
  
  }

type Props={
    addNewProd:(prod: Product)=>void

 }

export default function AddProduct(props:Props) {
    const {addNewProd} = props
const [title,settitle] = useState('')
const [price,setprice] = useState('')
const [description,setdescription] = useState('')


   

    const change_title=(e:ChangeEvent<HTMLInputElement>)=>{
        settitle(e.currentTarget.value)

    }
    const change_price=(e:ChangeEvent<HTMLInputElement>)=>{
        setprice(e.currentTarget.value)
    }
    const change_description=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setdescription(e.currentTarget.value)
    }


    const add_product=async(e:MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        const result = await axios.post('http://localhost:8000/products',{title,price,description})
        console.log(result.data)
        addNewProd(result.data)
    }
    

   
   
    return (
        
        <div><h2>Add a new Product</h2>
            <form >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input className="form-control" id="title"  value={title} onChange={change_title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" value={price} onChange={change_price}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows={3} onChange={change_description} value={description}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" onClick={add_product}>Submit</button>
            </form></div>
    )
}
