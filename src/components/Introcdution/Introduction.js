import styled from "styled-components";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

export default function Introcdution() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/chat");
  }, 1500);
  return (
    <Container>
      <img src={logo} alt="BluBots" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
    animation: animationI 1.5s linear;
  }

  @keyframes animationI {
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
