import React, { useEffect, useState } from 'react';
import {AnimatePresence, motion} from "framer-motion";
import { createGlobalStyle, styled } from 'styled-components';
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
const overlay = {
  hidden : {backgroundColor:"rgba(0,0,0,0)"},
  visible : {backgroundColor:"rgba(0,0,0,0.5)"},
  exit : {backgroundColor:"rgba(0,0,0,0)"}
}
const Svg = styled.svg`
  width:150px;
  height:150px;
  path{
    stroke:#ff7dd7;
    stroke-width:5;
  }
`
const svg = {
  start : {pathLength : 0, fill:"rgba(255,139,210,0)"},
  end : {pathLength:1, fill:"rgba(255,139,210,1)"}
}
function ContBoxitem(){
    const [clicked, setClicked] = useState(false);
    const toggle = () => setClicked((prev) => !prev);
    const [id, setId] = useState<null | string>(null);
    return(
    <>
        <Wrapper onClick={toggle}>
            <Grid>
                {["1","2","3"].map((n) => (
                <Boxitem onClick={() => setId(n)} key={n} layoutId={n}></Boxitem>
                ))}
                <Boxitem onClick={()=> setId("4")} key={"4"} layoutId={"4"}>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <motion.path
                    variants={svg}
                    initial="start"
                    animate="end"
                    transition={{
                        default:{duration:5},
                        fill:{duration:2, delay:2}
                    }}
                    d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"/>
                </Svg>
                </Boxitem>
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
    </>
    )
}
export default ContBoxitem;