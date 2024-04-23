import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerOutsideExample() {
  return (
    <section className="p-3 bg-dark text-white">
      <Container>
        <Navbar expand="lg">
          <h1 className="text-info">Google Keep</h1>
        </Navbar>
      </Container>
    </section>
  );
}

export default ContainerOutsideExample;