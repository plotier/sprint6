import styled from "styled-components"

export const Bordes = styled.div`
border:2px solid; 
border-radius:20px;
list-style:none;
display:flex;
justify-content:center;
margin:10px; 
padding:10px;  
background-color:${({ isSelected }) => isSelected ? "red" : "blue"};
`;
export const BackgroundMain = styled.div`
background-image: url("${({back})=>back}");
height:40rem;
background-repeat: no-repeat;
background-size: cover;
`;

export const Boton = styled.button`
width:50%;
height:50px;
`;

export const BotonCondicion = styled.button`
width:150px;
height:50px;
border-radius:40px;
background-color:blue;
&: hover{
    background-color:red;
}
`;
