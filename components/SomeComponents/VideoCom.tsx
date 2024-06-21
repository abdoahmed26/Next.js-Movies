"use client"

import YouTube, { YouTubeProps } from "react-youtube";

const VideoCom = ({ele}:{ele:any}) => {
    const onPlayerReady: YouTubeProps["onReady"] = (event: any) => {
        event.target.pauseVideo();
    };
    const opts = {
        height: "300px",
        width: "100%",
    };
    return (
        <div className="border border-gray-600 rounded">
            <h1 className="p-2 px-3 text-sm font-semibold">
                Type: {ele.type} - {ele.official ? "Offical" : "General"}
            </h1>
            <YouTube videoId={ele.key} onReady={onPlayerReady} opts={opts}/>
        </div>
    );
}

export default VideoCom;
