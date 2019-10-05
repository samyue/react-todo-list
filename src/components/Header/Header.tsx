import React, { useState } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import './Header.scss'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className='header'>
      <Navbar expand='sm' color='faded' light>
        <NavbarBrand href='/'>React Park</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/home'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/todo-list'>Todo List</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  )
}

export default Header
