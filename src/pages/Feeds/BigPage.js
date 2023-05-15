import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import postActions from "actions/postActions";
function BidOnProjectPage(data) {
  // You can fetch the project data from Back4App here
data=data.data;

const [amount,setAmount]=useState();
const [proposals,setProposals]=useState();
const [deliveryTime,setDeliveryTime]=useState();
let postProposals=()=>{
  let dataToSend={
    proposals:proposals,
    amount:amount,
    deliveryTime:deliveryTime,
    jobpostId:data._id,
    clientId:data.clientId._id,
    address:"lsdygvsagdvlsdvhjsavsdhjcbljsdcb"
  }
  console.log(dataToSend,"here is daat to send")
  
  postActions.postProposal(dataToSend,(err,res)=>{
    if(err){

    }else{
      console.log(res)
    }
  })

}

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h2>Bid on Project</h2>
        </Col>
      </Row>
      <hr />
      <Row className="mt-3">
        <Col>
          <h3>Project Title: {data.title}</h3>
          <p>{data.description}
            {" "}
            <br/>
            amount: {data.amount}
            <br/>
            location: {data.location}

          </p>
        </Col>
      </Row>
      <hr />
      <Row className="mt-3">
        <Col>
          <Form>
            <Form.Group controlId="bidAmount">
              <Form.Label>Bid Amount</Form.Label>
              <Form.Control type="number" onChange={(e)=>{
                e.preventDefault();
                setAmount(e.target.value);
              }} placeholder="Enter your bid amount" />
            </Form.Group>

            <Form.Group controlId="deliveryTime">
              <Form.Label>Delivery Time</Form.Label>
              <Form.Control
                type="number"
                onChange={(e)=>{
                  e.preventDefault();
                  setDeliveryTime(e.target.value);
                }}
                placeholder="Enter your delivery time in days"
              />
            </Form.Group>

            <Form.Group controlId="proposal">
              <Form.Label>Proposal</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e)=>{
                  e.preventDefault();
                  setProposals(e.target.value);
                }}
                rows={3}
                placeholder="Enter your proposal"
              />
            </Form.Group>

           
          </Form>
          <Button  onClick={postProposals} variant="primary" type="button">
              Submit Bid
            </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BidOnProjectPage;