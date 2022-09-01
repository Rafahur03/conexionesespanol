import {Container, Form, Col, Row, Button} from 'react-bootstrap'

const OlvidePassword = () => {
  return (
    <>
         <Container fluid className="bg-secondary overflow-hidden p-4 my-4">
            <Row xs={1} sm={2} className=" row-cols-xl-2 gy-5  my-2">
                <Col className="my-auto">
                    <h2 className="text-white uppercase display-6"> <span className="text-primary fw-bold"> Recupera</span> tu cuenta y continua<span className="text-primary fw-bold"> disfrutando</span> de nuestro contenido exclusivo para<span className="text-primary fw-bold"> suscriptores</span></h2>
                 </Col>
                <Col>
                    <Form className="w-75">
                        <Form.Group  controlId="form-recuperar-email" className="m-2"   >
                            <Form.Label className=" text-primary">Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className=""/>
                         </Form.Group>
                        <Button as="input" type="submit" value="Enviar Instrucciones" className="m-4 fw-bold text-white"/>
                    </Form>
                </Col>
            </Row>
        </Container>
    
    </>
  )
}

export default OlvidePassword