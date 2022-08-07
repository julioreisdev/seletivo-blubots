import styled from "styled-components";
import ChatSend from "./ChatSend";

export default function ChatAssistent() {
  return (
    <Container>
      <ChatSend />
    </Container>
  );
}

const Container = styled.div`
  width: 75%;
  min-height: 100vh;

  @media (min-width: 0) and (max-width: 820px) {
    width: 100%;
  }
`;
