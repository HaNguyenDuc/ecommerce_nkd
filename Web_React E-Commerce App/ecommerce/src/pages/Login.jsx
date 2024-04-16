import { React, useState } from "react";
import styled from "styled-components";
import bg from "../assets/bgg.jpg";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Wrapper = styled.div``;
const Container = styled.div``;
const Title = styled.h2``;

const Input = styled.input``;

const Linkto = styled.a``;

const Button = styled.button``;

const Button1 = styled.button``;
const Circle = styled.div``;

const Heading = styled.h3``;
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
    <Wrapper
      style={{
        width: "100vw",
        height: "100vh",
        background: `linear-gradient(
          rgba(255, 255, 255, 0.5),
          rgba(255, 255, 255, 0.5)
        ),
        url(${bg}) center`,
        backgroundSize: "cover",
      }}
    >
      <Container
        style={{
          position: "absolute",
          top: "200px",
          left: "35%",
          display: "block",
          marginBottom: "80px",
          width: "500px",
          height: "360px",
          background: "transparent",
          borderRadius: "5px",
          overflow: "hidden",
          zIndex: "1",
        }}
      >
        <Title
          style={{
            padding: "40px",
            fontWeight: "lighter",
            textTransform: "uppercase",
            color: "#414141",
          }}
        >
          login
        </Title>

        <Form>
          {/* <Input style={{display: block;
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
  }}}
            placeholder="Email"
            onChange={(e) => setUsername(e.target.value)}
          /> */}
          <Input
            style={{
              display: "block",
              height: "50px",
              width: "100%",
              paddingLeft: "10px",
              margin: "0 auto",
              border: "none",
              color: "#ff5722",
              outline: "none",
              borderBottom: "1px solid #ff5722",
              textDecoration: "none",
            }}
            placeholder="Email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <Input
            style={{
              display: "block",
              height: "50px",
              width: "100%",
              paddingLeft: "10px",
              margin: "0 auto",
              border: "none",
              color: "#ff5722",
              outline: "none",
              borderBottom: "1px solid #ff5722",
              textDecoration: "none",
            }}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Linkto
            href="#"
            className="link"
            style={{
              textDecoration: "none",
              display: "inline-block",
              margin: "27px 28%",
              textTransform: "uppercase",
              color: "black",
              fontWeight: "lighter",
              transition: "0.5s",
            }}
          >
            forgot your password ?
          </Linkto>
          <br />

          <Link to="/register" style={{ textDecoration: "none" }}>
            {" "}
            <Button1
              className="register"
              style={{
                cursor: "pointer",
                display: "inline-block",
                float: "left",
                backgroundColor: "#673ab7",
                width: "250px",
                height: "60px",
                marginTop: "-10px",
                border: "none",
                fontFamily: '"Open Sans", sans-serif',
                textTransform: "uppercase",
                color: "#fff",
                transition: "0.5s",
              }}
            >
              <span>register</span>
            </Button1>{" "}
          </Link>

          <Button
            className="signin"
            onClick={handleClick}
            disabled={isFetching}
            style={{
              cursor: "pointer",
              display: "inline-block",
              float: "left",
              width: "250px",
              height: "60px",
              marginTop: "-10px",
              border: "none",
              fontFamily: '"Open Sans", sans-serif',
              textTransform: "uppercase",
              color: "#fff",
              backgroundColor: "#ff5722",
              transition: "0.5s",
            }}
          >
            <span>Login</span>
          </Button>
          {error && <Error>Something went wrong...</Error>}
        </Form>
        <Heading
          style={{
            position: "absolute",
            top: "-100%",
            left: "20%",
            textTransform: "uppercase",
            fontWeight: "bolder",
            color: "rgba(255, 255, 255, 0.3)",
            transition: "0.3s ease-in-out 1.2s",
          }}
        >
          your registration is complete !
        </Heading>
        <Heading
          style={{
            position: "absolute",
            top: "-100%",
            left: "20%",
            textTransform: "uppercase",
            fontWeight: "bolder",
            color: "rgba(255, 255, 255, 0.3)",
            transition: "0.3s ease-in-out 1.2s",
          }}
        >
          your sign in is complete !
        </Heading>
        <Circle
          className="reg"
          color="#673ab7"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            transform: "translateY(-100%) scale(1)",
            display: "block",
            width: "20px",
            height: "20px",
            borderRadius: "50px",

            zIndex: "5",
            transition: "0.8s ease-in-out",
          }}
        />
        <Circle
          className="sig"
          color="#ff5722"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            transform: "translateY(-100%) scale(1)",
            display: "block",
            width: "20px",
            height: "20px",
            borderRadius: "50px",

            zIndex: "5",
            transition: "0.8s ease-in-out",
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default Login;
