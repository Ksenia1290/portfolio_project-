import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../componens/SectionTitle";
import { Button } from "../../../componens/Button";

export const Contact = () =>{
    return(
       <StyledContacts>
         <SectionTitle>Contact</SectionTitle>
            <StyledForm>
               <Field placeholder={"name"}/>
               <Field placeholder={"subject"}/>
               <Field placeholder={"message"} as = {"textarea"}/>
               <Button type={"submit"}>Send message</Button>
            </StyledForm> 
       </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50;
   background-color:#fffae1;
`


const StyledForm = styled.form`
    min-width: 500px;
    width:100%;
    display:flex;
    flex-direction:column;
    gap:10px
`

const Field = styled.input`
    
`
