import React from "react";
import { Card, Form, Button} from "react-bootstrap";

function SearchForm() {
    return(
    <Card>
        <Card.Body>
            <h2>Search</h2>
            <Form>
                <Form.Group controlId="">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter book title here" />
                </Form.Group>
                <Button varitant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </Card.Body>
    </Card>
    )
}

export default SearchForm;