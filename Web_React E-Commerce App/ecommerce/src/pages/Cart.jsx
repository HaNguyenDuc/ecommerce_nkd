import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { CiSquarePlus } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import { IoSendOutline } from "react-icons/io5";
  import {
    removeProduct,
    decreaseQuantity,
    increaseQuantity,
    deleteProduct
  } from "../redux/cartRedux";
import { LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRess } from "../recoil/initState";
import { useRecoilState , useRecoilValue} from "recoil";
import { MdOutlineCancel } from "react-icons/md";
const KEY = process.env.REACT_APP_STRIPE;
const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,200;1,400;1,500&display=swap");
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
`;



const Cart = () => {
  var number = 0;
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const [error1, setError1] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [address,setAddRessR] = useRecoilState(addRess)
  const addressLo = localStorage.getItem("address");
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser)
  const [searchU, setSearchU] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const onToken = (token) => {
    setStripeToken(token);
  };
  const sendAdd = () => {
    if(searchU === "") {
      setError1(true)
    }
    else{
      localStorage.setItem("address", searchU);
      setError1(false);
      setAddRessR(searchU); setToggle(false)
      setSearchU("")
    }
  }
  const ss = async () => {
    console.log(123)
    localStorage.removeItem("cart"); 

  }
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post(
          "http://localhost:8800/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 500,
          }
        );
        Navigate.push("/success", {
          stripeData: res.data,
          products: cart,
        });
       
        console.log(cart)
        localStorage.removeItem("cart"); // Xóa key "cart" trong storage
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, Navigate]);



  {
    cart.products.map((product) => (number += product.quantity));
  }
  const handleRemove = (productId) => {
    dispatch(removeProduct(productId));
  };
  const handleDecrease = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleIncrease = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDelete = () => {

     cart.products.map(async (item,index) => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
  products: [
    {
      productId:item._id
      ,nameProduct:item.title,
      imgProduct:item.img,
      quantity: item.quantity,
    },
  ],
  amount:1,
  address: searchU,
  status: "pending" ,
        });
       
        console.log(res)
        Navigate("/success")
      } catch {}
     })
    
    

  
  };
  return (
    <Container>
      <Navbar />

      <Wrapper>
        <Title  onClick={ss}>YOUR BAG</Title>
        <Top>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <TopButton>CONTINUE SHOPPING</TopButton>{" "}
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({number})</TopText>
          </TopTexts>
          <div style={{
            height:"80px",
            width:"25%"     ,
              borderRadius:"10px",
              border:"dashed 1px lightgray",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",cursor:"pointer"
          }}>
          {
           (addressLo == null) ? <div style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
              }}>
                <CiSquarePlus/>
                <span onClick={() => setToggle(true)}>Thêm địa chỉ</span>
              </div> :<div style={{textAlign:"center"}}>
                 <div style={{
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                  }}>
                 <LuMapPin/>
                 <span style={{marginLeft:"10px"}}>{address || addressLo}</span></div>
                 <span style={{marginTop:"10px", textDecoration:"underline",color:"#3f51de", fontSize:"10px"}} onClick={() => setToggle(true)}>Thay đổi địa chỉ</span>
                </div>
                  
          }
          </div>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product style={{ marginBottom: "15px" }} key={product.id}>
                <ProductDetail>
                  <Image
                    src={product.img}
                    style={{ height: "200px", width: "200px" }}
                  />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor
                      color={product.color}
                      style={{ border: "1px solid #e5e5e5" }}
                    />
                    <ProductSize style={{ color: "black" }}>
                      <b>Size: {product.size}</b>
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add
                      onClick={() => handleIncrease(product._id)}
                      style={{ cursor: "pointer" }}
                    />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove
                      onClick={() => handleDecrease(product._id)}
                      style={{ cursor: "pointer" }}
                    />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                  <div
                    onClick={() => handleRemove(product._id)}
                    style={{
                      marginTop: "20px",
                      border: "1px solid #d2d4d3",
                      borderRadius: "50%",
                      padding: "10px 14px",
                      cursor: "pointer",
                    }}
                  >
                    X
                  </div>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
         
              <Button  onClick={handleDelete}>CHECKOUT NOW</Button>
          
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
      {toggle && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            height: "100%",
            zIndex: 999,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
        <div
        style={{
          background: "#fff",
          padding: "25px 20px",
          borderRadius: "16px",
          textAlign: "center",
          width: "60%",
          marginTop: "80px",
        }}
      >
        <div style={{marginBottom:"10px", display:"flex", justifyItems:"flex-end"}}>
          <MdOutlineCancel
            size={20}
            style={{cursor:"pointer"}}
            onClick={() => {
              setToggle(false);
            }}
          />
        </div>
        <div style={{display:"flex" , justifyContent:"center", alignItems:"center"}}>
            
              <input
              onChange={(e) => setSearchU(e.target.value)}
              type="text"
              style={{ height:"30px", marginRight:"10px",width:"40%", borderRadius:"5px",border:"1px solid lightgray", paddingLeft:"5px", paddingRight:"5px", outline:"none"}}
              placeholder="Address"
              required
              value={searchU}
            />
            <button
             style={{ height:"30px",width:"40px",background:"#3f51b1", display:"flex", borderRadius:"5px",border:"none",color:"white", justifyContent:"center", alignItems:"center"}}
            onClick={
              sendAdd
            }
            
          ><IoSendOutline/> </button>
    </div>
    <div style={{display:"flex" , justifyContent:"center", alignItems:"center", marginTop:"10px"}}>
        {
          error1 ? <p style={{color:"red"}}>Hãy nhập địa chỉ!</p> : <div></div>
        }
        </div>
   
      </div>
        </div>
      
       
      )}
    </Container>
  );
};

export default Cart;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;