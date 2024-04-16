import { React, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import bg from "../assets/bg.jpg";
import { signup } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Login from "./Login";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${bg}) center;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 20px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // Xử lý khi mật khẩu không khớp
      console.log("Passwords do not match");
      return;
    }
    signup(dispatch, { username, email, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="confirm password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            {" "}
            <Agreement>
              Already have account?
              <Link to="/login" style={{ color: "black", marginLeft: "10px" }}>
                <b>Login</b>
              </Link>
            </Agreement>
            <Button
              onClick={handleClick}
              disabled={isFetching}
              style={{ width: "130px", marginLeft: "30px" }}
            >
              CREATE
            </Button>
          </div>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
