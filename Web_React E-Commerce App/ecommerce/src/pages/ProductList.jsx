import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
  padding-right: 10px;
`;

const ProductList = () => {
  let location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("Mới nhất");
  const [searchResults, setSearchResults] = useState([]);
  const searchTerm = useSelector((state) => state.search);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({ ...filter, [e.target.name]: value });
  };
  useEffect(() => {
    const searchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/api/products/search",
          {
            params: {
              title: searchTerm,
            },
          }
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    searchProducts();
  }, [searchTerm]);

  console.log(filter);
  return (
    <Container>
      <Navbar />

      <Title>
        {cat === "fashion%20accessories" ? "Phụ kiện thời trang" : cat}
      </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled selected>
              Color
            </Option>
            <Option>white</Option>
            <Option>Black</Option>
            <Option>Yellow</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>
              Size
            </Option>
            <Option>30</Option>
            <Option>31</Option>
            <Option>32</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="Mới nhất">Mới nhất</Option>
            <Option value="Giá (asc)">Giá (asc)</Option>
            <Option value="Giá (desc)">Giá (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products
        cat={cat}
        filter={filter}
        sort={sort}
        searchResults={searchResults}
      />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
