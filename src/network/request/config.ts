import axiosInstance from './index';

const axioss = new axiosInstance({
  // baseURL: '',
  timeout: 10000,
  baseURL: 'http://httpbin.org',
  interceptors: {
    requsetInterceptor: (config) => {
      console.log('1111111111');
      return config;
    },
    requsetInterceptorCatch: (config) => {
      console.log('222222');
      return config;
    },
    responseInterceptor: (config) => {
      console.log('33333');
      return config;
    },

    responseInterceptorCatch: (config) => {
      console.log('44444');
      return config;
    }
  }
});
interface datatype {
  args?: any;
}
axioss
  .request<datatype>({
    method: 'GET',
    url: '/get',
    params: {
      name: 'wuwei',
      age: 25
    }
  })
  .then((da) => {
    console.log(da);
  });

axioss
  .get({
    url: '/get',
    data: {
      name: 'wuwei',
      age: 25
    },
    params: {
      sa: 'wuweiwu',
      age: 22
    }
  })
  .then((da) => {
    console.log(da);
  });
// const axiosTwo = new axiosInstance({
//   // baseURL: '',
//   timeout: 10000
// });
// axiosTwo.request({
//   method: 'GET',
//   url: '/wuwei',
//   params: {
//     name: 'wuwei',
//     age: 25
//   }
// });
