import styled from "styled-components";
import ChatSend from "./ChatSend";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";

export default function ChatAssistent() {
  return (
    <Container>
      <ChatHeader />
      <ChatMessages />
      <ChatSend />
    </Container>
  );
}

const Container = styled.div`
  width: 75%;
  min-height: 100vh;
  background-color: #fdfdfd;
  margin-left: 25%;

  @media (min-width: 0) and (max-width: 820px) {
    margin-left: 0;
  }

  @media (min-width: 0) and (max-width: 820px) {
    width: 100%;
  }
`;
