import DeleteCard from "./deleteCard";
import { Pagination } from "antd";
const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};

export default function ProductManage({ data }) {
  //   console.log("all", data);
  return (
    <>
      {" "}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          border: "1px solid  #ccc",
          gap: "15px",
        }}>
        {data.map((e) => (
          <DeleteCard key={e.id} singleData={e} />
        ))}
      </div>
      <div>
        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={1}
          total={500}
        />
        <br />
      </div>
    </>
  );
}
