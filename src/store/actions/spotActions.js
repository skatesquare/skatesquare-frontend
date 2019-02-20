import axios from 'axios';
import { URL_SPOT_SERVICE } from './../../config/urls';
import { SpotActionTypes } from './actionTypes';

export const fetchSpots = () => dispatch => {
  axios.get(`${URL_SPOT_SERVICE}/spots`)
    .then(res => dispatch({
      type: SpotActionTypes.FETCH_ALL,
      payload: res.data.content
    }));
};

export const fetchSpot = id => dispatch => {
  axios.get(`${URL_SPOT_SERVICE}/spots/${id}`)
  .then(res => dispatch({
      type: SpotActionTypes.FETCH,
      payload: res.data
    }));
};

export const addSpot = spot => dispatch => {
  axios.post(`${URL_SPOT_SERVICE}/spots`, spot)
    .then(res => dispatch({
      type: SpotActionTypes.CREATE,
      payload: res.data
    }));
};

export const deleteTodo = id => dispatch => {
  axios.delete(`${URL_SPOT_SERVICE}/spots/${id}`)
    .then(() => dispatch({
      type: SpotActionTypes.DELETE,
      payload: id
    }));
};