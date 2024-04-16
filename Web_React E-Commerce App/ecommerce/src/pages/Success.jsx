import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from 'react-router-dom';
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLoaderData, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  removeProduct,
  decreaseQuantity,
  increaseQuantity,
  deleteProduct
} from "../redux/cartRedux";
const Success = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  // const data = location.state.stripeData;
  // const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(deleteProduct());
    const createOrder = async () => {
      try {
  const res = await userRequest.get("/orders");
  setData(res.data)
  console.log(res)
} catch {}
};
   createOrder();
  }, [ currentUser]);

  return (
    <Container>
    <Navbar />
    <Wrapper>
    <div style={{ width: '80%', margin: '0 auto' }}>
    {
      data.map((item,index) => (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:"center" , marginBottom:"10px", border:"1px solid black", padding:"10px 20px", borderRadius:"8px"}}>
        <div style={{ flex: 1 }}>
        <h2>Order Status</h2>
          <p><strong>Order ID:</strong> #{item.products[0].productId}</p>
          <p><strong>Order Date:</strong> April 16, 2024</p>
          <p><strong>Status:</strong> {item.status}</p>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Ordered Items:</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Name Product: {item.products[0].nameProduct}</li>
            <li>Image Product: <img src={item.products[0].imgProduct} href="img" style={{width:"100px"}}/></li>
            <li>Quantity: {item.products[0].quantity}</li>
            {/* Add more ordered items here */}
          </ul>
        </div>
      </div>
      ))
    }
   
  </div>
     
    </Wrapper>
    <Newsletter />
    <Footer />
  </Container>
  );
};
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;

  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const Image = styled.img`
  width: 80%;
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

export default Success;
