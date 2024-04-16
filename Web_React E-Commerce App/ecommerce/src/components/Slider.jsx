import React from "react";
import styled, { keyframes } from "styled-components";
import banner from "../assets/banner.png";
import img1 from "../assets/img_1.png";
import img3 from "../assets/img_3.png";
import img2 from "../assets/img_2.png";
import { mobile } from "../responsive";
const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
`;

const Banner = styled.div`
  width: 100%;
  background-image: url(${banner});
  height: 463px;
  margin-top: 40px;
  display: flex;

  position: relative;
`;

const BoxLeft = styled.div`
  padding-left: 100px;
  width: 50%;
`;

const BoxRight = styled.div`
  width: 50%;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const slideAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Image = styled.img`
  margin: 0px 10px;
  animation: ${slideAnimation} 3s infinite linear;

  &:nth-child(1) {
    animation-delay: 0.5s;
  }

  &:nth-child(2) {
    animation-delay: 1s;
  }
`;

const ToBottom = styled.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
`;

const Title = styled.h2`
  font-size: 48px;
  margin-top: 75px;
  color: #fff;
`;

const Description = styled.p`
  color: #d0d0d0;
`;

const Button = styled.button`
  width: 191px;
  height: 40px;
  margin-top: 41px;
  background: #1d1a1a;
  border: none;
  outline: none;
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
  transition: 0.4s;

  &:hover {
    background: orange;
  }
`;

const StyledBanner = () => {
  return (
    <Wrapper>
      <Banner>
        <BoxLeft>
          <Title>
            <span>THỜI TRANG</span>
            <br />
            <span>CAO CẤP</span>
          </Title>
          <Description>
            Chuyên bán các loại quần áo chất lượng được nhập từ Châu Âu với thái
            độ phục vụ khách hàng là thượng đế. Hãy tận hưởng tại shop của chúng
            tối
          </Description>
          <Button>Mua ngay</Button>
        </BoxLeft>
        <BoxRight>
          <Image
            src={img1}
            alt=""
            style={{ height: "250px", width: "150px", borderRadius: "20px" }}
          />
          <Image
            src={img2}
            alt=""
            style={{ height: "250px", width: "150px", borderRadius: "20px" }}
          />
          <Image
            src={img3}
            alt=""
            style={{ height: "250px", width: "150px", borderRadius: "20px" }}
          />
        </BoxRight>
        <ToBottom>
          <a href="">
            <img src="assets/to_bottom.png" alt="" />
          </a>
        </ToBottom>
      </Banner>
    </Wrapper>
  );
};

export default StyledBanner;
