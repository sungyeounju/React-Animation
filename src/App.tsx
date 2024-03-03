import React, { useEffect } from 'react';
import {motion, useMotionValue, useTransform} from "framer-motion";
import { styled } from 'styled-components';

const Wrapper = styled(motion.div)`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background:linear-gradient(90deg, #ff46e8, #ff570052);
`
const BiggerBox = styled(motion.div)`
  overflow:hidden;
  width:500px;
  height:500px;
  border-radius:20px;
  background-color:#ffe0da;
`
const Boxitem = styled(motion.div)`
  width:200px;
  height:200px;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  border-radius:25px;
  background-color:white;
`
const boxVariants = {
}


function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800,800],[-360,360])
  const gradient = useTransform(x, [-800,800],
    ["linear-gradient(90deg, #ff46e8, #ff570052)",
    "linear-gradient(90deg, #46aaff, #00e92c52)"])
  return (
    <Wrapper style={{background:gradient}}>
        <Boxitem style={{x, rotateZ}} drag="x" dragSnapToOrigin /> 
    </Wrapper>
  );
}

export default App;
