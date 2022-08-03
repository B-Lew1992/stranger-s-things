import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { APIURL } from '..';





const Add = ({posts, setPosts, token}) => {
    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);
    const [price,setPrice] = useState([]);
    const [location, setLocation] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`${APIURL}/posts`, {
            method: 'POST',
            headers: {
                'content-type': "Application/json",
                'Authorization': 'Bearer TOKEN_STRING_HERE',
            },
            body: JSON.stringify({
                title,
                body,
                price,
                location,
            })
        }); 
        const data = await response.json();
        console.log("data: ", data);
        setPosts([data, ...posts]);
        setTitle("");
        setBody("");
        setPrice("");
        setLocation("");

        console.log(token)

    


    }
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail" onChange= {(event) => setTitle(event.target.value)}>
            
          <Form.Label column sm={2}>
           Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control />
          </Col>
        </Form.Group>
  
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" onChange= {(event) => setBody(event.target.value)}>

          <Form.Label column sm={2}>
            Body
          </Form.Label>
          <Col sm={10}>
            <Form.Control />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" onChange= {(event) => setPrice(event.target.value)}>
          <Form.Label column sm={2}>
            Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" onChange= {(event) => setLocation(event.target.value)}>
          <Form.Label column sm={2}>
            Location
          </Form.Label>
          <Col sm={10}>
            <Form.Control />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Willing to Deliver?" />
          </Col>
        </Form.Group>
  
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Add Post</Button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
  
  export default Add;