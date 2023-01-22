import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import GridProduct from "./gridProduct";

const GridDiv = ({ paginationData }) => {
  return (
    <div>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
        {paginationData.map((el) => {
          return <GridProduct key={el.id} props={el} />;
        })}
      </SimpleGrid>
    </div>
  );
};

export default GridDiv;
