import axiosInstance from './index';

const axioss = new axiosInstance({
  // baseURL: '',
  timeout: 10000,
  // baseURL: 'http://httpbin.org',
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

export default axioss;
