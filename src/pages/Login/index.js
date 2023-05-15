import React, { useEffect, useState } from "react"
import "./index.css"
// import postActions from "actions/postActions"
import Web3 from "web3";
import constants from "../../actions/contracts"
import Freelancing from "../../artifacts/contracts/Freelancing.sol/Freelancing.json";

import userAction from "actions/user.action"
import Cookies from 'universal-cookie';
// import Agent from "actions/superAgent";
function Login() {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [user,setUser]=useState(null);
  const [next,setNext]=useState(false);
  const cookie = new Cookies();

      // useEffect(()=>{

      //   let {token,token1}=Agent.getToken();
      //   if(token||token1){
      //     window.location = '/'; 
      //   }
      // },[])
  

	const loginWithMetamask = async () => {
		const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545/");
         const accounts = await web3.eth.getAccounts();
		const contract = new web3.eth.Contract(
			Freelancing.abi,
		  constants.address
		);
		// setWeb3(web3);
		setUser(accounts[0]);
		// setContract(contract);
	
	  };
  let login = () => {
    
    let dataToSend={
        countryCode:"+91",
        firstName:name,
        lastName:"",
        email:email,
        phoneNumber:phoneNumber,
        password:password,
        address: user
    }
    console.log(dataToSend,"her is data")
    userAction.signUp(dataToSend,(err,res)=>{
        if(err){

        }else{
            console.log(res.data);
            cookie.set("x-access-token-ns",res.data.token);
            cookie.set("address",res.data.address);
           window.location = '/'; 

        }
    })
  }
  let checkfrom=()=>{
    if(name&&email&&phoneNumber&&password){
        return true;
    }
    return false;
  }


  return (
    <>
      {next==false?
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign Up</h3>

            <div className="mb-3">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={(e)=>{
                    setName(e.target.value)
                }}
              />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
              />
            </div>

            <div className="mb-3">
              <label>Phone </label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(e)=>{
                    setPhoneNumber(e.target.value)
                }}
              />
            </div>

            

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
              />
            </div>

            <div className="d-grid">
              <button type="button" className="btn btn-primary" onClick={(e)=>{
                e.preventDefault();
                if(checkfrom()){
                    setNext(true);
                }
                
              }}>
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/sign-in">sign in?</a>
            </p>
          </form>
        </div>
      </div>:user==null?
      <div className="d-grid">
              <button type="button" onClick={(e)=>{
                e.preventDefault();
                loginWithMetamask();
              }} className="">
                connect with metaMasks
              </button>
            </div>:""  
      }
      {
        user?
        <div className="auth-wrapper">
        <div className="auth-inner">
            <button type="button" onClick={(e)=>{
                e.preventDefault();
               login();
              }} className="btn btn-primary"> Please Submit Form</button>
            

            </div>
        </div>:" "
      }

    </>
  )
}

export default Login
