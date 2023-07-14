const { default: Axios } = require('axios');
const { API_HOST } = require('../../config');

export const getFoodData = () => (dispatch) => {
    Axios.get(`${API_HOST.url}/food`)
        .then((res) => {
            // console.log('res food: ', res.data.data.data);
            dispatch({ type: 'SET_FOOD', value: res.data.data.data });
        })
        .catch((err) => {
            console.log('err: ', err);
        });
};

export const getFoodDataByTypes = (types) => (dispatch) => {
    Axios.get(`${API_HOST.url}/food?types=${types}`)
        .then((res) => {
            if (types === 'buns') {
                dispatch({ type: 'SET_BUNS', value: res.data.data.data });
            }
            if (types === 'drinks') {
                dispatch({ type: 'SET_DRINKS', value: res.data.data.data });
            }
            if (types === 'popular') {
                dispatch({ type: 'SET_POPULAR', value: res.data.data.data });
            }
        })
        .catch((err) => {
            console.log('err: ', err);
        });
};