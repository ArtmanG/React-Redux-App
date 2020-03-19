import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS';
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get('https://the-one-api.herokuapp.com/v1/book')
        .then(res => {
            console.log(res);
            dispatch({ type: UPDATE_CHARACTERS, payload: res.data.docs});
        })
        .catch(err => {
            console.log('error fetching data from api, err: ', err);
            dispatch({ type: SET_ERROR, payload: 'error fetching data from api, err: ' })
        });
};


