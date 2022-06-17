
import MainSection from './routes/MainSection';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from './styles/GlobalStyle';



function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
