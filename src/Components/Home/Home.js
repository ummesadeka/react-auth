import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { transportData } from "../fakeData/transports";
import Transport from "../Transport/Transport";
import './Home.css' 

const Home = () => {
  const [transports,setTransports] = useState([]);
  useEffect(()=>{
    const data = transportData;
    setTransports(data)
  },[])
  return (
  
      <Container>
        <h2 className="text-center">Select Your transport type</h2>
      <Row>
       <div className="d-flex">
       {transports.map((transport) => (
          <Col sm={12} lg={3} md={3} key={transport.key}>
            <Transport transport={transport}></Transport>
          </Col>
        ))}
       </div>
      </Row>
    </Container>
    
  );
};

export default Home;