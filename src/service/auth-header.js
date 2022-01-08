export default function authHeader() {



    return {
        'Authorization': "Bearer ",
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        // if (user && user.accessToken) {

        //   return { 'Authorization':"Bearer "+ user.accessToken,
        //   'Access-Control-Allow-Origin': '*',
        //   'Content-Type': 'application/json',
        //   "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        //   "Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        // };
        // } else {
        //   return {};
    }
}