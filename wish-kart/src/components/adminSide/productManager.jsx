import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";
import { adminGetProducts } from "../../redux/admin/admin.action";
import Paginate from "./pagination";
import { Input, Select } from "antd";
import {
  Box,
  Button,
  Image,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function ProductManager() {
  let dispatch = useDispatch();
  const { loading, products, adminAuth, token, pagination } = useSelector(
    (store) => store.AdminManager
  );

  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState({
    page:
      pagination === undefined || pagination.currentPage === undefined
        ? 1
        : pagination.currentPage,
    category: "#",
    order: "#",
    title: "",
  });

  React.useEffect(() => {
    if (!adminAuth) {
      window.alert("You are not authenticated");
      navigate("/adminsignup");
    } else {
      dispatch(adminGetProducts({ token, query }));
    }
  }, [query]);

  // React.useEffect(() => {}, [products.lenhth == 0]);

  if (loading) {
    return <Loader />;
  } else {
    if (products.length === 0) {
      return (
        <Box w="80%" ml="170px">
          <Image src={"NotFound.jpg"} w="80%" />
          <Button
            colorScheme="pink"
            fontSize={"4xl"}
            w="7xl"
            // border="1px solid red"
            p="10px"
            h="40px"
            onClick={() => {
              setQuery({ page: 1, category: "#", order: "#", title: "" });
            }}>
            Go Back
          </Button>
        </Box>
      );
    } else {
      return (
        <>
          {" "}
          <Box
            mt="10px"
            mb="10px"
            display={"grid"}
            gridTemplateColumns={"repeat(4,1fr)"}
            columnGap={"10"}>
            <InputGroup>
              <InputRightElement
                cursor={"pointer"}
                fontSize={"2xl"}
                children={<SearchIcon color="gray.300" />}
                pr={"5px"}
                pt={"5px"}
                onClick={() => {
                  setQuery({
                    ...query,
                    title: search,
                    category: "#",
                    order: "#",
                    page: 1,
                  });
                }}
              />
              <Input
                type="text"
                placeholder="Search"
                // borderColor="#ccc"
                value={search}
                onInput={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </InputGroup>
            <Select
              value={query.category}
              placeholder="Select category"
              // borderColor="#ccc"
              color="#ff4397"
              padding="1rem"
              width="80%"
              mt="1rem"
              onChange={(event) => {
                console.log(event);
                setQuery({ ...query, title: "", category: event, page: 1 });
              }}>
              <option value="#">All categories</option>
              <option value="Sarees">Sarees</option>
              <option value="Jewellery">Jewellery</option>
              <option value="Dresses">Dresses</option>
              <option value="Mens Top Were">Mens Top Wear</option>
              <option value="Beauty and health">Beauty and health</option>
              <option value="Bags and Footwear">Bags and Footwear</option>
              <option value="Home and Kitchen">Home and Kitchen</option>
            </Select>
            <Select
              value={query.order}
              placeholder="Select by price"
              // borderColor="#ccc"
              color="#ff4397"
              padding="1rem"
              width="80%"
              mt="1rem"
              onChange={(event) => {
                console.log(event);
                setQuery({ ...query, title: "", order: event, page: 1 });
              }}>
              <option value="#">Sort by price</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </Select>
          </Box>
          <div>
            {products &&
              products.map((e) => (
                <ProductCard
                  key={e.id}
                  singleData={e}
                  token={token}
                  query={query}
                  setQuery={setQuery}
                />
              ))}
          </div>
          <div>
            <Paginate
              pagination={pagination}
              query={query}
              setQuery={setQuery}
            />
          </div>
        </>
      );
    }
  }
}
