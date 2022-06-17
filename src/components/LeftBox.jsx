import styled from 'styled-components'

const Wrapper = styled.div`
  width : 600px;
  height : 400px;
  position : relative;
  color : gray;
  img {
    width : 400px;
    height : auto;
    /* object-fit: cover; */
    
  }
  
  div {
    position : absolute;
    /* left : 300px; */
    top  : 280px;
    text-align: center;
    width : 400px;
  }
  
  * {
        position: relative;
        animation: fadeIn 700ms ease-in-out ;
        /* animation-delay: 2s */
    }
`

const LeftBox = () => {

  return (
  <Wrapper>
    <img src="../../assets/triple2x.png" alt="" />
    <div>2019년 2월 기준</div>
  </Wrapper>
  )
}


export default LeftBox