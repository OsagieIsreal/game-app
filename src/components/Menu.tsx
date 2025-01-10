import { Link,  Outlet  } from "react-router-dom";
import styled from "styled-components";

export default function Menu() {
  return (
    <div>


<Nav>
  <Link to={'login'}>Home</Link>
  <Link to={'login'}>About</Link>
  <Link to={'game'}>games</Link>
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
gap: 2rem;
`