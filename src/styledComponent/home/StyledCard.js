import styled from "styled-components";

export const  StyledCard = styled.div`
width: 100%;
min-height: 100px;
border-radius: 10px;
background-color: #eee;
.info{
  height: 100px;
  padding: 10px 30px;
  padding-bottom: 20px;
  text-align: start;
  .name{
    font-size: large;
    font-weight: 600;
  }
  .job{
    padding: 0px 20px;
    color: gray;
  }
}
.link{
  margin: 10px ;
}
.image{
  height: 250px;
}
img{
  border-radius: 5px;
  border: 1px gray solid;
  object-fit: cover;
  object-position: center;
}
`
