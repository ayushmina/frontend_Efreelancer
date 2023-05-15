import React, { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button, Badge } from "react-bootstrap";
import postActions from '../../actions/postActions';
import Multiselect from 'multiselect-react-dropdown';

// import { StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix, StepSeven, StepEight, StepNine, StepTen, StepEleven, StepTwelve } from "./Forms";


// import Panel1 from "pages/Feeds/Freelancer/Panel1";
import Cookies from "universal-cookie";
const FinalForm = () => {

	const cookie = new Cookies();

	const [activeStep, setActiveStep] = useState(0);
	const [Category, setCategory] = useState([{}]);
	const [selectedList,setSelectedList]=useState([]);
	const [title,setTitle]=useState("");
	const [description,setDescription]=useState("");
	const [amount,setAmount]=useState("");
	const [location,setLocation]=useState("");


	async function _submitForm(values, actions) {

	}

	function _handleSubmit(values, actions) {

	}
	useEffect(() => {

		postActions.getCategory({}, (err, res) => {
			if (err) {

			} else {
				let temp=[];
				let arry=res.data;
				if(arry.length>0){
					arry.map((ele)=>{
						temp.push({
							name:ele.Category,
							id:ele._id
						})
					})
				}
			
				setCategory(temp)
				
				console.log(res.data, "here is data");
			}
		})
	}, [])
	let onSelect=(selectedItem)=>{
		console.log(selectedItem,"here is somethings");
		let temp=selectedList;
		temp.push(selectedItem[0].id)
		setSelectedList(temp);
		console.log(temp,"here is temp");

	}
	let addPost= async (e)=>{
		let dataTosend={
			category:selectedList,
			title:title,
			description:description,
			amount:amount,
			location:location
		}
		console.log(dataTosend,"here is data");
		alert("here is 84 line")
		 postActions.addposts(dataTosend,(err,res)=>{

			if(err){
				
				return
			}else{
            window.location = '/';

				
			}

		})
	}
	return (
		// <Container className="ms-form">
		(
			<Row>
				{/* Step navigation */}
				<Col xs={12} md={3}>
					{/* <Panel1 /> */}
				</Col>


				{/* Step components */}
				<Col md={8}>
					<div className="headline" >
						<div className="text">JOB POST</div>
					</div>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Title </Form.Label>
							<Form.Control type="text" placeholder="Enter title" onChange={(e)=>{
								setTitle(e.target.value);
							}} />
							{/* <Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text> */}
						</Form.Group>
						<Form.Group className="mb-3" >
							<Form.Label>Description</Form.Label>
							<Form.Control type="text" placeholder="description"  onChange={(e)=>{
								setDescription(e.target.value);
							}}/>
						</Form.Group>
						<Form.Group className="mb-3" >
							<Form.Label>Amount</Form.Label>
							<Form.Control type="number" placeholder="amount" onChange={(e)=>{
								setAmount(e.target.value);
							}} />
						</Form.Group>
						<Form.Group className="mb-3" >
							<Form.Label>Location</Form.Label>
							<Form.Control type="text" placeholder="location" onChange={(e)=>{
								setLocation(e.target.value);
							}} />
						</Form.Group>
						{Category.length>0?<Multiselect
							options={Category} // Options to display in the dropdown
							// selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
							onSelect={onSelect} // Function will trigger on select event
							displayValue="name" // Property name to display in the dropdown options
							
						/>:""}
						</Form>
						<button type="button" onClick={(e)=>{
								e.preventDefault()
							    addPost(e);
						}}  >
							Submit
						</button>
					
				</Col>
			</Row>
		)
		// </Container>
	);
};

export default FinalForm;
