"use client"
import React, { useState } from "react";
import ProductList from '@/Components/ProductList'
import useGetProducts from '@/hooks/useGetProducts'
import { filterCategory } from "@/types/filter";
import { Product } from '@/types/product'
import Filter from "@/Components/Filter";

const page =  () => {
    const [selectedStatus , setSelectedStatus] = useState<filterCategory>(true)

  const {isError , isLoading , error , data} = useGetProducts(selectedStatus );

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
    </div>
  )
}

export default page