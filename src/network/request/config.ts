import axiosInstance from './index';

const axioss = new axiosInstance({
  // baseURL: '',
  timeout: 10000,
  baseURL:"http://httpbin.org"
});
axioss.request({
  method: 'GET',
  url: '/get',
  params: {
    name: 'wuwei',
    age: 25
  }
});
const axiosTwo = new axiosInstance({
  // baseURL: '',
  timeout: 10000
});
axiosTwo.request({
  method: 'GET',
  url: '/wuwei',
  params: {
    name: 'wuwei',
    age: 25
  }
});
