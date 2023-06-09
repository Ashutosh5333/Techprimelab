import * as types from "./ActionTypes";
import axios from "axios";

//  ----------  Peoject  Data -------------   //

const getdatareq = () => {
  return {
    type: types.GETPROJECTREQ,
  };
};

const getdatasuccess = (payload) => {
  return {
    type: types.GETPROJECTSUCESS,
    payload,
  };
};

const getdatafailure = () => {
  return {
    type: types.GETPROJECTFAILURE,
  };
};

//    ---------------------------    //

const ProjectCreatereq = () => {
  return {
    type: types.GETPROJECTCREATEREQ,
  };
};

const ProjectCreatesuccess = (payload) => {
  return {
    type: types.GETPROJECTCREATESUCESS,
    payload,
  };
};

const ProjectCreatefailure = () => {
  return {
    type: types.GETPROJECTCREATEFAILURE,
  };
};

// ------------- All Crud Request -----------  //

export const GetProjectData = (dispatch) => {
  dispatch(getdatareq());
  return axios
    .get(`https://techback.onrender.com/project`)
    .then((r) => {
      return dispatch(getdatasuccess(r.data));
    })
    .catch((err) => {
      dispatch(getdatafailure());
    });
};

export const ProjectCreateData = (payload) => (dispatch) => {
  dispatch(ProjectCreatereq());
  return axios
    .post(`https://techback.onrender.com/project/create`, payload)
    .then((r) => {
      return dispatch(ProjectCreatesuccess(r.data));
    })
    .catch((err) => {
      return dispatch(ProjectCreatefailure());
    });
};
