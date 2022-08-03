import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/posts">Posts</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                props.setToken("");
              }}
              href="/"
            >
              Log Out
            </button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
