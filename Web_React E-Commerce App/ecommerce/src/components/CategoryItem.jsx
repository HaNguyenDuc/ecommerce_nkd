import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div``;

const Image = styled.img`
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div``;

const Title = styled.h1``;

const Button = styled.button``;

const CategoryItem = ({ item }) => {
  return (
    <Container
      style={{ flex: "1", margin: "3px", height: "70vh", position: "relative" }}
    >
      <Link to={`/products/${item.cat}`}>
        <Image
          src={item.img}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Info
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title style={{ color: "white", marginBottom: "20px" }}>
            {item.title}
          </Title>
          <Button
            style={{
              border: "none",
              padding: "10px",
              backgroundColor: "white",
              color: "gray",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            SHOP NOW
          </Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
