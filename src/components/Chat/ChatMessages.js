import { useContext, useEffect, useRef } from "react";
import context from "../Context/Context";
import axios from "axios";
import styled from "styled-components";

let ws = new WebSocket("wss://test-tsuru-api.herokuapp.com/");

export default function ChatMessages() {
  const {
    assistent,
    setAssistent,
    messages,
    setMessages,
    promiseFinish,
    setPromiseFinish,
  } = useContext(context);

  const endRef = useRef(null);

  useEffect(() => {
    const promise = axios.get("https://test-tsuru-api.herokuapp.com/helpdesk");
    promise
      .then((res) => {
        const assistentInformations = {
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          avatar: res.data.avatar,
        };
        const chatMessages = res.data.messages;
        setAssistent(assistentInformations);
        setMessages(chatMessages);
        setPromiseFinish(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    ws.onopen = (event) => {
      console.log("CONECTED WITH WEBSOCKET");
    };
    ws.onmessage = (message) => {
      setMessages([...messages, JSON.parse(message.data)]);
    };
    ws.onclose = (event) => {
      console.log("DESCONECTED");
      ws = new WebSocket("wss://test-tsuru-api.herokuapp.com/");
    };
  });

  function Messages(props) {
    return (
      <Message
        alignDirection={props.sent === true ? "right" : "left"}
        color={props.sent === true ? "#086a87" : "gray"}
      >
        <p>{props.content}</p>
      </Message>
    );
  }

  return (
    <Container>
      {promiseFinish
        ? messages.map((m) => (
            <Messages key={m.id} sent={m.sent} content={m.content} />
          ))
        : "LOADING..."}
      <div ref={endRef} />
    </Container>
  );
}

const Container = styled.div`
  padding: 50px 1rem 80px 1rem;
`;
const Message = styled.div`
  margin: 1rem 1rem 2rem 0;
  text-align: ${(props) => props.alignDirection};
  p {
    display: inline;
    border-bottom: 2px solid ${(props) => props.color};
    padding: 0.5rem;
    border-radius: 5px;
  }

  @media (min-width: 0) and (max-width: 820px) {
    p {
      display: block;
    }
  }
`;
