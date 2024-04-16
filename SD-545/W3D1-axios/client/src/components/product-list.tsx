import React, { useEffect, useState } from 'react'
import axios from 'axios'

type Product={

    id:number,
    title:string,
    description:string,
    price:number
  
  }[]

type Props={
    product:Product
}


export default function ProductList(props:Props) {
    
const {product} = props

    
return (
        <div>
            
            <h2>Product List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Product</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(product=>(
                            <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                        </tr>

                        ))
                    }
                   
                    
                </tbody>
            </table>
        </div>
    )
}
