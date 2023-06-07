import { keyframes, styled } from "styled-components";

const Spinner = keyframes`
  0% {
    transform: rotate(360deg);
  }
 
  100% {
    transform: rotate(0deg);
  }
`;

const Container = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  transform: scale(0.5);
  left: 5%;
`;

const Arrow = styled.img`
  position: absolute;
  top: -80%;
  left: 4%;
  z-index: 1;
  width: 450px;
  height: 450px;
  /* animation-name: ${Spinner}; */
  animation: ${Spinner} 0.7s infinite ease-in-out;
`;

const Dateb = styled.img`
  width: 500px;
  z-index: 2;
`;

export { Container, Wrapper, Arrow, Dateb };
