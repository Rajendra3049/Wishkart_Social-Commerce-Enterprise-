import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Paginate = ({ pagination, query, setQuery }) => {
  const { limit, nextPage, prevPage, totalPages, totalProducts } = pagination;
  // Calculate number of pages

  // Build array of page numbers to display
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Flex justify="space-between" align="center" p="5px" fontSize={"xl"}>
      <Text>
        Showing {limit * (query.page - 1) + 1}-
        {Math.min(limit * query.page, totalProducts)} of {totalProducts}
      </Text>
      <Flex>
        <Button
          disabled={!prevPage}
          onClick={() => setQuery({ ...query, page: prevPage })}
          mr={2}
          fontSize={"xl"}>
          Prev
        </Button>
        {pageNumbers.map((pageNum) => (
          <Box
            key={pageNum}
            as="button"
            onClick={() => setQuery({ ...query, page: pageNum })}
            bg={pageNum === query.page ? "blue.500" : "gray.200"}
            color={pageNum === query.page ? "white" : "black"}
            fontWeight={pageNum === query.page ? "bold" : "normal"}
            borderRadius="md"
            px={2}
            py={1}
            mx={1}
            _hover={{ bg: "gray.300" }}>
            {pageNum}
          </Box>
        ))}
        <Button
          disabled={!nextPage}
          onClick={() => setQuery({ ...query, page: nextPage })}
          ml={2}
          fontSize={"xl"}>
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default Paginate;
