import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const useCart = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure= useAxiosSecure()
    const {refetch, data : carts=[]} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/cartItems?email=${user?.email}`)
            return res.data;
        }
    })
    return [carts,refetch]
};

export default useCart;