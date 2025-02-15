import styled from '@emotion/styled';

export const StudentCardBox = styled.div`
border: 2px solid blue;
border-radius: 12px;
text-align: center;
width: 200px;
max-height: 180px;
margin: 12px;
padding: 12px;
box-shadow: 0 4px 8px rgba(0,0,0, .3);
cursor:pointer;

&:hover {
    transform: scale(1.05);
    background-color: #fff344b7;
}
&:active {
    background-color: #fff444;
}
`

export const StudentName = styled.h2`
font-size: 1.8rem; 
color: #333;
/* по дефолту 1.5rem => 1rem = 16px */
/* по дефолту 1.5rem => 1rem = 16px */
`

export const StudentAge = styled.p`
font-size: 1.2rem; 
color: #0055ff;
// червоний - 00 - по нулям, зелений - f8/55 - половина кольору, синій - ff - дуже насичений
`