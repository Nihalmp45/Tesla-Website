import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';


function Header() {
  return (
    <Container>
      <a>
        <img src='/images/logo.svg'></img>
      </a>
      <MenuBar>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </MenuBar>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla account</a>
        <CustomMenu  />
        </RightMenu>
      </Container>
  )
}

export default Header


const RightMenu=styled.div`
display: flex;
align-items: center;
`

const CustomMenu=styled(MenuIcon)`
cursor: pointer;
`

const Container=styled.div`
min-height: 3.8rem;
position: fixed;
align-items: center;
justify-content: space-between;
display: flex;
padding: 1.1rem;
top: 0;
left:0;
right:0;
`

const MenuBar=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;

    a{
      font-weight: 600;
      text-transform: uppercase;
      padding: 0.6rem;
      flex-wrap: nowrap;
   }

    @media (max-width:768px) {
      {
          display: none;
      }
    }
`