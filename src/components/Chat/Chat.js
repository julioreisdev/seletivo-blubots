import Sidebar from "./Sidebar";
import ChatAssistent from "./ChatAssistent";
import styled from "styled-components";

export default function Chat() {
  return (
    <Container>
      <Sidebar />
      <ChatAssistent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;
