import { useState } from "react";
import { media } from './theme'
import styled from "styled-components";
import MultiInput from './inputs'


interface IUser {
  id: string
  username: string
  email: string
  firstName?: string
  lastName?: string
}

const Game = () => {
const [numbers, setNumbers] = useState({ num1: 0 ,num2: 0, num3: 0, num4: 0, num5: 0 });
const data = sessionStorage.getItem('user') as string

const user : IUser = JSON.parse(data)




const generateRandomNumber = () : number => {
return Math.floor(Math.random() * 50 *10) +1

};


const generateNumbers = () => {
setNumbers({
num1: generateRandomNumber(),
num2: generateRandomNumber(),
num3: generateRandomNumber(),
num4: generateRandomNumber(),
num5: generateRandomNumber(),
});

}



return (
  <>
  
<GameWrapper>
 
<p> Welcome {user && user.username ? user.username.toUpperCase() : 'Anonymous Player'}</p>
<h1>Random Number Generator</h1>

<h5>Enter any 3 numbers of your choice, then press play</h5>
<MultiInput />

<div>
<h2>{numbers.num1}</h2>
<h2>{numbers.num2}</h2>
<h2>{numbers.num3}</h2>
<h2>{numbers.num4}</h2>
<h2>{numbers.num5}</h2>
</div>
<Generator>
<button onClick={generateNumbers}>
Play Game
</button>
</Generator>

</GameWrapper>
</>
);
};



const GameWrapper = styled.div`
div{
display: flex;
justify-content: space-evenly;
}
input{
height: 3rem;
width: 5rem;
border: 1px solid black;
border-radius: 10px;
font-size: 1.5rem;
font-weight: 700;
text-align: center;
margin-bottom: 15px;
background-color: black;
}
input:focus{
border: 1px solid #0ef;
}
h1{
font-size: 3rem;
font-weight: 700;
text-align: center;
margin-bottom: 15px;
}
h5{
font-size: 1.6rem;
font-weight: 700;
text-align: center;
margin: 2rem 0;
}
human{
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 15px;
}
h2{
height: 5rem;
width: 5rem;
margin-bottom: 15px;
border: 1px solid black;
background-color: #fff;
font-size: 1.5rem;
color: #000;
text-align: center;
line-height: 5rem;
border-radius: 10px;
}
button{
height: 3rem;
min-width: 7rem;
transition: all 0.15s cubic-bezier(0.63,-0.04, 0.24, 0.93);
border: 1px solid black;
border-radius: 10px;
background-color: #fff;
color: #000;
font-size: 1.5rem;
font-weight: 700;
cursor: pointer;
}
button:hover{
box-shadow:rgb(255, 255, 255) 0px 10px 20px -5px ,rgb(255, 255, 255) 0px 3px 8px -3px;
}
button:active{
box-shadow:rgb(0, 0, 0) 0px 20px 40px -6px inset ,rgb(0, 0, 0) 0px 9px 18px -9px inset;
}

  ${media.md`
 h1{
font-size: 2rem;
font-weight: 500;
text-align: center;
margin-bottom: 10px;
}


  `}



`
const Generator = styled.div`
display: flex;
justify-content: space-evenly;
`
export default Game;