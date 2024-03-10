import React, { useEffect, useState } from 'react';
import {AnimatePresence, motion} from "framer-motion";
import { styled } from 'styled-components';

const Wrapper = styled(motion.div)`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background:linear-gradient(90deg, #ff46e8, #ff570052);
`
const Boxitem = styled(motion.div)`
  width:200px;
  height:200px;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius:25px;
  background-color:white;
`
const box = {
  invisible : {
    x: 500,
    opacity: 0,
    scale:0
  },
  visible : {
    x: 0,
    opacity: 1,
    scale:1,
    transition : {
      duration :1
    }
  },
  exit:{
    x: -500,
    opacity: 0,
    scale:0,
    transition : {duration:1}
  }
}

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => setVisible((prev) => (prev === 10 ? 10 : prev+1))
  return (
    <Wrapper>
      <button onClick={nextPlease}>on Click!</button>
      <AnimatePresence>
        {[1,2,3,4,5,6,7,8,9,10].map((i)=> 
        i === visible ? (
          <Boxitem
            variants={box}
            initial="invisible"
            animate="visible"
            exit="exit"
            key={i}
          >{i}</Boxitem>) 
        : null)}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
