import styled from "styled-components";
import context from "../Context/Context";
import { useContext } from "react";
import axios from "axios";

export default function ChatSend() {
  const { textMessage, setTextMessage } = useContext(context);

  function submit(e) {
    e.preventDefault();
    const promise = axios.post(
      "https://test-tsuru-api.herokuapp.com/helpdesk/sendMessage",
      { content: textMessage }
    );

    promise
      .then((res) => {
        setTextMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <form onSubmit={(e) => submit(e)}>
        <input
          id="message"
          type="text"
          name="message"
          required
          placeholder="Escreva aqui..."
          value={textMessage}
          onChange={(e) => setTextMessage(e.target.value)}
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
  box-shadow: 0 -2px 5px gray;

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
      background-color: #086a87;
      border: 1px solid #086a87;

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
      background-color: #086a87;

      ion-icon {
        font-size: 1.8rem;
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;
