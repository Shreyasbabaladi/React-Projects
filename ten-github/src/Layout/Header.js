import React,{useContext,useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap"
import { UserContext } from '../Pages/Context/UserContext'
import { Link } from 'react-router-dom'


const Header = () => {
    const context = useContext(UserContext);
  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <Navbar color="info" light expand="md">
        <NavbarBrand>
          <Link to="/" className="text-white">
            Gitfire app
          </Link>
        </NavbarBrand>
        <NavbarText className="text-white">
          {context.user?.email ? context.user.email : ""}
        </NavbarText>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {context.user ? (
              <NavItem>
                <NavLink tag={Link} to="/" className="text-white">
                  Logout
                </NavLink>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLink tag={Link} to="/" className="text-white">
                    Signup
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/" className="text-white">
                    Signin
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  };
  

export default Header
