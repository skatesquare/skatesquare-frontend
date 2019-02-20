import spots from '../../assets/spots'
import { SpotActionTypes } from '../actions/actionTypes';

const initialState = {
  list: spots
}

const spotsReducer = (state = initialState, action) => {

  switch (action.type) {

    case SpotActionTypes.FETCH_ALL:
      return {
        ...state,
        list: action.payload
      }

    case SpotActionTypes.FETCH:
      return {
        ...state,
        list: [...state.list, action.payload]
      }

    case SpotActionTypes.CREATE:
      state.list.unshift(action.payload)
      return {
        ...state,
        list: [...state.list]
      }

    case SpotActionTypes.DELETE:
      return {
        ...state,
        list: [...state.list.filter(spot => spot.id !== action.payload)]
      }

    default:
      return state;
  }

}

export default spotsReducer;