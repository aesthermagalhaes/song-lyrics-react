import "./video.css";

function YoutubeVideo({ title, url }) {
    return (
        <div id="video-wrapper">
            <iframe title={title} width="560" height="349" src={url.replace("watch?v=","embed/")} frameBorder="0" allowFullScreen></iframe>      
        </div>
    );
}

export default YoutubeVideo;