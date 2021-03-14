import React from "react";
import "./main.sass";

import GlobalNavbar from "./components/GlobalNavbar";
import Header from "./components/Header";
import { Container } from "react-bootstrap";


// import "bootstrap/scss/_variables.scss"
// import "bootstrap/scss/_mixins.scss"
// import "bootstrap/scss/_functions.scss"
// import "bootstrap/scss/_utilities.scss"
// import "bootstrap/scss/bootstrap.scss"
// import "bootstrap/scss/bootstrap-reboot.scss"
// import "bootstrap/scss/bootstrap-grid.scss"
// import "bootstrap/scss/_navbar.scss"


function App() {

  return (
    <div>
      <GlobalNavbar />
      <Container className="py-5">
      <Header />
      </Container>
    </div>
  );
}


export default App;
