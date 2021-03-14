import React, { useRef }from "react";
import { Card, Form, Button} from "react-bootstrap";
import API from "../utils/API";

function SearchForm() {

    const bookInput = useRef();


    const handleSubmit = event => {

        event.preventDefault();
        API.getBooks(bookInput.current.value)
            .then((res) => {

            console.log(res);
            
        });
    }

    return(
    <Card>
        <Card.Body>
            <h2>Search</h2>
            <Form >
                <Form.Group>
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control ref={bookInput} type="text" placeholder="Enter book title here" />
                </Form.Group>
                <Button onClick={handleSubmit} varitant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </Card.Body>
    </Card>
    )
}

export default SearchForm;