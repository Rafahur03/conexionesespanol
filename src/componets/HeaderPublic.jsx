import { Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeaderPublic = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="light" className="mb-">
            <Container fluid  className="me-md-2">
                <Navbar.Brand href="/" className="mb-2">
                    <img
                    src="https://i.pinimg.com/564x/57/98/d6/5798d658e7f93e3ff0d657dedb449fe3.jpg"
                    width="150"
                    height="auto"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-menu"/>
                <Navbar.Collapse id="responsive-navbar-menu">
                    <Nav className="me-auto ms-md-5 mb-3">
                        <Link to="/QuienesSomos" className="text-primary fw-bold ml-5">Quines Somos</Link>
                        <Link to="/Publicaciones" className="text-primary fw-bold" >Publicaciones</Link>
                    </Nav>
                    {/* <Form className="d-lg-flex d-md-block">
                        <Form.Group  controlId="form-group-email" className="me-md-3 mb-3"   >
                            <Form.Label className="me-md-3 text-primary">Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className="w-75"/>
                            <Nav.Link href="registrase" className= "fw-bold" >Crear cuenta</Nav.Link>
                        </Form.Group>
                        <Form.Group  controlId="form-group-password" className="mb-3">
                            <Form.Label className="me-md-3 text-primary">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className="w-75"/>
                            <Nav.Link href="resete-password" className="fw-bold">Olvide Password</Nav.Link>
                        </Form.Group>
                        <Button as="input" type="submit" value="Login" className="my-auto fw-bold text-white"/>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default HeaderPublic