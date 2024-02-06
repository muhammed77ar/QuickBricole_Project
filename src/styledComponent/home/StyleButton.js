import styled from "styled-components";
import { StyledButton } from "../styledSignUp";

export const StyledButtonHome = styled(StyledButton)`
font-size: medium;
font-weight: 300;
width: 20%;
@media screen  and (max-width :800px){
   width: max-content;
}
`