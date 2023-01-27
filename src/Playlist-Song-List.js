import Playlist_song from "./Playlist-song"

function Playlist_song_list(props) {
    const allSongs = props.playlistSongListToShow.map((song, index) => {
        return <Playlist_song item={song}
                              key={index} 
                              songNumber={index} 
                              removeFromPlaylist={(num) => props.removeFromPlaylist(num)}
                              />
        })

    return(
        <div className="playlist-song-list" id="playlist-song-list">
            <h3 id="playlist-heading">Selected Playlist: {props.nameOfPlaylistToDisplay}</h3>
            <div className="playlist-titles" id="playlist-titles">
                <div className="column-1">Title</div>
                <div className="column-2">Artist</div>
                <div className="column-3">length</div>
                <button className="column-4" onClick={() => props.removeAllFromPlaylist()}>Clear All</button>
            </div>
            {allSongs}
        </div>
    )
}

export default Playlist_song_list