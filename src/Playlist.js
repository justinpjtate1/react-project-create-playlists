import React from "react";
import Playlist_items from "./Playlist-items";
import Playlist_song_list from "./Playlist-Song-List";

const Playlist_container = (props) => {
    return(
        <div id="playlist-container">
            <Playlist_items addNewPlaylist={() => props.addNewPlaylist()}
                            playlists={props.playlists}
                            inputNewPlaylistName={(e) => props.inputNewPlaylistName(e)}
                            playlistToDisplay={(e) => props.playlistToDisplay(e)}
                            editPlaylistName={(index) => props.editPlaylistName(index)}
                            playlistDisplayed={props.playlistDisplayed}
                            />
            <Playlist_song_list playlistSongListToShow={props.playlistSongListToShow}
                                removeFromPlaylist={(num) => props.removeFromPlaylist(num)}
                                removeAllFromPlaylist={() => props.removeAllFromPlaylist()}
                                nameOfPlaylistToDisplay={props.nameOfPlaylistToDisplay}
                                />
        </div>
    )
}

export default Playlist_container