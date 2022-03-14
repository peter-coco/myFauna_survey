import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Survey from './pages/survey';
import Result from './pages/result';
// import Atype from './components/resutlTypes/Atype';
// import Btype from './components/resutlTypes/Btype';
// import Ctype from './components/resutlTypes/Ctype';
// import Dtype from './components/resutlTypes/Dtype';
import Introduce from './pages/introuduce';
import styled from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const AppWrap = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <BrowserRouter>
      <AppWrap>
        <Routes>
          {/* <Route path="/" element={<LoadingPage />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/result/:type" element={<Result />} />
          {/* <Route path="/result/A" element={<Atype />} />
          <Route path="/result/B" element={<Btype />} />
          <Route path="/result/C" element={<Ctype />} />
          <Route path="/result/D" element={<Dtype />} /> */}
        </Routes>
      </AppWrap>
    </BrowserRouter>
  );
}

export default App;
