import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    /* font-family: 'Do Hyeon', sans-serif; */
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
}
`;
// 위 코드 주석아님 !!! velog에서 색깔이 초록색일뿐

export default GlobalStyle;