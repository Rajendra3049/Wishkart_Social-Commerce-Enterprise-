import React from "react";
import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  grid,
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { adminGetDashboard } from "../../redux/admin/admin.action";
import { DoughnutChart } from "./pieChart";
import Loader from "../Loader";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, token, dashboard, admin } = useSelector(
    (store) => store.AdminManager
  );

  React.useEffect(() => {
    dispatch(adminGetDashboard(token));
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Grid
        mt="10%"
        gridTemplateColumns={"25% 40%"}
        justifyContent={"space-evenly"}
        alignItems={"center"}>
        <Box
          p={8}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset">
          <Flex direction="column" alignItems="center" mb={8}>
            <Heading fontSize="4xl" fontWeight="bold" textAlign="center" mb={2}>
              Welcome, {admin.username}
            </Heading>
            <Text
              fontSize="xl"
              fontWeight="medium"
              textAlign="center"
              color="gray.600">
              to the dashboard
            </Text>
          </Flex>
          <Box
            backgroundColor="white"
            borderRadius="md"
            boxShadow="md"
            p={8}
            w="full"
            mb={4}>
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
              <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                Total Products:
              </Text>
              <Text fontSize="3xl" fontWeight="semibold" color="teal.500">
                {dashboard !== "" ? dashboard.products : null}
              </Text>
            </Flex>
            <Divider />
            <Flex justifyContent="space-between" alignItems="center" mt={4}>
              <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                Total Orders:
              </Text>
              <Text fontSize="3xl" fontWeight="semibold" color="teal.500">
                {dashboard !== "" ? dashboard.Orders : null}
              </Text>
            </Flex>
          </Box>
        </Box>

        <Box minH={"500px"}>
          {dashboard !== "" ? (
            <DoughnutChart
              products={dashboard.products}
              category={dashboard.category}
            />
          ) : (
            <Box w="200px" mt="30%">
              <Image
                src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif"
                alt="small loader"
              />
            </Box>
          )}
        </Box>
      </Grid>
    );
  }
};

export default Dashboard;
