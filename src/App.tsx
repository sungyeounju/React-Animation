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
  display:flex;
  justify-content: center;
  align-items: center;
  height:200px;
  border-radius:25px;
  background-color:white;
`
const Grid = styled(motion.div)`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  width:50vw;
  gap:10px;
  div:first-child,
  div:last-child{
    grid-column:span 2;
  }
`
const Overlay = styled(motion.div)`
  position:absolute;
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.4)
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
const overlay = {
  hidden : {backgroundColor:"rgba(0,0,0,0)"},
  visible : {backgroundColor:"rgba(0,0,0,0.5)"},
  exit : {backgroundColor:"rgba(0,0,0,0)"}
}
function App() {
  // const [visible, setVisible] = useState(1);
  // const nextPlease = () => setVisible((prev) => (prev === 10 ? 10 : prev+1))
  const [clicked, setClicked] = useState(false);
  const toggle = () => setClicked((prev) => !prev);
  const [id, setId] = useState<null | string>(null);
  return (
    <Wrapper onClick={toggle}>
      {/* <button onClick={nextPlease}>on Click!</button>
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
      </AnimatePresence> */}
      <Grid>
        {["1","2","3","4"].map((n) => (
          <Boxitem onClick={() => setId(n)} key={n} layoutId={n}></Boxitem>
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
          onClick={() => setId(null)}
          variants={overlay}
          initial="hidden"
          animate="visible"
          exit="exit"
          >
            <Boxitem layoutId={id} style={{width:400, height:400}}></Boxitem>
          </Overlay>
        ) : null}
        
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
