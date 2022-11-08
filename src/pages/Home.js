import comment from '../assets/images/comment.png'
import React from 'react'
import authAxios from '../helper/axios'
import ClipLoader from "react-spinners/ClipLoader";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../assets/images/logo.png';
import exclusive from '../assets/images/exclusive.png';

const Home = (props) => {
    let history = useHistory();
    const [data, setData] = React.useState(null)
    const [bigNews, setBigNew] = React.useState(null)
    React.useEffect(() => {
        callApi()
    }, [])

    const callApi = async () => {
        try {
            const response = await authAxios.get('posts/home');
            setData(response.data.data)
            if (response.data.data.bottom.length > 1) {
                setBigNew([response.data.data.bottom[0], response.data.data.bottom[1]])
            }
            else if (response.data.data.bottom.length > 0) {
                setBigNew([response.data.data.bottom[0]])
            }
        }
        catch (error) {
            toast.error(error)
        }
    }

    const onClick = (item) => {
        if (item.type === 'editor') {
            history.push({
                pathname: '/blog',
                search: item._id,
            })
        }
        else {
            window.open(item.content, '_blank')
        }
    }

    return (
        <div>
            {data ?
                <div>
                    <div className='pageTitleWrapper' style={{ cursor: 'default' }} onClick={() => history.push("/")}>
                        <img src={logo} className='logo' />
                        <h1 className='homeTitle'>Conspiracy Coin</h1>
                    </div>

                    <div className='homeTopHeadingWrapper'>
                        {data ? data?.permanent?.map((item, index) =>
                            <h7 className='homeTopHeading' onClick={() => onClick(item)} key={Math.random()}>
                                {item.exclusive ? <img src={exclusive} className='exclusiveIcon' style={{ marginRight: '4px' }} /> : null} {item.title}
                            </h7>
                        ) : null}
                        {data ? data?.top?.map((item, index) =>
                            <h7 className='homeTopHeading' onClick={() => onClick(item)} key={Math.random()}>
                                {item.exclusive ? <img src={exclusive} className='exclusiveIcon' style={{ marginRight: '4px' }} /> : null} {item.title}
                            </h7>
                        ) : null}
                        <div className='homeButton' onClick={() => history.push('/headingNews')}>
                            View All
                        </div>
                    </div>

                    <div className='homeBannerWrapper'>
                        <div className='homeBannerTextWrapper'>
                            <h2 className='homeBannerTitle'>Get Vaccinated</h2>
                            <h3 className='homeBannerSubTitle'>even if you have COVID-19</h3>
                        </div>
                    </div>

                    <h2 className='homeSubTitle'>Trending Conspiracies</h2>

                    <div class="homeGridWrapper">
                        {data && data.bottom.map((item) =>
                            <div class="homeGridItem" onClick={() => onClick(item)} key={Math.random()}>
                                <img src={'https://admin.conspiracycoin.net' + item?.thumbnail[0].publicUrl} className='homeGridImage' />
                                <div className='homeGridTextWrapper'>
                                    <div className='homeGridDesc'>
                                        {item.title}
                                    </div>
                                    {item.exclusive ? <img src={exclusive} className='exclusiveIcon' style={{ marginTop: '4px' }} /> : null}
                                    {/* <div className='homeBottomRightCommentWrapper'>
                                        <img src={comment} className='homeBottomCommentIcon' />
                                        <div className='homeBottomCommentCount'>{'23'}</div>
                                    </div> */}
                                </div>
                            </div>
                        )}

                    </div>
                    <div className='homeBottomContainer'>
                        <div className='homeBigNewsWrapper'>
                            {bigNews && bigNews.map((item) =>
                                <div style={{ cursor: 'pointer' }} onClick={() => onClick(item)} key={Math.random()}>
                                    <img src={'https://admin.conspiracycoin.net' + item?.thumbnail[0].publicUrl} className='homeBigImage' />
                                    <div className='homeBottomTitle'>{item.title}</div>
                                    {/* <div className='homeBottomCommentWrapper'>
                                        <img src={comment} className='homeBottomCommentIcon' />
                                        <div className='homeBottomCommentCount'>{'23'}</div>
                                    </div> */}
                                    <div className='homeBottomReadMore'>{'READ MORE >'}</div>
                                    <div className='homeBottomdivider' />
                                </div>
                            )}
                        </div>
                        <div className='homeMostCommentedWrapper'>
                            <div className='homeBottomRightTitle'>{'MOST COMMENTED'}</div>
                            <div className='homeBottomRightdivider' />
                            {data && data?.mostcommented?.map((item) =>
                                <div key={Math.random()} onClick={() => onClick(item?.post)} className='homeMostCommentedPostWrapper'>
                                    <img src={'https://admin.conspiracycoin.net' + item?.post?.thumbnail[0].publicUrl} className='homeBottomRightImage' />
                                    <div className='homeBottomRightDesc'>
                                        {item?.post?.title}
                                    </div>
                                    {/* <div className='homeBottomRightCommentWrapper'>
                                        <img src={comment} className='homeBottomCommentIcon' />
                                        <div className='homeBottomCommentCount'>{'23'}</div>
                                    </div> */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                :
                <div className='loader'>
                    <ClipLoader color={"#000000"} loading={true} size={70} />
                </div>

            }
        </div>
    )
}
export default Home