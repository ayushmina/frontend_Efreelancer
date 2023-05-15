import Agent from "./superAgent";
import {ServerError} from '../utils/helpers';
const BACKEND_URL = "http://localhost:4044";

function getPost(payload, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/websites/getJobPost`)
    .query(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}
function getTransaction1(payload, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/websites/getTransaction1`)
    .query(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}
function getCategory(payload, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/websites/getCategory`)
    .query(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}

function addposts(payload, cb) {
  Agent
    .fire('post', `${BACKEND_URL}/websites/postjob`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}
function postProposal(payload, cb) {
  Agent
    .fire('post', `${BACKEND_URL}/websites/postProposals`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}
function getTransaction(payload, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/websites/getTransaction`)
    .query(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}
function acceptJobpostAndCreateTransaction(payload, cb) {
  Agent
    .fire('post', `${BACKEND_URL}/websites/acceptJobpostAndCreateTransaction`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}
function updateTransaction(payload, cb) {
  Agent
    .fire('post', `${BACKEND_URL}/websites/updateTransaction`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}

function updateTransactionByfreelancer(payload, cb) {
  Agent
    .fire('post', `${BACKEND_URL}/websites/updateTransactionByfreelancer`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}
function getProposals(payload, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/websites/getProposals`)
    .query(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}
function addPost(payload, cb) {
  Agent
    .fire('post', `${BACKEND_URL}/websites/postjob`)
    .send(payload)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}


function deletePost(id, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/users/deletePost/${id}`)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}

function myPost(text, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/users/ownJob?text=${text}`)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}

function Search(payload, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/users/searchJobs?text=${payload}`)
    .end((err, res) => {
      var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
      if (typeof cb === 'function') return cb(error, res && res.body);
    });
}


export default {
  getPost,
  addPost,
  deletePost,
  myPost,
  Search,
  getTransaction,
  getTransaction1,
  getCategory,
  addposts,
  postProposal,
  getProposals,
  updateTransaction,
  acceptJobpostAndCreateTransaction,
  updateTransactionByfreelancer
}