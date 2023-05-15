import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import postActions from "actions/postActions";
import Freelancing from "../../artifacts/contracts/Freelancing.sol/Freelancing.json";
import constant from "../../actions/contracts";
import Web3 from "web3";
import BlockchainAction from "actions/metaMasks/payments";
function ListingOfBidsPage() {
  
  const web3 = new Web3();
  const [contract, setContract] = useState(null);
  const [account, setAccounts] = useState(null);
  const [freelancerProposal,setFreelancerProposal]=useState([]);
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

  postActions.getProposals({},(err,res)=>{
    if(err){  

    }else{
      console.log(res.data);
      setFreelancerProposal(res.data.freelancerProposal);
      setmyProposal(res.data.myproposals);

    }
  })
 }
  useEffect(()=>{
    getData();
    loadBlockchain();
  },[])
 

  const handleAcceptBid =async (proposal) => {

    let amount = web3.utils.toWei(proposal.amount, 'ether');
    

    let projectCreate={
      client:account,
      freelancer:proposal.freelancerId.address,
      amount:amount,
      duration:proposal.deliveryTime
    }
   
    if(contract){
            
      let data=await BlockchainAction.handleCreateProject(projectCreate,account);
      let hello=await BlockchainAction.handleGetProjects();
      console.log(hello);
      let projectId=await contract.methods.getProjectLength().call();
      console.log(projectId,"her is data");
      
     let dataToSend={
      freelancerId: proposal.freelancerId._id,
      jobPostId:    proposal.jobpostId._id,
      proposalId:   proposal._id,
      projectId:    projectId,
      amount:       amount,
    }
    // let data=await BlockchainAction.handleGetProjects();
    // console.log(data);

    postActions.acceptJobpostAndCreateTransaction(dataToSend,(err,res)=>{
      if(err){

      }else{
        console.log(res.data)
      }
    })

    }
    getData();

     
    // Implement the logic to accept the bid with the given id
  };


  let Refund =async (bid)=>{
    let payload={
      dispute:true  
    }
    let dataToSend={
      payload:{
        clientId:bid.clientId._id,
        freelancerId:bid.freelancerId._id,
        jobpostId:bid.jobpostId._id,
        proposalId:bid._id
      }
    }
    
  
    postActions.getTransaction1(dataToSend,async (err,res)=>{
      if(err){

      }else{

        let transaction=res.data;
        let dataToSend1={
          transactionId:transaction._id,
          payload:payload 
      }
      await BlockchainAction.handleRefund(transaction.projectId,account);
  
      postActions.updateTransactionByfreelancer(dataToSend1,(err,res)=>{
          if(err){
  
          }else{
           console.log(res.data)   
              
          }
      })
            }
    })
    getData();

    
 }
 let WorkComplete =async (bid)=>{
    let payload={
      fundsReleased:true  
    }
    let dataToSend={
      payload:{
        clientId:bid.clientId._id,
        freelancerId:bid.freelancerId._id,
        jobpostId:bid.jobpostId._id,
        proposalId:bid._id
      }
    }
    
  
    postActions.getTransaction1(dataToSend,async (err,res)=>{
      if(err){

      }else{

        let transaction=res.data;
        let dataToSend1={
          transactionId:transaction._id,
          payload:payload 
      }
      await BlockchainAction.handleCompleteWork(transaction.projectId,account);
  
      postActions.updateTransactionByfreelancer(dataToSend1,(err,res)=>{
          if(err){
  
          }else{
           console.log(res.data)   
              
          }
      })
            }
    })
    getData();
    
 }
  return (
    <>
    <Container>
      <Row className="mt-3">
        <Col>
          <h2>Listing of Freelancer Proposal</h2>
        </Col>
      </Row>
      <hr />
      <Row className="mt-3">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Bidder Name</th>
                <th>Bid Amount</th>
                <th>Delivery Time (in days)</th>
                <th>Proposal</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myProposal.length>0? myProposal.map((bid) => (
                <tr key={bid.id}>
                  <td>{bid.freelancerId.firstName}</td>
                  <td>${bid.amount}</td>
                  <td>{bid.deliveryTime}</td>
                  <td>{bid.proposals}</td>
                  <td>{bid.action}</td>
                  <td>
                    {(bid.action === "in process") && (
                      <>
                        <Button
                          variant="success"
                          onClick={() => handleAcceptBid(bid)}
                        >
                          Accept
                        </Button>{" "}
                        
                      </>
                    )}
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
          <h2>Listing of MY Proposal</h2>
        </Col>
      </Row>
      <hr />
      <Row className="mt-3">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>client Name</th>
                <th>Bid Amount</th>
                <th>title</th>
                <th>description</th>
                <th>Status</th>
                <th>Work Complete</th>
                <th>Refund</th>


              </tr>
            </thead>
            <tbody>
              {freelancerProposal.length>0? freelancerProposal.map((bid) => (
                <tr key={bid.id}>
                  <td>{bid.clientId.firstName}</td>
                  <td>${bid.jobpostId.amount}</td>
                  <td>{bid.jobpostId.title}</td>
                  <td>{bid.jobpostId.description}</td>
                  <td>{bid.action}</td>
                 
                  <td>
                    {(bid.action === "accpeted") && (
                      <>
                        <Button
                          variant="success"
                          onClick={() => WorkComplete(bid)}
                        >
                          Work Complete
                        </Button>{" "}
                       
                      </>
                    )}
                  </td>
                  <td>
                    {(bid.action === "accpeted") && (
                      <>
                       
                        <Button
                          variant="success"
                          onClick={() => Refund(bid)}
                        >
                          Quit Job 
                        </Button>{" "}
                        
                      </>
                    )}
                  </td>
                 
                </tr>
              )):""}
            </tbody>
          </Table>
        </Col>
      </Row>
      <button>contract</button>
    </Container>

    </>
  );
}

export default ListingOfBidsPage;