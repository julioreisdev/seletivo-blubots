import styled from "styled-components";

export default function ChatSend() {
  return (
    <Container>
      <form>
        <input
          id="message"
          type="text"
          name="message"
          required
          placeholder="Escreva aqui..."
        />
        <button>
          <ion-icon name="send"></ion-icon>
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 75%;

  @media (min-width: 0) and (max-width: 820px) {
    width: 100%;
  }

  form {
    width: 100%;
    position: relative;

    input {
      width: 100%;
      font-size: 1.5rem;
      color: #fff;
      padding: 1.5rem 60px 1.5rem 1rem;
      background-color: #086A87;
      border: 1px solid #086A87;

      ::placeholder {
        color: #fff;
      }
    }

    button {
      border: none;
      position: absolute;
      width: 50px;
      height: 74px;
      top: 2px;
      right: 2px;
      bottom: 2px;
      background-color: #086A87;

      ion-icon {
        font-size: 1.8rem;
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;
