import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const videoMap = videos.map(video => {
        return <VideoItem key={video.id.videoId} video={video} />
    })
    return (
        <div className='ui relaxed divided list'>
            {videoMap}
        </div>
    )
}

export default VideoList
