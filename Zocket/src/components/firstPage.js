import React from 'react';
import styled from 'styled-components';
import TextWithEmail from './textWithEmail'
const Container=styled.div`
    display: grid;
    height: 100vh;
    margin-top:150px;
    margin-left:100px;
    grid-template-rows: 2.2fr 3.2fr 2.5fr 5.5fr;
    grid-template-column: 0.4fr 0.6fr;
    grid-template-areas:
    "text img img"
    "text img img"
    "textE img img";
    text-align: center;
    grid-gap: 0.25rem;
    transition: all 0.25s ease-in-out;
    @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
        "text"
        "img"
        "textE"
    }
    color: white;
`
const Text = styled.nav`
background: black;
& p{
    color:black
}
grid-area: text;
padding: 0.25rem;
`;
const Img = styled.main`
background: black;
grid-area: img;
padding: 0.25rem;
`;
const TextWith = styled(TextWithEmail)`
grid-area: textE;
padding: 0.25rem;
`;

const FirstPage = (props) => {
    return (
        <Container>
            <Text>
                <p>FACEBOOK ADS IN 30 SECONDS</p>
            </Text>
            <TextWith></TextWith>
            <Img></Img>
        </Container>
    );
}
export default FirstPage;