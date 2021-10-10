import { createStore, Store, useStore as rootStore } from 'vuex';
import Login from './Login';
import { rooState, TotalState } from './type';
const store = createStore<rooState>({
  state: {
    name: 'wuwei',
    age: '2'
  },
  mutations: {},
  modules: {
    login:Login
  }
});
export function useStore(): Store<TotalState> {
  return rootStore();
}
export default store;
