import React from 'react'
import { useDispatch } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify';
import authAxios from '../helper/axios'
import { ADD_REPLY } from '../redux/actionType';

const reg = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const ReplyBox = ({ id, index, scrollId }) => {
    const dispatch = useDispatch()
    const [comment, setComment] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [isUploading, setUploading] = React.useState(false)
    const onClick = async () => {

        if (!name.trim()) {
            toast.error("Name is required.")
            return
        }
        if (!email.trim()) {
            toast.error("Email is required.")
            return
        }
        if (!reg.test(email.trim())) {
            toast.error("Enter a valid email address.")
            return
        }
        if (!comment.trim()) {
            toast.error("Reply is required.")
            return
        }
        setUploading(true)
        const commentsResponse = await authAxios.post('comments/reply',
            {
                email: email.trim(),
                name: name.trim(),
                id: id,
                comment: comment.trim()
            });
        dispatch({ type: ADD_REPLY, payload: { index: index, comment: commentsResponse?.data?.data, scrollId: scrollId } })
        toast.success("Reply Added Successfully.")
        setComment('')
        setName('')
        setEmail('')
        setUploading(false)
    }
    return (
        <div>
            <textarea
                className='replyTextArea'
                placeholder='Reply'
                value={comment}
                onChange={(e) => setComment(e.target.value)} />
            <div className='replyUserDetailWrapper'>
                <input className='replyInput' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input className='replyInput' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className='replyAddButton' onClick={onClick}>
                    {isUploading ?
                        <ClipLoader color={"#ffffff"} loading={true} size={10} />
                        : ('ADD')}
                </div>
            </div>
            <div className='blogBottomdivider' />
        </div>
    )
}
export default ReplyBox