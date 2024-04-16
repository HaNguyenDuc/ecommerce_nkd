import { React, useState } from "react";
import styled from "styled-components";
import bg from "../assets/bgg.jpg";
import { login } from "../redux/apiCalls";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${bg}) center;
  background-size: cover;
`;
const Container = styled.div`
  position: absolute;
  top: 200px;
  left: 35%;
  display: block;
  margin-bottom: 80px;
  width: 500px;
  height: 360px;
  background: transparent;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
`;
const Title = styled.h2`
  padding: 40px;
  font-weight: lighter;
  text-transform: uppercase;
  color: #414141;
`;

const Input = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  padding-left: 10px;
  margin: 0 auto;
  border: none;

  &::placeholder {
    transform: translateY(0);
    transition: 0.5s;
  }

  &:hover,
  &:focus,
  &:active:focus {
    color: #ff5722;
    outline: none;
    border-bottom: 1px solid #ff5722;

    &::placeholder {
      color: #ff5722;
      position: relative;
      transform: translateY(-20px);
    }
  }
`;

const Linkto = styled.a`
  text-decoration: none;
  display: inline-block;
  margin: 27px 28%;
  text-transform: uppercase;
  color: black;
  font-weight: lighter;
  transition: 0.5s;
`;

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  float: left;
  width: 250px;
  height: 60px;
  margin-top: -10px;
  border: none;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  color: #fff;
  transition: 0.5s;

  &:nth-of-type(1) {
    background: #673ab7;
  }

  &:nth-of-type(2) {
    background: #ff5722;
  }

  span {
    position: absolute;
    display: block;
    margin: -10px 20%;
    transform: translateX(0);
    transition: 0.5s;
  }

  &:hover {
    span {
      transform: translateX(30px);
    }
  }
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Button1 = styled.button`
  cursor: pointer;
  display: inline-block;
  float: left;
  width: 250px;
  height: 60px;
  margin-top: -10px;
  border: none;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  color: #fff;
  transition: 0.5s;

  &:nth-of-type(1) {
    background: #673ab7;
  }

  &:nth-of-type(2) {
    background: #ff5722;
  }

  span {
    position: absolute;
    display: block;
    margin: -10px 20%;
    transform: translateX(0);
    transition: 0.5s;
  }

  &:hover {
    span {
      transform: translateX(30px);
    }
  }
`;
const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%) scale(1);
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background: ${(props) => props.color};
  z-index: 5;
  transition: 0.8s ease-in-out;
`;

const Heading = styled.h3`
  position: absolute;
  top: -100%;
  left: 20%;
  text-transform: uppercase;
  font-weight: bolder;
  color: rgba(255, 255, 255, 0.3);
  transition: 0.3s ease-in-out 1.2s;
`;
const Form = styled.form``;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Wrapper>
      <Container>
        <Title>login</Title>
        <Form>
          <Input
            placeholder="Email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Linkto href="#" className="link">
            forgot your password ?
          </Linkto>
          <br />

          <Link to="/register" style={{ textDecoration: "none" }}>
            {" "}
            <Button1 className="register">
              <span>register</span>
            </Button1>{" "}
          </Link>

          <Button
            className="signin"
            onClick={handleClick}
            disabled={isFetching}
            style={{ background: "#ff5722" }}
          >
            <span>Login</span>
          </Button>
          {error && <Error>Something went wrong...</Error>}
        </Form>
        <Heading>your registration is complete !</Heading>
        <Heading>your sign in is complete !</Heading>
        <Circle className="reg" color="#673ab7" />
        <Circle className="sig" color="#ff5722" />
      </Container>
    </Wrapper>
  );
};

export default Login;
