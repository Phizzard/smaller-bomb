import React from 'react';
import { string, number, func } from 'prop-types';

const VideoListItem = ({
    name,
    type,
    thumbnail,
    length,
    embed_player,
    onVideoClick
}) => {
    let date = new Date(null);
    date.setSeconds(length);
    length = date.toISOString().substring(11,19);

    const handleOnVideoClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        onVideoClick(embed_player);
    };

    return(
        <div className="VideoListItem" onClick={handleOnVideoClick}>
            <div className="VideoListItemImage">
                <img src={thumbnail} alt={name} />
                <span className="VideoListItemLength">{length}</span>
            </div>
            <div className="VideoListItemBody">
                <p className="VideoListItemBodyName">{name}</p>
                <p className="VideoListItemBodyType">{type}</p>
            </div>
        </div>
    );
}

VideoListItem.propTypes = {
    name: string,
    type: string,
    thumbnail: string,
    lengh: number,
    onVideoClick: func
};

export default VideoListItem;