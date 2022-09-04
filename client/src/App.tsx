import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: unset;
        padding: unset;
        box-sizing: border-box;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;
    background-color: skyblue;
`;

const WelcomeText = styled.h1`
    font-family: 'Sans-serif';
    color: white;
`;

const App = () => (
    <>
        <Container>
            <WelcomeText>
                React client says hi!
            </WelcomeText>
        </Container>
        <GlobalStyle />
    </>
);

export default App;