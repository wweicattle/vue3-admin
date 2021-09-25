import axios from 'axios';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface WWRequestIndterceptors {
  requsetInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requsetInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}

interface WWrequestConfig extends AxiosRequestConfig {
  interceptors?: WWRequestIndterceptors;
}
class WWAxios {
  instance: AxiosInstance;
  interceptorss?: WWRequestIndterceptors;
  constructor(config: WWrequestConfig) {
    this.instance = axios.create(config);
    console.log(config);
    this.interceptorss = config.interceptors;
    this.instance.interceptors.request.use(
      (res) => {
        console.log(323);
        return res;
      },
      (res) => {
        console.log(323);
        return res;
      }
    );
    this.instance.interceptors.request.use(
      this.interceptorss?.requsetInterceptor,
      this.interceptorss?.requsetInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptorss?.responseInterceptor,
      this.interceptorss?.responseInterceptorCatch
    );
    // 后面还可以根据不同的请求进行拦截
  }

  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((val) => {
      this.instance.request(config).then((da: any) => {
        val(da);
      });
    });
  }

  get<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((val) => {
      this.instance.request({ ...config, method: 'GET' }).then((da: any) => {
        console.log(da);
        val(da);
      });
    });
  }
}

export default WWAxios;
