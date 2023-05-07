import http from 'superagent';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
// cookie.set("x-access-token-ns","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDU1ZTY1YmMyOTdkOWI0ODZlMTc2MzgiLCJpYXQiOjE2ODMzNTExMzF9.TRIvPbcYxkVnefh1PIlI1Bo-aGuwhDmmYaNjFOPC7YM")

let AuthIntercept = require('superagent-intercept')((err, res) => {
    if (res && res.body && (res.body.statusCode === 401 || res.body.statusCode === 403)) {
         removeSession();
         window.location = '/';
         return
    }
});

let removeSession = () => {
    cookie.remove('x-access-token-ns', { path: '/' });
    cookie.remove('token', { path: '/' });
}

const getToken = () => {
    let token = cookie.get('x-access-token-ns', { path: '/' });
    console.log(token,"HERE IS TOKEN");
    return token
}
const getTokenGuest = () => {
    let token = cookie.get('x-access-token-gt', { path: '/' });
    // console.log(token);
    return token
}

const getLoginType = () => {
    let loginType = cookie.get('loginType', { path: '/' });
    return loginType
}

const fire = (method, url, shouldSendHeader=false) => {
    let token = getToken();
    let loginType = getLoginType();
    console.log()
    let defaultHeaders = {}
    if (token) {
        defaultHeaders['authorization'] = token;
    }
    if (loginType) {
        defaultHeaders['loginType'] = loginType;
    }
    if(shouldSendHeader) {
        defaultHeaders['Authorization'] = `Basic bG1zOmxtcw==`;
    }

    return http[method](url).set(defaultHeaders).use(AuthIntercept);
}




let Agent = {
    fire,
    getToken,
    removeSession,
    getTokenGuest,
}
export default Agent;
