import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import image from "../assets/shop.png";
import Login from "../pages/Login";
import user1 from "../assets/user.png";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutFailure, logoutStart, logoutSuccess } from "../redux/userRedux";
import { publicRequest } from "../requestMethods";
import { setSearchTerm } from "../redux/searchSlice";
const buttonLogin = styled.button`
  &:hover {
    background-color: black;
    color: white;
  }
`;
const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,200;1,400;1,500&display=swap");
  position: sticky;
  top: 0;
  left: 0;
  padding-top: 10px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  z-index: 99;
  height: 80px;

  background-color: white;
  /* &.scrolled {
    background-color: var(--main-color);
  } */
  .scrolled {
    background-color: black;
  }
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  margin-left: 10px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  margin-left: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  ${mobile({ width: "50px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.p`
  margin-right: 30px;
  color: #857d67;
  font-size: 16;
  font-family: "Quicksand", sans-serif;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #008080;
  }
`;
// const Logo = styled.div`
//   background-image: url(${image});
//   height: 100%;
//   width: 100%;
//   ${mobile({ fontSize: "24px" })}
// `;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  var number = 0;
  const searchTerm = useSelector((state) => state.search);
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  {
    quantity.products.map((product) => (number += product.quantity));
  }
  const handleLogout = async () => {
    dispatch(logoutStart());

    try {
      // Thực hiện các cuộc gọi API hoặc tác vụ để đăng xuất người dùng

      // Ví dụ: Gửi cuộc gọi API để đăng xuất
      await publicRequest.post("https://apiec.onrender.com/api/auth/logout");

      // Gửi action để cập nhật Redux store với trạng thái đăng xuất
      dispatch(logoutSuccess());
    } catch (err) {
      // Xử lý lỗi nếu có
      dispatch(logoutFailure());
    }
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <img
            src={image}
            alt="Logo"
            style={{ height: "40px", width: "110px" }}
          />
        </Left>

        <Center>
          <Link to="/" style={{ textDecoration: "none" }}>
            <H1>TRANG CHỦ</H1>{" "}
          </Link>
          <Link to={`/products`} style={{ textDecoration: "none" }}>
            {" "}
            <H1>SẢN PHẨM</H1>{" "}
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            {" "}
            <H1>GIỎ HÀNG</H1>{" "}
          </Link>
        </Center>
        <Right>
          {/* <MenuItem>REGISTER</MenuItem> */}
          <MenuItem>
            <SearchContainer>
              <Input type="text" placeholder="Search" onChange={handleSearch} />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </MenuItem>

          {/* <Link element={user ? <Navigate to="/cart" /> : <Login />}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link> */}
          <Link to="/cart">
            {user ? (
              <MenuItem>
                <Badge badgeContent={number} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            ) : (
              <MenuItem>
                <Badge badgeContent={"0"} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            )}
          </Link>

          {/* <MenuItem>
            {{
              if(user) {
                <a href="" style={{ listStyle: "none" }}>
                  {" "}
                  <img src={user} alt="" />
                </a>;
              },
            }}
            {{
              else {
                 <button onClick={handleLogout}>Logout</button>
              }
            }}
           
          </MenuItem> */}
          <MenuItem>
            {user ? (
              <button
                onClick={handleLogout}
                style={{
                  padding: "5px 15px",
                  borderRadius: "5px",
                  border: "1px solid #eeeeee",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                }}
              >
                Logout
              </button>
            ) : (
              //   <a>{user.username}</a>
              <Link to="login">
                <button
                  className="buttonLogin"
                  style={{
                    padding: "5px 15px",
                    borderRadius: "5px",
                    border: "1px solid #eeeeee",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                  }}
                >
                  Login
                </button>
              </Link>
            )}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
