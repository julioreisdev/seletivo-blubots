import styled from "styled-components";
import context from "../Context/Context";
import { useContext } from "react";
import avatar from "../../assets/img/avatar.jpg";

export default function ChatHeader() {
  const { assistent, promiseFinish } = useContext(context);

  return (
    <Container>
      <div>
        <img src={promiseFinish ? assistent.avatar : avatar} alt="Profile" />
        <p>{promiseFinish ? assistent.name : "..."}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #086a87;
  color: #fff;
  font-weight: bold;
  box-shadow: 0 2px 5px gray;
  position: fixed;
  width: 75%;

  @media (min-width: 0) and (max-width: 820px) {
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;

    img {
      width: 30px;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }
`;
