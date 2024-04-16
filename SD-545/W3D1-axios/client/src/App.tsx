import React, { useEffect, useState } from 'react';
import ProductList from './components/product-list';
import AddProduct from './components/add-product';

import axios from 'axios';



type Product={

  id:number,
  title:string,
  price:number
  description:string,
 

}

function App() {

  const [product,setProduct] = useState<Product[]>([])

    useEffect(()=>{
      async function get_data(){
        const result=await axios.get('http://localhost:8000/products')
       
        setProduct(result.data)

       }
       get_data()
    },[])


    const addNewProd = (prod: Product) => {
      setProduct([...product, prod]);
    }

  
  return (
    <div className="container">
      <ProductList  product={product}/>
      <AddProduct addNewProd={addNewProd} />
    </div>
  );
}

export default App;
