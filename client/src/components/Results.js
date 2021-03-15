import React from "react";
import { Button, Card } from "react-bootstrap";



function Results({ books }) {



    return (
        <div>
            {books.map(book => {
                return (
                    <Card key={book.id}>
                        <Card.Img variant="top" src={book.volumeInfo.imageLinks.thumbnail} style={{width:"200px", height:"250px"}}/>
                        <Card.Body>
                            <Card.Title>{book.volumeInfo.title}</Card.Title>
                            <h5 >{book.volumeInfo.authors}</h5>
                            <Card.Text>{book.volumeInfo.description}</Card.Text>
                            <Button ><a href={book.volumeInfo.previewLink} className="text-white">Link to book</a></Button>
                            <br />
                            <Button variant="primary">Save</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )


}

export default Results;