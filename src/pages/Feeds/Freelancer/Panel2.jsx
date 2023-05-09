import React, { useEffect, useState } from "react";
import { Card, Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { Button, Chip, Tab, Tabs } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import SearchIcon from "@material-ui/icons/Search";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import SettingsIcon from "@material-ui/icons/Settings";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Sticky from "react-stickynode";
import BtnIcon from "components/Buttons/BtnIcon";
import ChipGroup from "components/Chip/ChipGroup";
import postActions from "actions/postActions";
import moment from "moment";


const setCat=(category)=>{
	let arr=[]
	category.map(ele=>{
		arr.push(ele.Category);
	})
	return arr;
}
const FeedCard = (datas) => {




	// console.log(data.data,"here is feedcard")
	let data=datas.data;
	const tags = setCat(data.category);
	console.log(tags,"here is tags")
	let dataaa={
		"data": {
			"_id": "645938622d7df32ca6671aed",
			"clientId": {
				"_id": "6455e65bc297d9b486e17638",
				"lastName": "minaA"
			},
			"title": "ayushmina10@gmail.com",
			"description": "kjbkjsdcsdcsc",
			"category": [
				{
					"_id": "641d35b18ab4ad980914c953",
					"Category": "react js",
					"createdAt": "2023-03-24T05:31:29.301Z",
					"updatedAt": "2023-03-24T05:31:29.301Z",
					"__v": 0
				},
				{
					"_id": "641d35b18ab4ad980914c953",
					"Category": "react js",
					"createdAt": "2023-03-24T05:31:29.301Z",
					"updatedAt": "2023-03-24T05:31:29.301Z",
					"__v": 0
				}
			],
			"PaymentVerified": false,
			"location": "jbbjk",
			"amount": "44",
			"createdAt": "2023-05-08T17:58:58.927Z",
			"updatedAt": "2023-05-08T17:58:58.927Z",
			"__v": 0
		}
	}
	let lebel="Est. Budget: "+data.amount;


	return (
		<>
			<Row className="g-0 justify-content-between">
				<Col className="mb-2">
					{/* Title */}
					<h5 className="mb-1">{data.title}</h5>
					{/* Posted Time */}
					<small className="text-gray-light">
						<i className="fas fa-clock"></i>
						<time className="ms-1">{moment(data.createdAt).fromNow()
}</time>
					</small>
					<small className="text-gray-light ms-3">
						<i className="fas fa-map-marker-alt"></i>
						<span className="ms-1">({data.location})</span>
					</small>
				</Col>
				<Col xs="auto">
					<BtnIcon iconType="heart" />
					<BtnIcon iconType="unlike" className="ms-2" />
				</Col>
			</Row>
			{/* Offer details */}
			<Chip className="my-1 ms-0 me-2" icon={<LocalOfferIcon />} size="small" label="Fixed Price"></Chip>
			<Chip className="my-1 ms-0 me-2" icon={<SettingsIcon />} size="small" label="Intermediate"></Chip>
			<Chip className="my-1 ms-0 me-2" icon={<AttachMoneyIcon />} size="small" label={lebel}   ></Chip>
			{/* Description of the work */}
			<p className="my-3">{data.description}</p>
			{/* Tags */}
			<ChipGroup itemList={tags} color="primary" size="small" />
			{/* Proposals submitted */}
			{/* <div className="my-2">
				Proposals: <strong>Less than 5</strong>
			</div> */}
			<Row className="align-items-center">
				<Col xs="auto">
					<i className="fas fa-check-circle text-primary"></i>
					<span className="ms-1">Payment Verified</span>
				</Col>
				<Rating className="col-auto ps-0" name="payment-rating" size="small" defaultValue={5} precision={0.1} readOnly />
				{/* <Col as="span" xs="auto">
					<strong>$1k Spent</strong>
				</Col> */}
			</Row>
		</>
	);
};

const Panel2 = () => {
	// Tab control
	const [value, setValue] = useState(0);
	const [jobPost, setJobPost] = useState([]);
	const tabChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(()=>{
		postActions.getPost({},(err,res)=>{
			if(err){

			}else{
				console.log(res.data,"here is data");
				setJobPost(res.data);
			}
		})
	},[])

	return (
		<>
			{/* Search option */}
			<Card body className="mb-3">
				<Form>
					<InputGroup>
						<FormControl placeholder="Search for Jobs" aria-label="Search for Jobs" aria-describedby="Search for Jobs" />
						<Button variant="contained" color="secondary" disableElevation>
							<SearchIcon />
						</Button>
					</InputGroup>
				</Form>
			</Card>
			{/* Tab buttons */}
			<Sticky top="#topNav" innerActiveClass="sticky-active" enabled={true} innerZ={1200} bottomBoundary="#main-content">
				<Card>
					<Card.Body className="p-0">
						<Tabs value={value} onChange={tabChange} indicatorColor="primary" textColor="primary" aria-label="Feed Tabs">
							<Tab label="My Feed" />
							<Tab label="Best Matches" />
							<Tab label="Recommended" />
						</Tabs>
					</Card.Body>
				</Card>
			</Sticky>
			{/* Tab panels */}
			<Card className="mt-3">
				<Card.Body className="side-indicator-root">
					{jobPost.length>0?jobPost.map((ele)=>{
						return (
							<>
							<FeedCard data={ele}/>
							<hr />
							</>
							
						)
					})
					:"loading"    }
					<hr />
					{/* <FeedCard /> */}
				</Card.Body>
			</Card>
		</>
	);
};

export default Panel2;
