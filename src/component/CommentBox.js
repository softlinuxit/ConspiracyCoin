import React from 'react'
import { useDispatch } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify';
import authAxios from '../helper/axios'
import { ADD_COMMENT } from '../redux/actionType';

const reg = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const CommentBox = (props) => {
    const dispatch = useDispatch()
    const { blogId } = props
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
            toast.error("Comment is required.")
            return
        }
        setUploading(true)
        const commentsResponse = await authAxios.post('comments/add',
            {
                email: email.trim(),
                name: name.trim(),
                postId: blogId,
                comment: comment.trim()
            });
        console.log(commentsResponse?.data?.data);
        dispatch({ type: ADD_COMMENT, payload: { comment: commentsResponse?.data?.data } })
        toast.success("Comment Added Successfully.")
        setComment('')
        setName('')
        setEmail('')
        setUploading(false)
    }

    return (
        <div>
            <textarea
                className='commentBox'
                placeholder='Add a comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)} />
            <div className='userDetailWrapper'>
                <input className='commentInput' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input className='commentInput' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className='blogButton' onClick={onClick}>
                    {isUploading ?
                        <ClipLoader color={"#ffffff"} loading={true} size={10} />
                        : ('ADD')}
                </div>
            </div>
            <div className='blogBottomdivider' />
        </div>
    )
}
export default CommentBox