import React, { useEffect, useState } from "react";
// import API from "../utils/API";
import SaveResults from "../components/SaveResults";
import { Container } from "react-bootstrap";

function SavePage (){
return (
    <div>
      <Container className="py-5">
      <SaveResults />
      </Container>
     </div>
  );
}

export default SavePage;