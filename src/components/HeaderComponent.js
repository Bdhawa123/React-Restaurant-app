import React, { Component } from 'react';
import { Navbar, NavbarBrand , Jumbotron } from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar dark>
                <div className="container">
                    <NavbarBrand href ="/">Ristorante Con Fusion</NavbarBrand>
                </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;