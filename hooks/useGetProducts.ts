import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios"
import { Product } from "../types/product";
import { filterCategory } from "@/types/filter";


const fetchProducts = async (selectedStatus:filterCategory) :Promise<Product[]> => {
    const res = await axios.get(`https://68f816d9deff18f212b51c45.mockapi.io/api/product/${selectedStatus ? `?isActive=${selectedStatus}` : ''}`);
    
    return res.data as Product[]
}
const useGetProducts = (selectedStatus :filterCategory):UseQueryResult<Product[] , Error> => {
    return useQuery<Product[] , Error>({queryKey: ['products' , selectedStatus], queryFn: ()=> fetchProducts(selectedStatus)})
}

export default useGetProducts