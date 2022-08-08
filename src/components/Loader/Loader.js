import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function Loader({ w, h }) {
  return (
    <Container>
      <ThreeDots color="#086a87" height={h} width={w} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
