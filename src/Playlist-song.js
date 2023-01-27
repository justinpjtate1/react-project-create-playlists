import trash from './bin-icon-2.png';

function Playlist_song(props) {
    return(
        <div className="playlist-song" id="playlist-song">
            <div className="column-1" id="song-title-playlist">{props.item.trackName}</div>
            <div className="column-2" id="song-artist-playlist">{props.item.artistName}</div>
            <div className="column-3" id="song-length-playlist">{props.item.minutes}m {props.item.seconds}s</div>
            <div className="column-4">
                <img className="column-4" id="remove-song-playlist" src={trash} onClick={() => props.removeFromPlaylist(props.songNumber)}/>
            </div>
            
        </div>
    )
}

export default Playlist_song

// onClick={props.removeFromPlaylist(props.indexx)}