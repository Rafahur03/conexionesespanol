import {  Container, Row, Col, Image} from 'react-bootstrap'


const Inicio = () => {
  return (
        <>
            <Container fluid className="bg-secondary  rounded-bottom-sm">
                <Row xs={1} className="g-2 ">
                    <Col md={5} className="my-auto">
                    <h2 className="text-white text-uppercase m-5 text-center display-5 fw-bold "> Clases particulares personalizadas de Español y Frances</h2>
                    <h3 className="text-primary fw-bold text-center text-uppercase mb-4 py-5 display-6">No solo te enseñamos, dialogamos de lo que te apasiona</h3>  
                    </Col>
                    <Col md={7} className="my-auto">
                        <Image fluid src="src/img/mapa.jpg" className="p-4 "/>
                    </Col>
                </Row>               
            </Container>
            <Container fluid className="px-2 overflow-hidden">
                <h2 className="text-secondary display-4 fw-bold text-uppercase mb-5 mx-4 pt-5">¿Necesitas hablar español fluido?</h2>
                <Row xs={1} md={4} className="gx-4 m-4">
                    <Col>
                        <div className="">
                            <Image fluid src="src/img/trabajo.jpg" className=""/>
                            <p className="mt-3 mb-0">¿Necesitas aprender español?</p>
                            <p className="fw-bold mb-4"> Para avanzar en tu carrera profesional?</p>
                        </div>
                    </Col>
                    <Col>
                        <Image fluid src="src/img/amigos.jpg" className=""/>
                        <p className="mt-3  mb-0">¿Tienes amigos extranjeros de habla hispana</p>
                        <p className="fw-bold mb-4"> Y quieres poder entender todo lo que te comunican?</p>
                    </Col>
                    <Col>
                        <Image fluid src="src/img/viaje.jpg" className=""/>
                        <p className="mt-3  mb-0">¿Quieres mudarte a un pais de habla hispana?</p>
                        <p className="fw-bold mb-4"> Y necesitas poder comunicarte correctamente</p>
                    </Col>
                    <Col>
                         <Image fluid src="src/img/banderas.jpg" className=""/>
                        <p className="mt-3  mb-0">¿Quieres ser poliglota y ahora aprendes español?</p>
                        <p className="fw-bold mb-4">Necesitas mejorar tú comprencion oral y escrita</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="overflow-hidden bg-secondary text-center">
                 <h2 className="text-white text-uppercase  m-5 text-center fw-bold display-4 ">Cual ha sido tu inconveniente</h2>
                <Row xs={1} md={2}  className=" row-cols-xl-2 gy-5 gx-5 m-4">
                    <Col>
                        <Container className="p-3 bg-white border">
                            <i className="bi bi-calendar3-week-fill text-primary display-6"></i>
                            <h3 className="mt-3 mb-0">Los Horarios de clases son poco flexibles con tu tiempo</h3>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="p-3 bg-white">
                            <i className="bi bi-emoji-frown-fill text-primary display-6"></i>
                            <h3 className="mt-3  mb-0" > Te aburres de las clases tradicionales</h3>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="p-3 bg-white">
                            <i className="bi bi-people-fill text-primary display-6"></i>
                            <h3 className="mt-0  mb-3">quieres algo más personalizado</h3>
                        </Container>
                    </Col>
                    <Col>
                        <Container className="p-3 bg-white">
                            <i className="bi bi-envelope-dash-fill text-primary mb-3 display-6"></i>
                            <h3 className="mb-0  mb-3">No tenias suficiente retroalimentacion</h3>
                        </Container>
                    </Col>
                </Row>
                <h2 className="text-white text-uppercase  m-5 text-center fw-bold display-4 ">Somos lo que necesitas</h2>
            </Container>
         </>
    )
}

export default Inicio