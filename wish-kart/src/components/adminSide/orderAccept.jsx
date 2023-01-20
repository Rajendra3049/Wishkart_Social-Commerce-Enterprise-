import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";

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
  const [ready, setReady] = React.useState(false);

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
    <Box width={"80%"} margin={"auto"}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th fontSize={["1rem", "1.5rem", "1.8rem"]}>Date</Th>
              <Th fontSize={["1rem", "1.5rem", "1.8rem"]}>User</Th>
              <Th fontSize={["1rem", "1.5rem", "1.8rem"]}>Orders</Th>
              <Th fontSize={["1rem", "1.5rem", "1.8rem"]}>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allUsers.map((user) => {
              if (user.order.length > 0) {
                return (
                  <>
                    {" "}
                    <Tr>
                      <Td>{date}</Td>
                      <Td>{user.mobile_no}</Td>
                      <Td>{user.order.length}</Td>
                      <Td
                        onClick={() => {
                          setReady(!ready);
                        }}
                        cursor="pointer">
                        {ready ? "Dispatched" : "Ready to Dispatch"}
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
