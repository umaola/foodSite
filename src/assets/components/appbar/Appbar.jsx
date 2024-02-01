import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

import './appbar.css'

const items =[{name: 'HOME'}, {name: 'ABOUT US'}, {name: 'SERVICE'}, {name: 'PRICING'}, {name: 'BLOG'}, {name: 'CONTACT'}];

const MenuButtonProps = {
  name: '',
  icon: undefined,
  index: undefined,
  hasSubItems: undefined,
  subMenuHeight: undefined,
  onClick: (index, subMenuHeight) => {},
};
const MenuButton = ({
  name,
  icon,
  index,
  hasSubItems,
  subMenuHeight,
  onClick,
}: MenuButtonProps) => {
  return (
    <button onClick={() => (onClick ? onClick(index, subMenuHeight) : null)}>
      <span className="material-symbols-outlined">{icon || name}</span>
      {name}
      {hasSubItems && (
        <span className="chevron material-symbols-outlined">chevron_right</span>
      )}
    </button>
  );
};

function Appbar() {
  return (
    <>
      <Navbar className='nav'>
        
        <Form className="d-flex search-area">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-bar"
              aria-label="Search"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </Form>
          <Navbar.Brand href="#home" className='nav-brand'>FoodSite</Navbar.Brand>
          <Nav className="nav-link">
            <Nav.Link href="#home" className='Login-link'>Login/Register</Nav.Link>
            <Nav.Link href="#" className='fav-icon'><span class="material-symbols-outlined">favorite</span></Nav.Link>
            <Nav.Link href='#' className='cart-icon'><span class="material-symbols-outlined">shopping_cart</span></Nav.Link>
            <Nav.Link href='#'className='menu-list'><span class="material-symbols-outlined">menu</span></Nav.Link>

          </Nav>
         
      </Navbar>
    </>
  )
}

export default Appbar
