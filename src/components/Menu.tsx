import { Link,  Outlet  } from "react-router-dom";
import styled from "styled-components";

export default function Menu() {
  return (
    <div>


<Nav>
  <Link to={'login'}>Home</Link>
  <Link to={'login'}>About</Link>
  <Link to={'game'}>Games</Link>
  <Link to={'login'}>Login</Link>
  {/* <Link to={'home'}>Profile</Link> */}
   </Nav>

   <Outlet />
</div>
  )
}


const Nav = styled.nav`
display: flex;
justify-content: center;
gap: 1.2rem;





 a{
    position: relative;
    font-size: 1.2em;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    margin-left: 40px;
    transition:  .8s cubic-bezier(.32, 2, .55, 27);

    
}

 a::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .8s;
}
 a:hover::after{
  background:#0ef;
    transform-origin: left;
    transform: scaleY(1);
}
    a:hover{
    color:red;
    }

`