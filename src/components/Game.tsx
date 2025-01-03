import { useState } from "react";
import "../index.css";
import styled from "styled-components";
import MultiInput from './inputs'


const Apps = () => {
const [numbers, setNumbers] = useState({ num1: 0 ,num2: 0, num3: 0, num4: 0, num5: 0 });

const generateRandomNumber = () : number => {
return Math.floor(Math.random() * 50 *10)
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
<AppWrapper>
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

</AppWrapper>
);
};

const AppWrapper = styled.div`
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
width: 6rem
transition: all 0.5s ease-in-out;
border: 1px solid black;
border-radius: 10px;
background-color: #fff;
color: #000;
font-size: 1.5rem;
font-weight: 700;
cursor: pointer;
}
button:hover{
// background-color: #000;
// color: #fff;
box-shadow: #ffffff 0px 30px 60px -12px , #ffffff 0px 18px 36px -18px;
}


`
const Generator = styled.div`
display: flex;
justify-content: space-evenly;
`
// const Human = styled.div`
// display: flex;
// justify-content: space-evenly;
// `



export default Apps;


// export default App
