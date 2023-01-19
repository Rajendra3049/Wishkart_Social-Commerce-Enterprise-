import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridProduct from "../../components/allProducts/gridProduct.jsx";
import { getProducts } from "../../redux/Products/product.action.js";

const Jewellery = () => {
  let { loading, error, data } = useSelector((store) => store.ProductsManager);
  let dispatch = useDispatch();
//   console.log(data) 
  let jewellery = data.filter((el)=>el.category=="Jewellery")
  console.log(jewellery);
  useEffect(() => {
    getProducts(dispatch);
  }, []);
  return (
    <Box  mt={"150px"}>
      <Heading>Jewellery</Heading>
      <Box style={{width:"90%",margin:"auto"}} border="0px solid red">

        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}  >
          {jewellery.map((el) => {
            return( <GridProduct key={el.id} props={el} />);
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Jewellery;
