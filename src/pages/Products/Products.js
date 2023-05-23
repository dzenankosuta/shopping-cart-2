import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import "./Products.css";
import Pagination from "@mui/material/Pagination";
import ProductCard from "../../components/Card/ProductCard";
import { toast } from "react-hot-toast";

export default function Products() {
  const { products } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const productsPerPage = 12;
  const numOfPages = Math.ceil(products.length / productsPerPage);
  // console.log(products);
  return (
    <>
      <div className="cards">
        {products
          .map((product) => (
            <ProductCard
              productName={product.title}
              productPrice={product.price}
              productImage={product.imageURL}
              onClick={() => {
                toast.success("Successfully added to cart!");
              }}
            />
          ))
          .slice((page - 1) * productsPerPage, page * productsPerPage)}
      </div>
      <div className="pagination">
        <Pagination
          size="large"
          count={numOfPages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
