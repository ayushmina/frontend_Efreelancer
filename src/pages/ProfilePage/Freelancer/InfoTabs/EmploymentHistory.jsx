import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import EmptyAdd from "components/EmptyAdd/EmptyAdd";
import BtnIcon from "components/Buttons/BtnIcon";
import ModalForm from "components/Modal/ModalForm";
import { setegid } from "process";

const Employment = ({ empHistory }) => {
	return (
		<Col xs={12}>
			<div className="employment-history">
				<div className="employment-details ps-3">
					<h6>
						<span className="emp-designation">{empHistory.designation}</span> | <span className="emp-place">{empHistory.institute}</span>
					</h6>
					<small className="emp-duration">
						{empHistory.startDate} - {empHistory.endDate}
					</small>
					<p className="emp-details mt-3">{empHistory.details}</p>
				</div>
			</div>
		</Col>
	);
};

const EmploymentHistory = ({ employmentHistory, publicView }) => {
	const [modalProps, setModalProps] = useState({ open: false, action: "" });

	const[designation,setDesignation]=useState();
	const[institute,setInstitute]=useState();
	const[start,setStart]=useState();
	const[end,setEnd]=useState();
	const[details,setDetails]=useState();

	const handleClose = () => setModalProps({ open: false });
	const addHandleShow = () => {
		setModalProps({ open: true, action: "Add" });
	};
	// const editHandleShow = () => {
	// 	setModalProps({ open: true, action: "Edit" });
	// };

	const updateemployemnthistory = () =>{
		let datatosend={
			designation,institute,start,end,details
			
		}
	}

	// modal field forms
	const renderFormFields = (
		<Form>
			<Row className="align-items-end">
				<Col xs={12} className="mb-3">
					<Form.Group controlId="designation">
						<Form.Label>Designation</Form.Label>
						<Form.Control type="text" name="designation"  onChange={(e)=>{
							setDesignation(e.target.value);}}/>
					</Form.Group>
				</Col>
				<Col xs={12} className="mb-3">
					<Form.Group controlId="institute">
						<Form.Label>Institute Name</Form.Label>
						<Form.Control type="text" name="institute" onChange={(e)=>{
							setInstitute(e.target.value);}} />
					</Form.Group>
				</Col>
				<Col xs={6} className="mb-3">
					<Form.Group controlId="startDate">
						<Form.Label>Start Date</Form.Label>
						<Form.Control type="text" name="startDate" onChange={(e)=>{
							setStart(e.target.value);}} />
					</Form.Group>
				</Col>
				<Col xs={6} className="mb-3">
					<Form.Group controlId="endDate">
						<Form.Label>End Date</Form.Label>
						<Form.Control type="text" name="endDate" onChange={(e)=>{
							setEnd(e.target.value);}} />
					</Form.Group>
				</Col>
				<Col xs={12}>
					<Form.Group controlId="details">
						<Form.Label>Write something about your work</Form.Label>
						<Form.Control as="textarea" rows={4} name="details" onChange={(e)=>{
							setDetails(e.target.value);}} />
					</Form.Group>
				</Col>
			</Row>
		</Form>
	);

	return (
		<>
			<Col xs={12} className="mt-3">
				<Card body className="bs-dim">
					<Card.Title className="row g-0 justify-content-between align-items-center">
						Employment History
						{publicView ? null : <BtnIcon iconType="add" onClick={addHandleShow} />}
					</Card.Title>
					<Row className="mt-3">
						{!employmentHistory.length ? (
							<Col>
								<EmptyAdd description="Add employment history to showcase your past work to clients" btnName="Add employment" onClick={addHandleShow} />
							</Col>
						) : (
							<>
								{employmentHistory.map((empHistory) => {
									return <Employment key={empHistory.id} empHistory={empHistory} />;
								})}
							</>
						)}
					</Row>
				</Card>
			</Col>
			{/* Modal */}
			<ModalForm show={modalProps.open} onHide={handleClose} action={modalProps.action} title="Employment History">
				{renderFormFields}
			</ModalForm>
		</>
	);
};

export default EmploymentHistory;
