import React from 'react'
// import ReplyBox from './ReplyBox'

const Reply = ({ data, id, index }) => {
    // const [isVisible, setVisible] = React.useState(false)
    return (
        <div className='replyMainWrapper' id={`reply_${data?._id}`}>
            <div className='replyWrapper'>
                <img src={data?.userId?.image[0]?.publicUrl} className='profileImage' />
                <div className='profileWrapper'>
                    <span className='profileName'>{data?.userId?.name}</span>
                    <span className='comment'>{data?.comment}</span>
                    {/* <div className='replyButton' onClick={() => setVisible(!isVisible)}>
                        Reply
                    </div> */}
                </div>
            </div>
            {/* {isVisible ? <ReplyBox id={id} index={index} /> : <div style={{ marginBottom: '4vw' }} />} */}
        </div>
    )
}
export default Reply