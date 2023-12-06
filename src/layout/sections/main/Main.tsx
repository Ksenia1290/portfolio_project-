import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpeg'
import { FlexWrapper } from "../../../componens/FlexWrapper";
import { Container } from "../../../componens/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
    return (
<StyledMain>
    <Container>
    <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
    <div>
        <Smalltext>Hi There</Smalltext>
        <Name>I am <span>Ksenia Baguzova</span></Name>
        <MainTitle>A Web Developer</MainTitle>
    </div>
    <PhotoWrapper>
    <Photo src={photo} alt=""/>
    </PhotoWrapper>
    </FlexWrapper>
    </Container>
</StyledMain>
    );
};

const StyledMain = styled.div`
min-height:100vh;
background-color:#1f2d41;
display:flex;
`

const PhotoWrapper = styled.div`
 position: relative;
 z-index:0;
 margin-top:65px;

 &::before{
    content:"";
    width:360px;
    height: 470px;
    border:5px solid ${theme.colors.accent};

    position:absolute;
    top:-24px;
    left:24px;
    z-index: -1;
    @media ${theme.media.mobile}{
    width:314px;
    height: 414px;  
    top:-17;
    left:20px;
    }
 }
`

const Photo = styled.img`
width: 350px;
height:430px;
object-fit: cover;
margin-right:20px;

@media ${theme.media.mobile}{
width: 310px;
height:380px;
}
`

const MainTitle = styled.h1`
font-size: 27px;
font-weight: 400;
//{font({family,weight,color,lineHeight, Fmin, Fmax}: {weight: 400, Fmax:27, Fmin:20})}

`
const Name = styled.h2`
//{font({family,weight,color,lineHeight, Fmin, Fmax}: {family: "Josefin Sans, sans-serif", weight: 700, Fmax:50, Fmin:36})}
font-family: Josefin Sans, sans-serif;
font-size: 50px;
font-weight: 700;
letter-spacing: 0.05em;
margin:10px 0;

span{

    position:relative;
    z-index:0;
    white-space: nowrap;

   &::before {
    content:"";
    display:inline-block;
    width:100%;
    height:20px;
    background-color:${theme.colors.accent};

    position:absolute;
    bottom: 0;
    z-index:-1;
   }
}

@media ${theme.media.mobile}{
    margin: 15px 0 22px;
}

`
const Smalltext = styled.h2`
font-size: 14px;
font-weight: 400;

`
