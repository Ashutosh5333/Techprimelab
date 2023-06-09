import * as types from "./ActionTypes";
import axios from "axios";

// ---------------

const getLoginreq = () => {
  return {
    type: types.LOGINUSERREQ,
  };
};

const getLoginsuccess = (payload) => {
  return {
    type: types.LOGINUSERSUCESS,
    payload,
  };
};

const geLoginfailure = () => {
  return {
    type: types.LOGINUSERFAILURE,
  };
};

// -------------

const getLogindatareq = () => {
  return {
    type: types.LOGINUSERDATAREQ,
  };
};

const getLogindatasuccess = (payload) => {
  return {
    type: types.LOGINUSERDATASUCESS,
    payload,
  };
};

const geLogindatafailure = () => {
  return {
    type: types.LOGINUSERDATAFAILURE,
  };
};

export const GetLogin = (payload) => (dispatch) => {
  dispatch(getLoginreq());
  return axios
    .post(`https://techback.onrender.com/login`, payload)
    .then((r) => {
      return dispatch(getLoginsuccess(r.data));
    })
    .catch((err) => {
      dispatch(geLoginfailure());
    });
};

export const GetLogindata = (dispatch) => {
  dispatch(getLogindatareq());
  return axios
    .get(`https://techback.onrender.com/login/create`)
    .then((r) => {
      return dispatch(getLogindatasuccess(r.data));
    })
    .catch((err) => {
      dispatch(geLogindatafailure());
    });
};
