import React from "react";
import Home from "./pages/Home";
import styled from "styled-components";
import TPHeader from "./components/Header";
import TPFooter from "./components/Footer";

function App() {
  return (
    <AppContainer className="App">
      <TPHeader />
      <Home />
      <TPFooter />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  overflow: hidden;
`;

export default App;
