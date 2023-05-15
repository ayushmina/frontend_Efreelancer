import Web3 from "web3";
import Freelancing from "../../artifacts/contracts/Freelancing.sol/Freelancing.json";
import constant from "../contracts";
// import { ethers } from "ethers";


  // const loadBlockchain = async () => {
  //   try {
  //     const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545/");
  //     const accounts = await web3.eth.getAccounts();
      

  //     if (true) {
  //       const contract = new web3.eth.Contract(
  //         Freelancing.abi,
  //         constant.address
  //       );
  //     } 

  //   } catch (error) {
  //     console.log("her inside load")
  //     console.log(error.message)
  //   }
  // };
  const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545/");
  const contract = new web3.eth.Contract(
    Freelancing.abi,
    constant.address
  );

  const handleCreateProject = async (projectData,account) => {
    let { client, freelancer, amount, duration } = projectData;
    try {
      console.log("here is ")
      // amount=ethers.utils.parseEther(amount);
        // await contract.methods
        // .createProject(freelancer, client, duration)
        // .send({ from: account, value: amount });

        // let projectId=await contract.methods
        // .createProject(freelancer, client, duration)
        // .call();
        // console.log("vipul",projectId,"bhakar")
        const result = await contract.methods.createProject(client,freelancer, duration)
        .send({from: account, value: amount});

        console.log("Results of project created:",result);
        return result;
    
      } catch (error) {
      console.log(error.message)
    }
  };

  const handleCompleteWork = async (projectId,account) => {
    try {
      await contract.methods
        .completeWork(projectId)
        .send({ from: account });
      // setProjectId(null);
    } catch (error) {
      console.log(error.message)
    }
  };

  const handleAcceptWork = async (projectId,account) => {
    try {
      console.log(account);

     let data= await contract.methods.acceptWork(projectId).send({ from: account });
     console.log(data,'here is ')
      // setProjectId(null);
    } catch (error) {
      console.log(error.message)
    }
  };

  const handleReleaseFunds = async (projectId,account) => {
    try {
      await contract.methods
        .releaseFunds(projectId)
        .send({ from: account });
      // setProjectId(null);
    } catch (error) {
      console.log(error.message)
    }
  };

  const handleRefund = async (projectId,account) => {
    try {
      await contract.methods.refund(projectId).send({ from: account });
      // setProjectId(null);
    } catch (error) {
      console.log(error.message)
    }
  };

  const handleCancelProject = async (projectId,account) => {
    try {
      await contract.methods
        .cancelProject(projectId)
        .send({ from: account });
      // setProjectId(null);
    } catch (error) {
      console.log(error.message)
    }
  };

  const handleRaiseDispute = async (projectId,account) => {
    try {
      await contract.methods
        .raiseDispute(projectId)
        .send({ from: account });
      // setProjectId(null);
    } catch (error) {
      console.log(error.message)
    }
  };

  const handleResolveDispute = async (projectId,account) => {
    try {
      await contract.methods
        .resolveDispute(projectId)
        .send({ from: account });
      // setProjectId(null);
    } catch (error) {
      console.log(error.message)
    }
  };

  const handleGetProjects = async () => {
    try {
      const result = await contract.methods.getProjectLength().call();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error.message)
    }
  };
  const getAllProjects = async () => {
    try {
      const result = await contract.methods.getAllProjects().call();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error.message)
    }
  };


  const handleGetProjectDetails = async (projectId) => {
    try {
      const result = await contract.methods.getProjectDetails(projectId).call();
      console.log(result);
    } catch (error) {
      console.log(error.message)
    }
  };

   let BlockchainAction={
   handleCreateProject,
   handleAcceptWork,
   handleCompleteWork,
   handleCancelProject,
   handleGetProjectDetails,
   handleResolveDispute,
   handleRaiseDispute,
   handleReleaseFunds,
   handleGetProjects,
   handleRefund,
   getAllProjects
  }
  
  export default BlockchainAction;