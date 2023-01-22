import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Hide,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  MenuOptionGroup,
  Show,
  SimpleGrid,
  Stack,
  Checkbox as ChakraCheckBox,
} from "@chakra-ui/react";
import { Checkbox } from "antd";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridProduct from "../../components/allProducts/gridProduct.jsx";
import Loader from "../../components/Loader.jsx";
import { getProducts } from "../../redux/Products/product.action.js";

const Men = () => {
  let { loading, error, data } = useSelector((store) => store.ProductsManager);
  let dispatch = useDispatch();
  let [filtCred, setFiltCred] = useState({});

  //   console.log(data)
  let beautyHealth = data.filter((el) => el.category == "Beauty and health");
  console.log(beautyHealth);

  let filtData = beautyHealth.filter(
    (el) =>
      ((filtCred.above100 ? el.discounted_price > 1000 : "") ||
        (filtCred.a1000_500
          ? el.discounted_price < 1000 && el.discounted_price > 500
          : "") ||
        (filtCred.a500_300
          ? el.discounted_price < 500 && el.discounted_price > 300
          : "") ||
        (filtCred.below300 ? el.discounted_price < 300 : "")) &&
      ((filtCred.ratingTop ? el.rating > 4.5 : "") ||
        (filtCred.ratingTop2 ? el.rating < 4.5 && el.rating > 4 : "") ||
        (filtCred.a4_3 ? el.rating < 4 && el.rating > 3 : "") ||
        (filtCred.a3_2 ? el.rating < 3 : "") ||
        (filtCred.below2 ? el.rating < 2 : ""))
  );
  useEffect(() => {
    if (data.length == 0) {
      getProducts(dispatch);
    }
  }, []);
  console.log(filtData);

  const check = (e) => {
    console.log(e.target);

    const { name, checked } = e.target;
    setFiltCred({
      ...filtCred,
      [name]: checked,
    });
  };
  if (loading) {
    <Loader />;
  }

  return (
    <Box mt={"150px"}>
      <Box>
        <Show below="md">
          <Menu>
            <MenuButton as={Button}>Filter</MenuButton>
            <MenuList>
              <MenuOptionGroup title="Price">
                <Stack direction={"column"} ml="15%">
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="above100"
                    size={"lg"}>
                    Above 1000
                  </ChakraCheckBox>
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="a1000_500"
                    size={"lg"}>
                    1000 - 500
                  </ChakraCheckBox>
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="a500_300"
                    size={"lg"}>
                    500 - 300
                  </ChakraCheckBox>
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="below300"
                    size={"lg"}>
                    Below 300
                  </ChakraCheckBox>
                </Stack>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup title="Category">
                <Stack direction={"column"} ml="15%">
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="ratingTop"
                    size={"lg"}>
                    Above 4.5
                  </ChakraCheckBox>
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="ratingTop2"
                    size={"lg"}>
                    4.5 - 4
                  </ChakraCheckBox>
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="a4_3"
                    size={"lg"}>
                    4 - 3
                  </ChakraCheckBox>
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="a3-2"
                    size={"lg"}>
                    3 - 2
                  </ChakraCheckBox>
                  <ChakraCheckBox
                    onChange={(e) => check(e)}
                    name="below2"
                    size={"lg"}>
                    below 2
                  </ChakraCheckBox>
                </Stack>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Show>
      </Box>

      <Flex>
        <Hide below="md">
          <Box width={"20%"}>
            <Heading color={"#f43397"} marginLeft="5%">
              Filter
            </Heading>
            <Box>
              <Accordion>
                <AccordionItem>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      fontSize={20}
                      textAlign="left"
                      ml={"7%"}>
                      {" "}
                      Price
                    </Box>
                  </AccordionButton>
                  {/* <AccordionPanel> */}
                  <Stack direction={"column"} ml="15%">
                    <Checkbox
                      onChange={(e) => check(e)}
                      name="above100"
                      size={"lg"}
                      style={{ marginLeft: "5px" }}>
                      Above 1000
                    </Checkbox>
                    <Checkbox
                      onChange={(e) => check(e)}
                      name="a1000_500"
                      size={"lg"}>
                      1000 - 500
                    </Checkbox>
                    <Checkbox
                      onChange={(e) => check(e)}
                      name="a500_300"
                      size={"lg"}>
                      500 - 300
                    </Checkbox>
                    <Checkbox
                      onChange={(e) => check(e)}
                      name="below300"
                      size={"lg"}>
                      Below 300
                    </Checkbox>
                  </Stack>
                  {/* </AccordionPanel> */}
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      fontSize={20}
                      textAlign="left"
                      marginLeft={"7%"}>
                      {" "}
                      Category
                    </Box>
                  </AccordionButton>
                  {/* <AccordionPanel> */}
                  <Stack direction={"column"} ml="15%">
                    <Checkbox
                      onChange={(e) => check(e)}
                      name="ratingTop"
                      size={"lg"}>
                      Above 4.5
                    </Checkbox>
                    <Checkbox
                      onChange={(e) => check(e)}
                      name="ratingTop2"
                      size={"lg"}>
                      4.5 - 4
                    </Checkbox>
                    <Checkbox
                      onChange={(e) => check(e)}
                      name="a4_3"
                      size={"lg"}>
                      4 - 3
                    </Checkbox>
                    <Checkbox
                      onChange={(e) => check(e)}
                      name="a3-2"
                      size={"lg"}>
                      3 - 2
                    </Checkbox>
                    <Checkbox
                      onChange={(e) => check(e)}
                      name="below2"
                      size={"lg"}>
                      below 2
                    </Checkbox>
                  </Stack>
                  {/* </AccordionPanel> */}
                </AccordionItem>
              </Accordion>
            </Box>
          </Box>
        </Hide>
        <Box style={{ width: "90%", margin: "auto" }} border="0px solid red">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
            {(filtData.length == 0 ? beautyHealth : filtData).map((el) => {
              return <GridProduct key={el.id} props={el} />;
            })}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Men;
