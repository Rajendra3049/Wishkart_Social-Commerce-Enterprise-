import { Heading } from "@chakra-ui/react"
import {useDispatch, useSelector} from "react-redux"

const Products = ()=>{
    let Products = useSelector((store)=>store.MangaeProducts)
    let dispatch = useDispatch()

    useSelector(()=>{
        dispatch(Products)
    })
    return(
        <div>
            <Heading>Products</Heading>
        </div>
    )
}

export default Products