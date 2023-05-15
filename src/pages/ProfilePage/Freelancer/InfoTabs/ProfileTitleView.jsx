import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import BtnIcon from "components/Buttons/BtnIcon";
import ModalForm from "components/Modal/ModalForm";
import userAction from "actions/user.action";

const ProfileTitleView = ({ activeUser, publicView }) => {
	// Modal Control
	const [modalProps, setModalProps] = useState({ open: false, action: "" });

	const [title,setTitle]= useState();
	const [hour,setHour]= useState();
	const [overview,setOverview]= useState();


	const handleClose = () => setModalProps({ open: false });
	const editHandleShow = () => {
		setModalProps({ open: true, action: "Edit" });
		console.log("here is ,y ress")
	};
	const submit = () =>{
		let datatosend={
			data:{
				title:title,
				HourlyRate:hour,
				introduction:overview
			},
			type:"Overview"
		}
		console.log('here is i am')
		userAction.updateuserInfo(datatosend,(err,res)=>{
			if(err){

			}else{
				console.log(res);
			}
		})
		
	}

	// modal field forms
	const renderFormFields = (
		<><Form>
			<Row className="align-items-end">
				<Col xs={12} className="mb-3">
					<Form.Group controlId="profileTitle">
						<Form.Label>Title</Form.Label>
						<Form.Control  type="text"  name="profileTitle"  onChange={(e)=>{
							setTitle(e.target.value);
												}}/>
					</Form.Group>
				</Col>
				<Col xs={12} className="mb-3">
					<Form.Group controlId="hourlyRate">
						<Form.Label>Hourly Rate</Form.Label>
						<Form.Control type="text" name="hourlyRate" onChange={(e)=>{
							setHour(e.target.value);
												}}/>
					</Form.Group>
				</Col>
				<Col xs={12}>
					<Form.Group controlId="profileOverview">
						<Form.Label>Overview</Form.Label>
						<Form.Control as="textarea" rows={4} onChange={(e)=>{
							setOverview(e.target.value);
												}}
						// onChange={(e)=>{
						// 	console.log(e.target.value,'here is vsalues')}}
							 name="profileOverview" />
					</Form.Group>
				</Col>

			</Row>
		</Form>
		</>


	);

	return (
		<>
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					{activeUser.profileTitle}
					{publicView ? null : <BtnIcon iconType="edit"  onClick={editHandleShow} />}
				</Card.Title>
				<Card.Subtitle>${activeUser.hourlyRate}/hr</Card.Subtitle>
				<Card.Text className="mt-3">{activeUser.profileOverview}</Card.Text>
			</Card>
			{/* Modal */}
			<ModalForm show={modalProps.open} submit={submit} onHide={handleClose}  action={modalProps.action} title="Title & Overview">
				{renderFormFields}
			</ModalForm>
		</>
	);
};

export default ProfileTitleView;
