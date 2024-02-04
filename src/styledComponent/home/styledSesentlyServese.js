import styled from "styled-components";
import { StyledMainContainer } from './StyledMain';

export const StyledResentlyContainer =styled(StyledMainContainer)`
display: block;
min-height: 30vh;
`
export const StyledHeding = styled.div`
margin: 0px 60px;
p{
  color: #9D9D9D;

}
h1{
  span {
    color :#1E88E5;
  }
}
@media screen and (max-width :800px) {
h1{margin: 0px;width:100%;}

text-align: center;
}
`