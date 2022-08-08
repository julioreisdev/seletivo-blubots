import styled from "styled-components";
import ChatSend from "./ChatSend";
import ChatHeader from "./ChatHeader";

export default function ChatAssistent() {
  return (
    <Container>
      <ChatHeader />
      <ChatSend />
    </Container>
  );
}

const Container = styled.div`
  width: 75%;
  min-height: 100vh;
  background-color: #fdfdfd;

  @media (min-width: 0) and (max-width: 820px) {
    width: 100%;
  }
`;
