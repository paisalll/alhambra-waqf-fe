import React from "react";
import { Pagination } from "antd";
const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return <a>Previous</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
};
export const PaginationCard = () => {
  return (
    <Pagination
      total={50}
      itemRender={itemRender}
      showTitle={false}
      showSizeChanger={false}
      className="paginationActive"
    />
  );
};
