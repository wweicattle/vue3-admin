export interface rooState {
  name: string;
  age: string;
}
export interface LoginState {
  token: string;
  userInfo: string;
  // s:string
}

export interface changeLogin {
  login: LoginState;
}

export type TotalState = rooState & changeLogin;
