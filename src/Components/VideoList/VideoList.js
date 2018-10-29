import React from 'react';
import { array, func } from 'prop-types';
import VideoListItem from './VideoListItem';
import './VideoList.css';

const VideoList = ({
    videos,
    onVideoClick
}) =>(
    <div className="VideoList">
        {videos.map(video => <VideoListItem
            key={video.id}
            name={video.name}
            type={video.video_type}
            thumbnail={video.image.small_url}
            length={video.length_seconds}
            embed_player={video.embed_player}
            onVideoClick={embed_player => onVideoClick(embed_player)}
        />)}
    </div>
);

VideoList.propTypes = {
    videos: array,
    onVideoClick: func
};

export default VideoList;