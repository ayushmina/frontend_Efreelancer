import Agent from "./superAgent";
import { ServerError } from '../utils/helpers';
const BACKEND_URL = "http://localhost:4044";

function signUp(payload, cb) {
    Agent
      .fire('post', `${BACKEND_URL}/websites/adduser`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
  function getUserInfo(payload, cb) {
    Agent
      .fire('get', `${BACKEND_URL}/websites/getUserInfo`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }
  function updateuserInfo(payload, cb) {
    Agent
      .fire('post', `${BACKEND_URL}/websites/updateProfile`)
      .send(payload)
      .end((err, res) => {
        var error = err || res.error ? ServerError(res) : (res.body && res.body.error) ? ServerError(res) : null;
        if (typeof cb === 'function') return cb(error, res && res.body);
      });
  }





  
export default {
  signUp,
    getUserInfo,
    updateuserInfo
  }