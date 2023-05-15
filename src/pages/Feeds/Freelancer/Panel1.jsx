/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar, Chip, LinearProgress } from "@material-ui/core";
import React, { useEffect,useState } from "react";
import { Card, Col, Row ,Button} from "react-bootstrap";
import BtnIcon from "components/Buttons/BtnIcon";
import { Link } from "react-router-dom";
import ChipGroup from "components/Chip/ChipGroup";
import Sticky from "react-stickynode";
import userAction from "actions/user.action";
import Cookies from "universal-cookie";
import Agent from "actions/superAgent";
import Web3 from "web3";
import constants from "../../../actions/contracts"
import Freelancing from "../../../artifacts/contracts/Freelancing.sol/Freelancing.json";

function LinearProgressWithLabel(props) { 
	
	const { value, ...other } = props;
    
	return (
		<Row className="align-items-center g-3">
			<Col>
				<LinearProgress variant="determinate" value={value} {...other} />
			</Col>
			<Col xs="auto">
				<Chip size="small" color="primary" label={`${Math.round(value)}%`} />
			</Col>
		</Row>
	);
}

// let userInfo=(setbalance,setAddress)=>{
	
// 		if (window.ethereum) {
// 			const web3 = new Web3(window.ethereum);
// 			try { 
// 			   window.ethereum.enable().then(() => {
// 				   // User has allowed account access to DApp...
// 				const contract =new web3.eth.contract(constants.abi).at(constants.address)
// 				console.log(contract)
// 				setAddress(web3.eth.accounts[0]);
// 				 web3.eth.getBalance(web3.eth.accounts[0], (error, result) => {
// 					setbalance(web3.fromWei(result, "ether").toNumber())
// 					console.log(web3.fromWei(result, "ether").toNumber(),web3.eth.accounts[0])
					
// 				 });
	
	
	
	
// 			   });
			   
// 			} catch(e) {
// 			  console.log(e,"here is error in userinfo")
// 			}
// 		}
// }

// let loginWithMetamask=(setUser,setAddress)=>{
// 	let token = Agent.getToken()
// 		console.log(token,"here is token");
// 		let address=''
// 		if (window.ethereum) {
// 			const web3 = new Web3(window.ethereum);
// 			try { 
// 			   window.ethereum.enable().then(() => {
// 				   // User has allowed account access to DApp...
// 				   console.log(web3.eth.accounts,"web3.eth.accounts")
// 				   console.log(web3.eth.accounts,"web3.eth.accounts")

// 				//    console.log()
// 				setUser(web3.eth.accounts[0])
				  
// 				  setInterval(() => {
// 					if (web3.eth.accounts[0] !== address) {
// 						address= web3.eth.accounts[0];
// 					}
// 				  }, 100);
// 			   });
			   
// 			} catch(e) {

// 				console.log(e,"here is err")
// 						}
// 		}
// }

const Panel1 = () => {
	const categories = ["Web Development", "Android Development", "UI/UX Design", "WordPress"];
	const [user, setUser] = useState(null)
	const [balance, setbalance] = useState(null)
	const [address, setAddress] = useState(null)
	// const [web3, setWeb3] = useState(null);



	const loginWithMetamask = async () => {
		const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545/");
         const accounts = await web3.eth.getAccounts();
		const contract = new web3.eth.Contract(
			Freelancing.abi,
		  constants.address
		);
		// setWeb3(web3);
		setUser(accounts);
		// setContract(contract);
	
	  };
	let Islogin=async ()=>{
		const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545/");
         const accounts = await web3.eth.getAccounts();
		console.log(accounts,'here is acc')
		setUser(accounts[0]);

	}

	// let cookie = new Cookies();

	const chipDelete = () => {
		console.info("Chip Delete");
	};

	useEffect(async ()=>{
		let token = Agent.getToken()
		console.log(token,"here is token");
		Islogin();
		// loginWithMetamask();
		// setUser(token);
		// userAction.getUserInfo({},(err,res)=>{
		// 	if(err){
		// 	}else{
		// 	console.log(res.data);
		// 	}
		// })	
	},[])

	useEffect(()=>{
		
	},[user])


	return (
		<>
		{user?<>
			<Card className="mb-3">
				<Card.Body>
					<Row className="justify-content-center">
						<Col xs="auto">
							<div className="user-active p-1">
								<Link to="/profile" className="text-center text-primary my-3">
									<Avatar variant="rounded" alt="User Name" src="" className="large"></Avatar>
								</Link>
							</div>
						</Col>
						
					</Row>
					<Row className="align-items-center mb-3">
						<Col>
							<h6>{address}</h6>
							<i className="fas fa-globe-asia"></i>
							<span className="ms-2">{user}</span>
						</Col>
						
					</Row>
					{/* <Row className="align-items-center mb-3">
						<Col>
							<h6>Hours</h6>
							<i className="far fa-clock"></i>
							<span className="ms-2">More than 30hrs/week</span>
						</Col>
						<Col xs="auto">
							<BtnIcon iconType="edit" />
						</Col>
					</Row> */}
					{/* <div className="mb-3">
						<h6>Profile Completion</h6>
						<LinearProgressWithLabel value={50} />
						<a className="text-primary" href="#">
							<i className="fas fa-plus-square"></i>
							<span className="ms-2">Add Testimonial +30%</span>
						</a>
					</div> */}
					{/* <h6>Proposals</h6>
					<a className="text-primary" href="#">
						50 available connects
					</a> */}
				</Card.Body>
			</Card>
			<Sticky top="#topNav" innerActiveClass="mt-3" enabled={true} innerZ={1200} bottomBoundary="#main-content">
				<Card>
					<Card.Body>
						<Row className="align-items-center">
							<Col as="h5" className="mb-0">
								Category
							</Col>
							<Col xs="auto">
								<BtnIcon iconType="edit" />
							</Col>
						</Row>
						<div className="mt-3">
							<ChipGroup itemList={categories} size="small" onDelete={chipDelete} />
						</div>
					</Card.Body>
				</Card>
			</Sticky>
		</>: <div className="mb-2">
        <Button variant="primary" size="lg" onClick={(e)=>{
			e.preventDefault();
			loginWithMetamask();
		}}>
          LOGIN WITH METAMASKS
        </Button>
      </div>
      }	
			
		</>
	);
};

export default Panel1;
