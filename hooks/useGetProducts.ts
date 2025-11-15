import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { Product } from "../types/product";

const fetchProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data as Product[]
}
const useGetProducts = () => {
    const query = useQuery({queryKey: ['products'], queryFn: fetchProducts})

  return query
}

export default useGetProducts