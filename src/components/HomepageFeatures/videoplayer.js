import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
    return (
        <ReactPlayer
            url={url}
            controls={true}
            playing={false}
            width='100%'
            height='500px'  
        />
    );
}


export default VideoPlayer;
