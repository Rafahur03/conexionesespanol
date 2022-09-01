import {Container, Col, Row, Image} from 'react-bootstrap'
const QuienesSomos = () => {
  return (
	<>
		<Container fluid>
			<Container>
				<Row xs={1} md={2}  className=" row-cols-xl-2 gy-5 gx-5 mx-4">
					<Col>
						<h2 className="text-center fw-bold text-primary display-3 text-uppercase m-3">Somos</h2>
						<Image fluid src="src/img/somos.jpg" alt="Conexiosespañol" className="m-2 "/>
					</Col>
					<Col className="m-auto">
						<p className="somos fw-bold mt-5">Conexion español es una organizacion que busca enseñar el español en Francia.Manejamos diferents metodologias por lo que nos adaptamos al metodo de aprendizaje del estudiante, lo que facilita la optencion de resultados a corto tiempo. Nos interesamos en las motivaciones de nuestros estudiantes por lo que conectamos muy bien con ellos.</p>
					</Col>
				</Row>
			</Container>
		</Container>
		<Container fluid className="overflow-hidden bg-secondary text-center">
			con
			<Container>
				<h2 className="text-white text-uppercase  mx-5 my-2 text-center fw-bold display-4 ">Nuestros servicios.</h2>
				<Row xs={1} md={2}  className=" row-cols-xl-2 gy-5 gx-5 m-4">
					<Col>
						<Container className="p-3 bg-white border">
							<Image fluid src="src/img/conversando.jpg" alt="StockSnap" className="m-2 "/>
							<h3 className="mt-3 mb-0">Clases personalizadas de habla</h3>
						</Container>
					</Col>
					<Col>
						<Container className="p-3 bg-white">
							<Image fluid src="src/img/escritura.jpg" alt="Pexels" className="m-2 "/>
							<h3 className="mt-3  mb-0" >Clases de gramatica.</h3>
						</Container>
					</Col>
					<Col>
						<Container className="p-3 bg-white">
							<Image fluid src="src/img/escuchar.jpg" alt="Omar Medina" className="m-2 "/>
							<h3 className="mt-0  mb-3">Clases personalizadas de escucha</h3>
						</Container>
					</Col>
					<Col>
						<Container className="p-3 bg-white">
							<Image fluid src="src/img/mas.jpg" alt=" Justin Kilian" className="m-2 "/>
							<h3 className="mb-0  mb-3">Y mucho mas</h3>
						</Container>
					</Col>
				</Row>
				<h4 className="text-white text-uppercase  mx-5 my-4 text-center fw-bold display-6 ">Todos nuestros servicios son impartidos por hablantes nativos.</h4>
			</Container>
		</Container> 
	</>
    
    
  )
}

export default QuienesSomos