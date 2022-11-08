import { takeLatest } from 'redux-saga/effects'
import { getBlog } from './getBlog';
import { BLOG_FETCH_LOAD, COMMENT_FETCH_LOAD } from "../actionType";
import { getComment } from "./getComment";

export default function* mySaga() {
    yield takeLatest(BLOG_FETCH_LOAD, getBlog)
    yield takeLatest(COMMENT_FETCH_LOAD, getComment)
}