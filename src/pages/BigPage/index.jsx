import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import BidOnProjectPage from "pages/Feeds/BigPage";
import { useParams } from "react-router-dom";
import postActions from "actions/postActions";

const BidPage = (props) => {
    // console.log(props.match.params.bigd,'here inside bidpage');
    const [id,setId]=useState(null)
    let {bigid} = useParams(); 
    const params = useParams();
  
    const [jobPost,setJobPost]=useState({});
    let getJobpost=async ()=>{
        let dataToSend={
            _id:params.bidid.slice(0, -1)
        }
        console.log(params.bidid.slice(0, -1),"here is")
        postActions.getPost(dataToSend,(err,res)=>{
            if(err){

            }else{
                console.log(res);
                setJobPost(res.data[0])
            }
        })
    }

    // getJobpost();
 
    useEffect( ()=>{    
        getJobpost()
    },[])

   


    
	return (
		// <Container fluid="lg" className="my-3 my-lg-4">
		<Row className="gy-3 gx-0 gx-md-3">
		
			<Col xs={12} md={9}>
				<BidOnProjectPage  data={jobPost}/>
			</Col>
		</Row>
		// </Container>
	);
};

export default BidPage;
