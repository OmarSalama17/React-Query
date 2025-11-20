"use client"
import React, { useState } from "react";
import ProductList from '@/Components/ProductList'
import useGetProducts from '@/hooks/useGetProducts'
import { filterCategory } from "@/types/filter";
import { Product } from '@/types/product'
import Filter from "@/Components/Filter";

const page =  () => {
    const [selectedStatus , setSelectedStatus] = useState<filterCategory>(true)
  const [pagination , setPagination]  = useState<Number>(1)

  const {isError , isLoading , error , data} = useGetProducts(selectedStatus , pagination );

if(isLoading){
  return <div>loading</div>
}
if(isError){
  return <div>{error.message}</div>
}

  return (
    <div>
        <h1>products</h1>
        <Filter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus}/>
            <ProductList products={data as Product[]} />
            <div className="flex justify-center">
              <button onClick={() =>  setPagination(1)} className="p-4 rounded-md bg-amber-50 text-black m-2 cursor-pointer">1</button>
              <button onClick={() =>  setPagination(2)} className="p-4 rounded-md bg-amber-50 text-black m-2 cursor-pointer">2</button>
              <button onClick={() =>  setPagination(3)} className="p-4 rounded-md bg-amber-50 text-black m-2 cursor-pointer">3</button>
            </div>
    </div>
  )
}

export default page