import axioss from './config';

export function requestLogin(obj: any) {
  return axioss.request({
    method: 'post',
    url: '/api/post',
    data: obj
  });
}
