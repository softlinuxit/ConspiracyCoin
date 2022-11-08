import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { getCommentsCall } from "../../helper/apiCalls";
import { COMMENT_FETCH_ERROR, COMMENT_FETCH_START, COMMENT_FETCH_SUCCESS } from "../actionType";

export function* getComment(action) {
    yield put({ type: COMMENT_FETCH_START })
    try {
        const response = yield call(getCommentsCall, action.payload.id)
        yield put({ type: COMMENT_FETCH_SUCCESS, payload: response.data.data })
    }
    catch (error) {
        toast.error(error)
        yield put({ type: COMMENT_FETCH_ERROR })
    }
}