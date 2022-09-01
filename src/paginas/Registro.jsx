import {Container, Form, Col, Row, Button} from 'react-bootstrap'

const Registro = () => {
  return (
    <>
        <Container fluid className="bg-secondary overflow-hidden m-4">
            <Row xs={1} sm={2} className=" row-cols-xl-2 gy-5 gx-3 m-2">
                <Col className="my-auto">
                    <h2 className="text-white uppercase display-4"> <span className="text-primary fw-bold"> Registrate</span> y comienza a<span className="text-primary fw-bold"> disfrutar</span> de nuestro contenido exclusivo para<span className="text-primary fw-bold"> suscriptores</span></h2>
                 </Col>
                <Col>
                    <Form className="w-75">
                         <Form.Group  controlId="form-registro-nombre" className="m-2"   >
                            <Form.Label className=" text-primary">Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su nombre completo" className=""/>
                         </Form.Group>
                         <Form.Group  controlId="form-registro-email" className="m-2"   >
                            <Form.Label className=" text-primary">Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className=""/>
                         </Form.Group>
                        <Form.Group  controlId="form-registro-telefono" className="m-2"   >
                            <Form.Label className=" text-primary">Telefono</Form.Label>
                            <Form.Control type="tel"  placeholder="Ingresa tu telefono" className=""/>
                        </Form.Group>
                        <Form.Group  controlId="form-registro-passwordr" className="m-2">
                            <Form.Label className=" text-primary">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className=""/>
                        </Form.Group>
                        <Form.Group  controlId="form-registro-password" className="m-2">
                            <Form.Label className=" text-primary">Repetir Password</Form.Label>
                            <Form.Control type="password" placeholder="Repetir Password" className=""/>
                        </Form.Group>
                        <Button as="input" type="submit" value="Registrase" className="m-4 fw-bold text-white"/>
                    </Form>
                
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Registro