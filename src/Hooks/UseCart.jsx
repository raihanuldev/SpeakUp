import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseCart = () => {
    const {user} = useContext(AuthContex);

    const {data:cart=[],refetch,isLoading} = useQuery({
        queryKey: [ 'cart',user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        }
    })
    return [cart,refetch, isLoading]
};

export default UseCart;