import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Checkbox, Flex, Heading, Input, SimpleGrid, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridProduct from "../../components/allProducts/gridProduct.jsx";
import Loader from "../../components/Loader.jsx";
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
  let filtData = data.filter((el)=> ((filtCred.above100? el.discounted_price>1000:"") || 
                                    (filtCred.a1000_500? (el.discounted_price<1000 && el.discounted_price>500):"") || 
                                    (filtCred.a500_300? (el.discounted_price<500 && el.discounted_price>300):"") ||
                                    (filtCred.below300? el.discounted_price<300:"" ))
                                     && 
                                    ((filtCred.Sarees? el.category=="Sarees":"") || 
                                    (filtCred.Dresses? el.category=="Dresses":"") || 
                                    (filtCred.Mens_Top_Were? el.category=="Mens Top Were":"") ||
                                    (filtCred.Jewellery? el.category=="Jewellery":"" ) ||
                                    (filtCred.Beauty_and_health? el.category=="Beauty and health":"" ) ||
                                    (filtCred.Bags_and_Footwear? el.category=="Bags and Footwear":"" ) ||
                                    (filtCred.Home_and_Kitchen? el.category=="Home and Kitchen":"" ))
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
  if(loading){
    <Loader />
  }
 
  return (
    <Box mt={"150px"} >
      
      <Flex>

        <Box width={"20%"}>
          <Heading>filter</Heading>
          <Box>
            <Accordion>
              

              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex='1' fontSize={20} textAlign='left'> Price</Box>
                </AccordionButton>
                <AccordionPanel>
                <Stack  direction={"column"} ml="5%">
              
                  <Checkbox onChange={(e)=>check(e)} name="above100" size={"lg"}>Above 1000</Checkbox>
                  <Checkbox onChange={(e)=>check(e)} name="a1000_500" size={"lg"} >1000 - 500</Checkbox>
                  <Checkbox onChange={(e)=>check(e)} name="a500_300" size={"lg"}>500 - 300</Checkbox>
                  <Checkbox onChange={(e)=>check(e)} name="below300" size={"lg"} >Below 300</Checkbox>

                </Stack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box as="span" flex='1' fontSize={20} textAlign='left'> Category</Box>
                </AccordionButton>
                <AccordionPanel>
                <Stack  direction={"column"} ml="5%">
                
                  <Checkbox onChange={(e)=>check(e)} name="Sarees" size={"lg"}>Sarees</Checkbox>
                  <Checkbox onChange={(e)=>check(e)} name="Dresses" size={"lg"}>Dresses</Checkbox>
                  <Checkbox onChange={(e)=>check(e)} name="Mens_Top_Were" size={"lg"} >Mens Top Were</Checkbox>
                  <Checkbox onChange={(e)=>check(e)} name="Jewellery" size={"lg"}>Jewellery</Checkbox>
                  <Checkbox onChange={(e)=>check(e)} name="Beauty_and_health" size={"lg"}>Beauty and health</Checkbox>
                  <Checkbox onChange={(e)=>check(e)} name="Bags_and_Footwear" size={"lg"} >Bags and Footwear</Checkbox>
                  <Checkbox onChange={(e)=>check(e)} name="Home_and_Kitchen" size={"lg"}>Home and Kitchen</Checkbox>

                </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          
            

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
