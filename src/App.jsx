import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { GlobalStyles } from "./components/GlobalStyles";
import styled from 'styled-components';
import { useState } from 'react'
import Header from './components/Header'
import NewVideo from './pages/NewVideo'

const GradientBackground = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

function App() {

  return (
    <>
      <Router>
        <GradientBackground>
          <GlobalStyles />
          <AppContainer>
            <Header />
            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='newVideo' element={ <NewVideo /> } />
            </Routes>
          </AppContainer>
        </GradientBackground>
      </Router>
    </>
  )
}

export default App
