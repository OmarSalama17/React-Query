"use client"
import ProductList from '@/Components/ProductList'
import useGetProducts from '@/hooks/useGetProducts'
import { Product } from '@/types/product'
import React from 'react'

const page =  () => {
  const {isError , isLoading , error , data} = useGetProducts();
if(isLoading){
  return <div>loading</div>
}
if(isError){
  return <div>{error.message}</div>
}

  return (
    <div>
        <h1>products</h1>
            <ProductList products={data as Product[]} />
    </div>
  )
}

export default page