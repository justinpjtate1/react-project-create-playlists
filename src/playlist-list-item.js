import pencil from './edit-pencil.png'

function Playlist_list_items(props) {
        return(
            <div>
            <li className="playlist-item" id={props.playlistNumber} onClick={(e) => props.playlistToDisplay(e)} >
                {props.name}
            </li>
            <img className="edit-pencil" id={props.playlistNumber} src={pencil} onClick={() => props.editPlaylistName(props.playlistNumber)}/>
            </div>
        )
    }

export default Playlist_list_items