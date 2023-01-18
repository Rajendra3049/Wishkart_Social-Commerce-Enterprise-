import { Box, grid, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridProduct from "../components/allProducts/gridProduct.jsx";
import { getProducts } from "../redux/products/product.action.js";

const Products = () => {
  let { loading, error, data } = useSelector((store) => store.MangaeProducts);
  let dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    getProducts(dispatch);
  }, []);
  return (
    <Box>
      <Heading>Products</Heading>
      <SimpleGrid columns={[2, 2, 3, 4]} spacing={10}>
        {data.map((el) => {
          return <GridProduct key={el.id} props={el} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
