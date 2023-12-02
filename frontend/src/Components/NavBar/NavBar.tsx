import { Container, Navbar } from "react-bootstrap";

import { getNavLinks } from "../../Helpers/NavHelpers";
import { getProfilePhoto } from "../TopLevelInfo/TopLevelInfoUtils";

import "../../App.scss";
import "./NavBar.scss";

export const NavBar: React.FC = (): JSX.Element => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary custom-font">
            <Container fluid>
                <Navbar.Brand href="/">
                    {getProfilePhoto(true)}
                </Navbar.Brand>
                <Navbar.Brand href="/" >Kayla Shepston Photography</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    {getNavLinks()}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}