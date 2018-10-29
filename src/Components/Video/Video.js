import React from 'react';
import { string, number } from 'prop-types';
import './Video.css';

const Video = ({
    title,
    src,
    height,
    width
}) => (
    <div className="Video">
        <iframe title={title} height={height} width={width} src={src}></iframe>
    </div>
);

Video.propTypes = {
    title: string,
    src: string,
    height: number,
    width: number
};

export default Video;