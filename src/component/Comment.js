import React from 'react'
import Reply from './Reply'
import ReplyBox from './ReplyBox'

const Comment = ({ data, index }) => {
    const [isVisible, setVisible] = React.useState(false)
    return (
        <div className='commentWrapper' id={`comment_${data?._id}`}>
            <img src={data?.userId?.image[0]?.publicUrl} className='profileImage' />
            <div className='profileWrapper'>
                <span className='profileName'>{data?.userId?.name}</span>
                <span className='comment'>{data?.comment}</span>
                <div className='replyButton' onClick={() => setVisible(!isVisible)}>
                    Reply
                </div>
                {isVisible ? <ReplyBox id={data?._id} index={index}
                    scrollId={data?.replies[data?.replies.length - 1]?._id} />
                    : <div style={{ marginBottom: '4vw' }} />}
                {data?.replies.length > 0 ?
                    data?.replies.map((item) =>
                        item.userId ?
                            <Reply key={Math.random()} data={item} id={data?._id} index={index} />
                            : null
                    )
                    : null}
            </div>
        </div>
    )
}
export default Comment