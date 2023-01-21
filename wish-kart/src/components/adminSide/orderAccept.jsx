import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import OrderDetails from "./orderDetails";
import AcceptOrderButton from "./acceptBtn";

async function GetAllUsers(setUsers) {
  let res = await fetch("https://meesho-backend-3037.onrender.com/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  setUsers(data);
}

export default function OrderAccept() {
  const [date, setDate] = React.useState("");
  const [allUsers, setUsers] = React.useState([]);

  React.useEffect(() => {
    GetAllUsers(setUsers);

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;
    setDate(currentDate);
  });
  return (
    <Box
      width={"80%"}
      margin={"auto"}
      border={"1px solid #ccc"}
      mt={"4rem"}
      minH={"30rem"}
      padding={"0.5rem"}>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th
                w={"25%"}
                textAlign={"center"}
                fontSize={["1rem", "1.5rem", "1.8rem"]}>
                Date
              </Th>
              <Th
                w={"25%"}
                textAlign={"center"}
                fontSize={["1rem", "1.5rem", "1.8rem"]}>
                User
              </Th>
              <Th
                w={"25%"}
                textAlign={"center"}
                fontSize={["1rem", "1.5rem", "1.8rem"]}>
                Orders
              </Th>
              <Th
                w={"25%"}
                textAlign={"center"}
                fontSize={["1rem", "1.5rem", "1.8rem"]}>
                Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {allUsers.map((user) => {
              if (user.order.length > 0) {
                return (
                  <>
                    {" "}
                    <Tr>
                      <Td w={"25%"} textAlign={"center"}>
                        {date}
                      </Td>
                      <Td w={"25%"} textAlign={"center"}>
                        {user.mobile_no}
                      </Td>
                      <Td w={"25%"} textAlign={"center"}>
                        <OrderDetails
                          text={user.order.length}
                          data={user.order}
                        />
                      </Td>
                      <Td>
                        <AcceptOrderButton />
                      </Td>
                    </Tr>
                  </>
                );
              }
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

{
  /* */
}
