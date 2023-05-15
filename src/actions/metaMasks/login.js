import Web3 from 'web3';




function getPost() {
    let address=''
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try { 
           window.ethereum.enable().then(() => {
               // User has allowed account access to DApp...
               console.log(web3.eth.accounts,"web3.eth.accounts")
            //    console.log()
              this.setState({address: web3.eth.accounts[0]})
              setInterval(() => {
                if (web3.eth.accounts[0] !== address) {
                    address= web3.eth.accounts[0];
                }
              }, 100);
              return address;
           });
           
        } catch(e) {
           // User has denied account access to DApp...
        }


     }
    
     else {
        window.location.href = "/login";
     }
}
