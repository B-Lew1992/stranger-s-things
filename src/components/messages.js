import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function MyForm() {
  // const [token, setToken] = useState("")
  // setToken(token)

  return (
    <Form>
      <Form.Group
        style={{
          margin: "2rem 0rem 1rem",
        }}
      >
        <Form.Control type="message" placeholder="Message" />
      </Form.Group>
      <Button type="submit">Send</Button>
    </Form>
  );
}

export default MyForm;
