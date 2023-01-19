import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridProduct from "../../components/allProducts/gridProduct.jsx";
import { getProducts } from "../../redux/Products/product.action.js";

const BeauthHealth = () => {
  let { loading, error, data } = useSelector((store) => store.ProductsManager);
  let dispatch = useDispatch();
//   console.log(data) 
  let beautyHealth = data.filter((el)=>el.category=="Beauty and health")
  console.log(beautyHealth);
  useEffect(() => {
    getProducts(dispatch);
  }, []);
  return (
    <Box  mt={"150px"}>
      <Heading>BeauthHealth</Heading>
      <Box style={{width:"90%",margin:"auto"}} border="0px solid red">

        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}  >
          {beautyHealth.map((el) => {
            return( <GridProduct key={el.id} props={el} />);
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default BeauthHealth;
