import Axios from 'axios';

const authAxios = Axios.create({
    // baseURL: 'http://147.182.195.80:8080/api/'
    baseURL: 'https://admin.conspiracycoin.net/api/'
});
// posts/home
// authAxios.interceptors.request.use(
//   async function (options) {
//     const token = await AuthToken.get();

//     if (token) {
//       options.headers['Authorization'] = `Bearer ${token}`;
//     }


//     return options;
//   },
//   function (error) {
//     console.log('Request error: ', error);
//     return Promise.reject(error);
//   },
// );

export default authAxios;