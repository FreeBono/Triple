import { useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width : 600px;
  margin : 60px;
  height : 400px;
  color : #383838;
  .upperFrame {
    font-size:32px;
    font-weight : 600;
    .letter {
      margin-top: 15px;
    }

    .noWeight {
      font-weight: 400;
    }
    
    * {
        position: relative;
        animation: fadeIn 700ms ease-in-out ;
        animation-delay: 100ms
    }
  }

  .lowerFrame {
    display : flex;
    margin-top:60px;
    height : 60px;

    div {
      display:flex;
      align-items: center;
      img {
        width : 60px;
        height : 100%;
      }
      div {
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        
      }
    }

    * {
        position: relative;
        animation: fadeIn 700ms ease-in-out ;
        animation-delay: 200ms
    }
  }


`

const RightBox = ({animateVal}) => {

  // useEffect(() => {
  //   console.log(animateVal)
  // },[animateVal])

  useEffect(() => {
    const obj1 = document.getElementById("value1");
    const obj2 = document.getElementById("value2");
    const obj3 = document.getElementById("value3");
    animateVal(obj1, 0, 600, 500)
    animateVal(obj2, 0, 85, 1000)
    animateVal(obj3, 0, 399, 500)
    setTimeout(() => animateVal(obj1, 600, 690, 1000), 500);
    setTimeout(() => animateVal(obj2, 86, 95, 500), 500);
    setTimeout(() => animateVal(obj3, 400, 459, 1000), 500);
    setTimeout(() => animateVal(obj1, 690, 700, 500), 1000);
    setTimeout(() => animateVal(obj2, 96, 100, 500), 1000);
    setTimeout(() => animateVal(obj3, 460, 470, 500), 1000);

  },[])

  return (
  <Wrapper>
    <div className='upperFrame'>
      <div>
        <span id="value1">0</span><span>만 명</span><span className='noWeight'>의 여행자</span>
      </div>
      <div className='letter'>
        <span id="value2">0</span><span>만 개</span><span className='noWeight'>의 여행 리뷰</span>
      </div>
      <div className='letter'>
        <span id="value3">0</span><span>만 개</span><span className='noWeight'>의 여행 일정</span>
      </div>
    </div>
    <div className='lowerFrame'>
      <div>
        <img src="../../assets/play-store2x.png" alt="" />
        <div>
          <span>
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </span>
        </div>
      </div>
      <div style={{marginLeft:"40px"}}>
        <img src="../../assets/badge-apple4x.png" alt="" />
        <div>
          <span>
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </span>
        </div>
      </div>
    </div>
  </Wrapper>
  )
}


export default RightBox