// import React from 'react';
import styled from 'styled-components';


const GameApp = () => {
return (
<Container>
<Player>
<div>input three(3) numbers</div>
<div>
<input type="number" id="number1" max={1}/>
<input type="number" id="number2" />
<input type="number" id="number3" />
</div>
</Player>
</Container>
)
}

const Container = styled.div`
background-color: red;
`
const Player = styled.div`
background-color: blue;
display: flex;
flex-direction: column;
align-items: center;

input {
width: 50px;
height: 50px;
margin: 10px;
border-radius: 10px;
border: 2px solid rgba(255, 255, 255, 0.6);
font-size: 20px;
}


`


export default GameApp