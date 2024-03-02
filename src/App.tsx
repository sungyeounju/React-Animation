import React from 'react';
import {motion} from "framer-motion";
import { styled } from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100vh;
  background-color:mintcream;
`
const Boxitem = styled.div`
  width:200px;
  height:200px;
  border-radius:8px;
  background-color:tomato;
`

function App() {
  return (
    <Wrapper>
      <Boxitem></Boxitem>
      <motion.div>hello</motion.div>
    </Wrapper>
  );
}

export default App;
