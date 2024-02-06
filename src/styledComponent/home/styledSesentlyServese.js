import styled from "styled-components";
import { StyledMainContainer } from './StyledMain';

export const StyledResentlyContainer =styled(StyledMainContainer)`
display: block;
min-height: 20vh;
text-align: center;
margin-top: 40px  
`
export const StyledHeding = styled.div`
margin: 0px 60px;
text-align: start;
p{
  color: #9D9D9D;

}
h1{
  
  span {
    color :#1E88E5;
  }
}
@media screen and (max-width :800px) {
  margin: 0px;
h1{margin: 0px;width:100%;}

text-align: center;
}
`