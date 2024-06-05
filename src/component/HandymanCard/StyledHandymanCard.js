import styled from "styled-components";

export const StyleHandymanCard  = styled.div`
height: fit-content;
margin-top: 50px;
width: 300px;
background: rgba(255, 255, 255, 0.44);
border-radius:10px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.top{
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transform: translateY(-50px);
img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
    border: 7px solid white;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
}
.headInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .name{
        color: black;
        font-size: 20px;
        font-weight: 500;
        text-transform: capitalize;
    }
    .category{
        color: gray;
        font-size: 15px;
        font-weight:500;
        text-transform: capitalize;
    }
    .distance{
        color: rgb(0, 170, 255);
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        .icon{
            font-size: 20px;
        }
    }
}
}
.bottom{
display: flex;
justify-content: center;
align-items: center; 
gap: 15px;
transform: translateY(-30px);
.phoneNumber{
    .icon{
        font-size: 25px;
    }
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: white;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
}
.whatsapp{
    .icon{
        font-size: 35px;
        font-weight: bolder;
    }
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: green;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;   
    border: 2px solid green;
}
}
`;