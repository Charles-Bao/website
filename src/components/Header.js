import React, {Component} from 'react';
import { Navbar,Nav,Image } from 'react-bootstrap';
import '../css/header.css'
import github from '../resource/icons/github.png';
import linkedin from '../resource/icons/linkedin.png';
import email from '../resource/icons/mail.png';


class Header extends Component{
    render(){
        return(
            <Navbar className ='bg-dark text-light ' expand="lg" sticky="top">
                <p className = 'name'> Yuxiang Bao</p>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className = "justify-content-between" id="basic-navbar-nav">

                    <Nav  className="d-flex flex-row">
                        <Nav.Link href="https://github.com/Charles-Bao" target="_blank" >
                            <Image className = 'social-icon' src={github}  />
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/yuxiang-bao-710562138/" target="_blank" >
                            <Image className = 'social-icon' src={linkedin}  />
                        </Nav.Link>
                        <Nav.Link href="mailto:ybao2@wpi.edu" >
                            <Image className = 'social-icon' src={email}   />
                        </Nav.Link>
                    </Nav>

                    <Nav id = 'navigations' >
                        <Nav.Link href="#Summary" className = "text-light nav">
                            Summary
                        </Nav.Link>
                        <Nav.Link href="#Education" className = "text-light nav" >
                            Education
                        </Nav.Link>
                        <Nav.Link href="#Experience" className = "text-light nav" >
                            Experience
                        </Nav.Link>
                        <Nav.Link href="#Awards" className = "text-light nav" >
                            Awards and Publications
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                
            </Navbar>
        );
    }
}

export default Header;