import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../componens/icon/Icon';
import { FlexWrapper } from '../../componens/FlexWrapper';
import { theme } from '../../styles/Theme';

export const Footer = () => {
    return(
     <StyledFooter>

        <FlexWrapper direction={"column"} align={"center"}>
        <Name>Ksenia</Name>
       <SocialList>
         <SocialItem>
          <SocialLink>
             <Icon height={"21px"}  viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
          </SocialLink>
          <SocialLink>
             <Icon height={"21px"}  viewBox={"0 0 21px 21px"}  iconId={"linkedin"}/>
          </SocialLink>
          <SocialLink>
             <Icon height={"21px"}  viewBox={"0 0 21px 21px"}  iconId={"telegram"}/>
          </SocialLink>
          <SocialLink>
             <Icon height={"21px"}  viewBox={"0 0 21px 21px"}  iconId={"vkontakte"}/>
          </SocialLink>
         </SocialItem>
      </SocialList>
        <Copyright>© 2023 Ksenia Baguzova, All Rights Reserved.</Copyright>
        </FlexWrapper>
      
     </StyledFooter>
    );
};

const StyledFooter = styled.footer`
background-color: ${theme.colors.primeryBg};
padding: 40px 0;

`
const Name = styled.span`
font-family: 'Josefin Sans', sans-serif;
font-size: 22px;
font-weight: 700;
letter-spacing: 3px;

@media ${theme.media.mobile}{

}
`

const SocialList = styled.ul`
display:flex;
gap: 20px;
margin:30px 0;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
background-color: rgba(255, 255, 255, 0.1);
border-radius: 50%;
width: 35px;
height: 35px;

//display:flex;
justify-content:center;
align-items:center;

color: ${theme.colors.accent};

&:hover{
   color: ${theme.colors.primeryBg };
   transform:translateY(-4px);
}
`

const Copyright = styled.small`
font-size: 12px;
font-weight: 400;
text-align: center;
opacity: 0.5;
`
