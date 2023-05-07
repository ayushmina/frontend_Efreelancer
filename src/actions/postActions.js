import Agent from "./superAgent";
import {ServerError} from '../utils/helpers';
const BACKEND_URL = "http://localhost:4044";

function getPost(payload, cb) {
  Agent
    .fire('get', `${BACKEND_URL}/users/getPost`)
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
  getCategory,
  addposts
}