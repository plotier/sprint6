import styled from "styled-components"

export const Bordes = styled.div`
border:2px solid; 
border-radius:20px;
list-style:none;
display:flex;
justify-content:center;
margin:10px; 
padding:10px;  
background-color:${({ isSelected }) => isSelected ? "red" : "blue"}
`;

export const Boton = styled.button`
width:50%;
height:50px;
`;