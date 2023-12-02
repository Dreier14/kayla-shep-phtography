import { Nav } from "react-bootstrap";

export const getNavLinks = () => {
    return (
        <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/projects'>Projects</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
        </Nav>
    );
}