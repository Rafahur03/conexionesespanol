import {Container, CardGroup, Card, Form, Button} from 'react-bootstrap'

const FooterPublic = () => {
  return (
    <Container fluid className="border text-center mt-2">
        <Container>
			<h3 className="display-6  mt-2 fw-bold">Contactanos en: </h3>
			<CardGroup>
				<Card className="mx-4 border-0 ">
					<Card.Link href="https://wa.link/bnure3" target="_blank" className= "redes text-center mb-4">
						<i className="h2 bi bi-whatsapp"> WhatSapp</i>
					</Card.Link>
				</Card>
				<Card className="mx-4 border-0">
					<Card.Link href="https://www.facebook.com/Conexionesespanol" target="_blank" className= "redes text-center mb-4 text-decoration">
						<i className="h2 bi bi-facebook"> Facebook</i>                     
					</Card.Link>
				</Card>
				<Card className="mx-4 border-0">
					<Card.Link href="#contacto" className= " redes text-center">
						<i className="h2 bi bi-envelope-check"> Envianos un Email</i>
					</Card.Link>
				</Card>
			</CardGroup>
        </Container>
		<Container fluid className="my-3 border-bottom border-secondary">
			<h4 className="p-1 uppercase">Suscribete y recibe todas nuestras promociones</h4>
			<Form className="d-block">
				<Form.Group className="mb-3 d-inline-block w-50">
					<Form.Control placeholder="Ingresa tu correo"  />
				</Form.Group>
				<Button as="input" type="submit" value="Suscribirse" className="my-auto mx-4 fw-bold text-white"/>
			</Form>
		</Container>
        <h6 className="p-1">© 2022 Conexion Español, Colombia. Reservados todos los derechos</h6>
    </Container>
  )
}

export default FooterPublic