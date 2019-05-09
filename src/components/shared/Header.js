import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

// import { Link } from 'react-router-dom';

    class Header extends React.Component {
        constructor(props) {
            super(props);
        
            this.toggle = this.toggle.bind(this);
            this.state = {
              isOpen: false
            };
          }
          toggle() {
            this.setState({
              isOpen: !this.state.isOpen
            });
          }
          render() {
            return (
              <div>
                <Navbar color="light" light expand="md">
                  <NavbarBrand className="navbar-brand" href="/">CSS Playground</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="" navbar>
                      <NavItem>
                        <NavLink href="/trillio/">Trillio</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/MyTours/">MyTours</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/Nexter/">Nexter</NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                          Options
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>
                            Option 1
                          </DropdownItem>
                          <DropdownItem>
                            Option 2
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>
                            Reset
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
            );
          }
      }

      export default Header;