// import React from "react";
// import RenderRoutes from "./RenderRoutes";
import MultiStepForm from "pages/RegistrationPage/MultiStepForm";
import FreelancerProfile from "pages/ProfilePage/Freelancer/FreelancerProfile";
import FreelancerFeed from "pages/Feeds/Freelancer/FreelancerFeed";
import ProfileSettings from "pages/ProfilePage/Freelancer/Settings";
import MyProposal from "pages/ProfilePage/Freelancer/MyProposal";
import Notifications from "pages/Notification/Notifications";
import Messages from "pages/Message/Messages";
import Admin from "pages/Admin";
import UserLanding from "pages/UserLanding";
// import authSignup from "pages/Auth";
import BidPage from "../pages/BigPage/index";
import ListingOfBidsPage from "../pages/ListOfBid/Listpage";
import Login from "pages/Login";
import GetTransaction from "pages/transaction";

const ROUTES = [
	{ path: "/", exact: true, component: FreelancerFeed },
	{ path: "/admin", component: Admin },
	{ path: "/user", component: UserLanding },
	{ path: "/JobPost", exact: true, component: MultiStepForm },
	{ path: "/profile", exact: true, component: FreelancerProfile },
	{ path: "/profile/settings", component: ProfileSettings },
	{ path: "/profile/myProposal", component: MyProposal },
	{ path: "/notifications", component: Notifications },
	{ path: "/messages", exact: true, component: Messages },
	{ path: "/messages/:roomname/:username", component: Messages },
	// { path: "/create_account", component: authSignup },
	{ path: "/BidPage/:bidid",  component: BidPage },
	{ path: "/BidList",  component: ListingOfBidsPage },
	{ path: "/login",  component: Login },
	{ path: "/Transaction",  component: GetTransaction },





];

export default ROUTES;
