import styled from "styled-components";

export default function ChatHeader() {
  return (
    <Container>
      <div>
        <img
          src="https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt="Profile"
        />
        <p>Fulano de Tal</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #045fb4;
  color: #fff;
  font-weight: bold;

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
