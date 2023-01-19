import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./product.actionTypes.js"
import axios from "axios"

export const getProducts = async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})
    try{
        let res = await axios.get("https://meesho-database.vercel.app/products")
        // console.log(res.data)
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
    }catch(error){
        dispatch({type:GET_PRODUCTS_ERROR,payload:error.message})
    }
}

