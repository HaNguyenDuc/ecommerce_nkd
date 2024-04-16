import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filtedProducts, setFiltedProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:8800/api/products?category=${cat}`
            : "http://localhost:8800/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFiltedProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filter]);
  useEffect(() => {
    if (sort === "newest") {
      setFiltedProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFiltedProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFiltedProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  return (
    <Container>
      {cat
        ? filtedProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
