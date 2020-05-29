import React from "react";
import Home from "./pages/Home";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Home />
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  overflow: hidden;
`;

export default App;
