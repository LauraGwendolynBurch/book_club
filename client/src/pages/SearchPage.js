import React, { useEffect, useState } from "react";
// import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import { Container } from "react-bootstrap";

function SearchPage (){
return (
    <div>
      <Container className="py-5">
      <SearchForm />
      <Results />
      </Container>
     </div>
  );
}

export default SearchPage;