import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import postActions from "actions/postActions";
import Freelancing from "../../artifacts/contracts/Freelancing.sol/Freelancing.json";
import constant from "../../actions/contracts";
import Web3 from "web3";
import BlockchainAction from "actions/metaMasks/payments";
import { wait } from "@testing-library/react";
function GetTransaction() {
  const web3 = new Web3();

  const [contract, setContract] = useState(null);
  const [account, setAccounts] = useState(null);
  const [transaction,setTransaction]=useState([]);
  const [receiveTransaction,setReceiveTransaction]=useState([]);

  
  const [myProposal,setmyProposal]=useState([]);
  // You can fetch the bid data for this project from Back4App here
  const loadBlockchain = async () => {
    try {
    	const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545/");
         const accounts = await web3.eth.getAccounts();
		console.log(accounts,'here is acc')
		setAccounts(accounts[0]);   
      

      if (true) {
        // console.log( Freelancing.abi," Freelancing.abi")
        const contracts = new web3.eth.Contract(
          Freelancing.abi,
          constant.address
        );
        setContract(contracts);
        setAccounts(accounts[0]);

      } 

    } catch (error) {
      console.log("her inside load")
      console.log(error.message)
    }
  };
  let getData=async ()=>{

  postActions.getTransaction({},(err,res)=>{
    if(err){  

    }else{
      console.log(res.data);
      setTransaction(res.data.myTransaction)
      setReceiveTransaction(res.data.receiveTransaction)
    }
  })
 }
  useEffect( async()=>{
    getData();
    loadBlockchain();
    let data= await BlockchainAction.getAllProjects();
    console.log(data,"here is all blockchain contract")
  },[])
 let Cancelled= async (transaction)=>{
    
    await BlockchainAction.handleCancelProject(transaction.projectId,account);
    let payload={
        cancelled:true  
    }
    let dataToSend={
        transactionId:transaction._id,
        payload:payload 
    }
    postActions.updateTransaction(dataToSend,(err,res)=>{
        if(err){

        }else{
         console.log(res.data)   
        }
    })
 }
 let ReleaseFund=async (transaction)=>{
    // await BlockchainAction.handleReleaseFunds(transaction.projectId,account);
    let payload={
        fundsReleased:true  
    }
    let dataToSend={
        transactionId:transaction._id,
        payload:payload 
    }
    postActions.updateTransaction(dataToSend,(err,res)=>{
        if(err){

        }else{
         console.log(res.data)   

            
        }
    })
 }
 let Dispute = async (transaction)=>{
    await BlockchainAction.handleRaiseDispute(transaction.projectId,account);
    let payload={
        dispute:true  
    }
    let dataToSend={
        transactionId:transaction._id,
        payload:payload 
    }
    postActions.updateTransaction(dataToSend,(err,res)=>{
        if(err){

        }else{
         console.log(res.data)   
            
        }
    })
 }
 let workAccepted = async (transaction)=>{
    await BlockchainAction.handleAcceptWork(transaction.projectId,account);
    let payload={
        workAccepted:true  
    }
    let dataToSend={
        transactionId:transaction._id,
        payload:payload 
    }
    postActions.updateTransaction(dataToSend,(err,res)=>{
        if(err){

        }else{
         console.log(res.data)   
            
        }
    })
 }

  return (
    <>
    <Container>
      <Row className="mt-3">
        <Col>
          <h2>Listing of OUR Transaction</h2>
        </Col>
      </Row>
      <hr />
      <Row className="mt-3">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>project ID</th>
                <th>details</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {transaction.length>0? transaction.map((data) => (
                <tr key={data.id}>
                  
                  <td>{data.projectId}</td>

                  <td>{JSON.stringify(data)}</td>
                  <td>
                     
                      <>
                       
                       {data.fundsReleased==false?<Button
                          variant="success"
                          onClick={() => ReleaseFund(data)}
                        >
                          ReleaseFund
                        </Button>:""}
                        {data.dispute==false?<Button
                          variant="success"
                          onClick={() => Dispute(data)}
                        >
                          Dispute
                        </Button>:""}
                        {data.cancelled==false?<Button
                          variant="success"
                          onClick={() => Cancelled(data)}
                        >
                          Cancelled
                        </Button>:""}
                        {data.workAccepted==false?<Button
                          variant="success"
                          onClick={() => workAccepted(data)}
                        >
                          work Accepted
                        </Button>:""}
                        
                      </>
                    
                  </td>
                </tr>
              )):""}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row className="mt-3">
        <Col>
          <h2>Listing of received Transaction</h2>
        </Col>
      </Row>
      <hr />
      <Row className="mt-3">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>project ID</th>
                <th>details</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {receiveTransaction.length>0? receiveTransaction.map((data) => (
                <tr key={data.id}>
                  
                  <td>{data.projectId}</td>

                  <td>{JSON.stringify(data)}</td>
                  <td>
                     
                      {/* <>
                       
                       {data.fundsReleased==false?<Button
                          variant="success"
                          onClick={() => ReleaseFund(data)}
                        >
                          ReleaseFund
                        </Button>:""}
                        {data.dispute==false?<Button
                          variant="success"
                          onClick={() => Dispute(data)}
                        >
                          Dispute
                        </Button>:""}
                        {data.cancelled==false?<Button
                          variant="success"
                          onClick={() => Cancelled(data)}
                        >
                          Cancelled
                        </Button>:""}
                        
                        
                      </>
                     */}
                  </td>
                
                </tr>
              )):""}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default GetTransaction;