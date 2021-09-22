import axios from 'axios';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
class WWAxios {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((da: any) => {
      console.log(da);
    });
  }
}

export default WWAxios;
