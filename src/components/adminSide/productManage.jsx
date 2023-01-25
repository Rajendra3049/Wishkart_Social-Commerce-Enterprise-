import DeleteCard from "./deleteCard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import btnStyle from "../../styles/removeBtn.module.css";
import Pagination from "../pagination";
import Loader from "../Loader";
import { Box, SimpleGrid } from "@chakra-ui/react";

export default function ProductManage() {
  const [loading, setLoading] = React.useState(true);

  const [pages, setPages] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  let { data } = useSelector((store) => store.ProductsManager);
  let dispatch = useDispatch();

  React.useEffect(() => {
    setLoading(false);
  }, [currentPage, data]);

  React.useEffect(() => {
    let newPages = [];
    for (let i = currentPage - 1; i < currentPage + 9; i++) {
      newPages.push(i);
    }
    setPages(newPages);
  }, []);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        {" "}
        <SimpleGrid columns={[1,2,3,4]} className={btnStyle.grid}>
          {data && data.map((e) => <Box><DeleteCard key={e.id} singleData={e} /></Box>)}
        </SimpleGrid >
        <div>
          <Pagination
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </>
    );
  }
}
