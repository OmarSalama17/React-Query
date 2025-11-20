import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../types/product";
import { filterCategory } from "@/types/filter";

const fetchProducts = async (
  selectedStatus: filterCategory,
  pagination:Number
): Promise<Product[]> => {
//   const res = await axios.get(`https://68f816d9deff18f212b51c45.mockapi.io/api/product/${selectedStatus ? `?isActive=${selectedStatus}` : ""}`
  const res = await axios.get(
    `https://68f816d9deff18f212b51c45.mockapi.io/api/product?page=${pagination}&limit=10`
  );
  if (res.status !== 200) {
    throw new Error("Failed to fetch products");
  }

  return res.data as Product[];
};
const useGetProducts = (
  selectedStatus: filterCategory , pagination:Number
): UseQueryResult<Product[], Error> => {
  return useQuery<Product[], Error>({
    queryKey: ["products", selectedStatus , pagination],
    queryFn: () => fetchProducts(selectedStatus , pagination),
    // staleTime: 1000 * 5,
    // refetchInterval: 1000 * 6,
  });
};

export default useGetProducts;
