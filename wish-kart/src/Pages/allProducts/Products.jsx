import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Checkbox, Flex, Heading, Hide, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Show, SimpleGrid, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridProduct from "../../components/allProducts/gridProduct.jsx";
import Pagination from "../../components/allProducts/pagination.jsx";
import Loader from "../../components/Loader.jsx";
import { getProducts } from "../../redux/Products/product.action.js";

// product filtering, product filter, allProductfilter checkbox filter

const Products = () => {
  let { loading, error, data } = useSelector((store) => store.ProductsManager);
  let dispatch = useDispatch();
  let [filtCred, setFiltCred] = useState({})
  const [page, setPage] = useState(1)
  const [paginationData, setPaginationData] = useState([])
  // ***********************************pagination*************************************
  const changePage = (currentpage) => {
    setPage(currentpage)
    setPaginationData([])

    for (let i = page*10-10; i <= page*10; i++) {
      filtData.length == 0 ? console.log(data) : console.log(filtData)
      if ((filtData.length == 0 ? data : filtData)[i]) {

        setPaginationData((prePag) => [...prePag, (filtData.length == 0 ? data : filtData)[i]])
      }
    }
  }
  // console.log(data);
  const setpageData = () => {
    setPaginationData([])
    for (let i = page*10-10; i<=page*9; i++) {

      if ((filtData.length == 0 ? data : filtData)[i]) {

        setPaginationData((prePag) => [...prePag, (filtData.length == 0 ? data : filtData)[i]])
      }

    }
  }
  // ***********************************pagination********************************
  console.log(paginationData)
  useEffect(() => {
    if (data.length == 0) {
      getProducts(dispatch);
    }
    setpageData()                                 //part of pagination

  }, [])


  // console.log(filtCred.above100?"a":"b")
  let filtData = data.filter((el) => ((filtCred.above100 ? el.discounted_price > 1000 : "") ||
    (filtCred.a1000_500 ? (el.discounted_price < 1000 && el.discounted_price > 500) : "") ||
    (filtCred.a500_300 ? (el.discounted_price < 500 && el.discounted_price > 300) : "") ||
    (filtCred.below300 ? el.discounted_price < 300 : ""))
    &&
    ((filtCred.Sarees ? el.category == "Sarees" : "") ||
      (filtCred.Dresses ? el.category == "Dresses" : "") ||
      (filtCred.Mens_Top_Were ? el.category == "Mens Top Were" : "") ||
      (filtCred.Jewellery ? el.category == "Jewellery" : "") ||
      (filtCred.Beauty_and_health ? el.category == "Beauty and health" : "") ||
      (filtCred.Bags_and_Footwear ? el.category == "Bags and Footwear" : "") ||
      (filtCred.Home_and_Kitchen ? el.category == "Home and Kitchen" : ""))
  )





  const check = (e) => {
    console.log(e.target)

    const { name, checked } = e.target
    setFiltCred({
      ...filtCred,
      [name]: checked
    })
    setPage(1)                                                 //part of paginaion 
  }
  if (loading) {
    <Loader />
  }


  return (
    <Box mt={"150px"} >


      <Box>
        <Show below="md">
          <Menu>
            <MenuButton as={Button} >
              Filter
            </MenuButton>
            <MenuList>
              <MenuOptionGroup title="Price">
                <Stack direction={"column"} ml="15%" >

                  <Checkbox onChange={(e) => check(e)} name="above100" size={"lg"}>Above 1000</Checkbox>
                  <Checkbox onChange={(e) => check(e)} name="a1000_500" size={"lg"} >1000 - 500</Checkbox>
                  <Checkbox onChange={(e) => check(e)} name="a500_300" size={"lg"}>500 - 300</Checkbox>
                  <Checkbox onChange={(e) => check(e)} name="below300" size={"lg"} >Below 300</Checkbox>
                </Stack>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup title="Category">
                <Stack direction={"column"} ml="15%">

                  <Checkbox onChange={(e) => check(e)} name="Sarees" size={"lg"}>Sarees</Checkbox>
                  <Checkbox onChange={(e) => check(e)} name="Dresses" size={"lg"}>Dresses</Checkbox>
                  <Checkbox onChange={(e) => check(e)} name="Mens_Top_Were" size={"lg"} >Mens Top Were</Checkbox>
                  <Checkbox onChange={(e) => check(e)} name="Jewellery" size={"lg"}>Jewellery</Checkbox>
                  <Checkbox onChange={(e) => check(e)} name="Beauty_and_health" size={"lg"}>Beauty and health</Checkbox>
                  <Checkbox onChange={(e) => check(e)} name="Bags_and_Footwear" size={"lg"} >Bags and Footwear</Checkbox>
                  <Checkbox onChange={(e) => check(e)} name="Home_and_Kitchen" size={"lg"}>Home and Kitchen</Checkbox>

                </Stack>
              </MenuOptionGroup>


            </MenuList>
          </Menu>
        </Show>
      </Box>

      <Flex>

        <Hide below="md" >
          <Box width={"20%"}>
            <Heading color={"#f43397"} marginLeft="5%">Filter</Heading>
            <Box>
              <Accordion>


                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex='1' fontSize={20} textAlign='left' marginLeft={"7%"}> Price</Box>
                  </AccordionButton>
                  {/* <AccordionPanel> */}
                  <Stack direction={"column"} ml="15%" >

                    <Checkbox onChange={(e) => check(e)} name="above100" size={"lg"}>Above 1000</Checkbox>
                    <Checkbox onChange={(e) => check(e)} name="a1000_500" size={"lg"} >1000 - 500</Checkbox>
                    <Checkbox onChange={(e) => check(e)} name="a500_300" size={"lg"}>500 - 300</Checkbox>
                    <Checkbox onChange={(e) => check(e)} name="below300" size={"lg"} >Below 300</Checkbox>

                  </Stack>
                  {/* </AccordionPanel> */}
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex='1' fontSize={20} textAlign='left' marginLeft={"7%"}> Category</Box>
                  </AccordionButton>
                  {/* <AccordionPanel> */}
                  <Stack direction={"column"} ml="15%">

                    <Checkbox onChange={(e) => check(e)} name="Sarees" size={"lg"}>Sarees</Checkbox>
                    <Checkbox onChange={(e) => check(e)} name="Dresses" size={"lg"}>Dresses</Checkbox>
                    <Checkbox onChange={(e) => check(e)} name="Mens_Top_Were" size={"lg"} >Mens Top Were</Checkbox>
                    <Checkbox onChange={(e) => check(e)} name="Jewellery" size={"lg"}>Jewellery</Checkbox>
                    <Checkbox onChange={(e) => check(e)} name="Beauty_and_health" size={"lg"}>Beauty and health</Checkbox>
                    <Checkbox onChange={(e) => check(e)} name="Bags_and_Footwear" size={"lg"} >Bags and Footwear</Checkbox>
                    <Checkbox onChange={(e) => check(e)} name="Home_and_Kitchen" size={"lg"}>Home and Kitchen</Checkbox>

                  </Stack>
                  {/* </AccordionPanel> */}
                </AccordionItem>
              </Accordion>
            </Box>
          </Box>
        </Hide>



        <Box style={{ width: "90%", margin: "auto" }} border="0px solid red">

          <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}  >
            {(paginationData).map((el) => {

              return (<GridProduct key={el.id} props={el} />);
            })}
          </SimpleGrid>
        </Box>

      </Flex>
      <Box textAlign={"center"} marginTop="50px">
        <Pagination page={page} changePage={changePage} data={filtData.length == 0 ? data : filtData} />
      </Box>
    </Box>
  );
};

export default Products;
