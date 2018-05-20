import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// 액션 타입
const GET_PROJECTS = 'project/GET_PROJECTS';

// 액션 생성자
export const getProjects = createAction(GET_PROJECTS, api.getProjects);

// 초기 상태
const initialState = {
    data: [] // 초기 타입이 api 리턴 타입과 맞지 않으면 data 못집어넣음
};

export default handleActions({
    ...pender({
        type: GET_PROJECTS, 
        onSuccess: (state, action) => {
            return {
                data: action.payload.data
            }
        }
    })
}, initialState);