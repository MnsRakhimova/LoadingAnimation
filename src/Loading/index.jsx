import React from "react";
// import { arrowImg } from "./arrow.png";
// import { datebImg } from "./dateb.png";
import { Container, Wrapper, Arrow, Dateb } from "./style";

const Loading = () => {
  return (
    <Container>
      <Wrapper>
        <Arrow src={require("./arrow.png")} />
        <Dateb src={require("./dateb.png")} />
      </Wrapper>
    </Container>
  );
};

export default Loading;
