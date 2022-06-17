import { useEffect } from 'react';
import styled from 'styled-components'
import LeftBox from '../components/LeftBox';
import RightBox from '../components/RightBox';

const Wrapper = styled.div`
  min-width: 1200px;
  display: flex;
  margin : 0 auto;
  align-items: center;
  width : 1200px;
  height : 100vh;

  @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: none;
        }
    }
 
    
`

const MainSection = () => {

  const animateVal = async(obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) {
        startTimestamp = timestamp
      }
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  
  // useEffect(() => {
  //   const obj = document.getElementById("value");
  //   animateValue(obj, 0, 600, 500)
  //   setTimeout(() => animateValue(obj, 600, 690, 1000), 500);
  //   setTimeout(() => animateValue(obj, 690, 700, 500), 1000);

  // },[])
  

  return (
    <Wrapper>
      {/* <div id="value">0</div> */}
      <LeftBox />
      <RightBox animateVal={animateVal}/>

    </Wrapper>
  )
}


export default MainSection