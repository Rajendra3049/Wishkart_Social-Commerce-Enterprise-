import { Box, Checkbox, Flex, Heading, Input, SimpleGrid, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridProduct from "../../components/allProducts/gridProduct.jsx";
import { getProducts } from "../../redux/Products/product.action.js";
 
// product filtering, product filter, allProductfilter checkbox filter

const Products = () => {
  let { loading, error, data } = useSelector((store) => store.ProductsManager);
  let dispatch = useDispatch();
  let [filtCred,setFiltCred] = useState({}) 
  // console.log(data);

  useEffect(() => {
    if(data.length ==0){
        getProducts(dispatch);
    }
  }, [])

  // console.log(filtCred.above100?"a":"b")
  let filtData = data.filter((el)=> (filtCred.above100? el.original_price>1000:"") || 
                                    (filtCred.a1000_500? (el.original_price<1000 && el.original_price>500):"") || 
                                    (filtCred.a500_300? (el.original_price<500 && el.original_price>300):"") ||
                                    (filtCred.below300? el.original_price<300:"" )
                                    )
// console.log(filtData)

  const check =(e)=>{
    console.log(e.target)

    const {name,checked} =e.target
    setFiltCred({
      ...filtCred,
      [name]:checked
    })

  }
  // if()
 
  return (
    <Box mt={"150px"} >
      <Heading>Products</Heading>
      <Flex>

        <Box width={"20%"}>
          <Heading>filter</Heading>
          <label htmlFor="">price</label>
            <Stack direction={"column"} ml="5%">
              
              <Checkbox onChange={(e)=>check(e)} name="above100" >Above 1000</Checkbox>
              <Checkbox onChange={(e)=>check(e)} name="a1000_500" >1000 - 500</Checkbox>
              <Checkbox onChange={(e)=>check(e)} name="a500_300" >500 - 300</Checkbox>
              <Checkbox onChange={(e)=>check(e)} name="below300" >Below 300</Checkbox>

            </Stack>

        </Box>
        <Box style={{width:"90%",margin:"auto"}} border="0px solid red">

          <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}  >
            { (filtData.length==0? data: filtData).map((el) => {

                return( <GridProduct key={el.id} props={el} />);
            })}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Products;
