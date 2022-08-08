import logo from "../../assets/img/logo.png";
import styled from "styled-components";

export default function Sidebar() {
  return (
    <Container>
      <img src={logo} alt="BluBots" />
      <p>Bots que conectam pessoas</p>
      <Footer>
        <p>2022 &copy; BluBots</p>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 1rem;
  width: 25%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;

  @media (min-width: 0) and (max-width: 820px) {
    display: none;
  }

  img {
    width: 100%;
    animation: animation 1.2s linear;

    @keyframes animation {
      from {
        margin-top: -100px;
        opacity: 0.1;
      }
      to {
        margin-top: 0;
        opacity: 1;
      }
    }
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
    color: #888;
  }
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 25%;
  padding: 0 1rem 2rem 1rem;

  p {
    font-size: 1rem;
  }
`;
