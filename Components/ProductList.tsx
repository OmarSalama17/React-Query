"use client"
import { Product } from "@/types/product";
import React, { useState } from "react";
import AddCount from "./AddCount";

type ProductListProps = {
  products: Product[];
};
const ProductList = ({ products }: ProductListProps) => {
const [count , setCount] = useState<number>(0)

function addCount(){
  setCount(count + 1)
  console.log("hallo");
  
}
  function removeItem(id: string) {
    products = products.filter((item) => item.id !== id);
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {products?.map((item) => {
        return (
          <div key={item?.id} className="bg-white shadow-2xl rounded-2xl text-black p-4">
            <li key={item?.id}>
              <img src={item?.image} alt={item?.title["en"]} />
              <h3>{item?.title["en"]}</h3>
              <p>{item?.description["en"]}</p> 
              <p>{item?.price} USD</p>
              <p>{count}</p>
              <AddCount addCount={addCount}/>
              <button className="cursor-pointer bg-blue-500 rounded-md p-3" onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
