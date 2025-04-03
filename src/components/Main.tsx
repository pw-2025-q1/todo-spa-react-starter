import { Container, Row, Col } from 'react-bootstrap';


const Main: React.FC = () => {
    

    return (
        <main className="pt-4 pb-5">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col col={10}>
                        {/* TODO: add tab content */}
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Main;
