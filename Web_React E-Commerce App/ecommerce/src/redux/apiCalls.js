import {
  loginFailure,
  loginStart,
  loginSuccess,
  signupStart,
  signupSuccess,
  signupFailure,
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(
      "http://localhost:8800/api/auth/login",
      user
    );
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const signup = async (dispatch, user) => {
  dispatch(signupStart());
  try {
    const res = await publicRequest.post(
      "http://localhost:8800/api/auth/register",
      user
    );
    dispatch(signupSuccess(res.data));
  } catch (err) {
    dispatch(signupFailure());
  }
};
