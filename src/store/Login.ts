// import request from '../network/config';
import { Module } from 'vuex';

import { rooState, LoginState } from './type';
import { requestLogin } from '@/network/request/request';

const login: Module<LoginState, rooState> = {
  namespaced: true,
  state: {
    token: '323',
    userInfo: '32333'
    // s: "dsd"
  },
  mutations: {},
  actions: {
    async loginBtn({ commit }, payload: any) {
      const a = await requestLogin({ name: 324, password: 43434 });
      return a;
    }
    //begin request login token and login
  }
};
export default login;
