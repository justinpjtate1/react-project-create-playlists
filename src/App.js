import './App.css';
import React, { useState } from 'react'
import axios from 'axios'
import Search from './Search';
import Playlist_container from './Playlist';
import Playlist_dropdown_options from './Playlist-dropdown-options';

const App = (props) => {

    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [playlistQueue, setPlaylistQueue] = useState([]);
    const [playlists, setPlaylists] = useState([{
        name: "Default Playlist",
        songs: []
      }]);
    const [newplaylistName, setNewPlaylistName] = useState("");
    const [playlistSelectedInDropdown, setPlaylistSelectedInDropdown] = useState(0);
    const [playlistDisplayed, setPlaylistDisplayed] = useState(0);

    const handleSearchInput = (e) => {
            setSearchInput(e.target.value)
          }

    const handleSearchClick = () => {
      setPlaylistQueue([])
      const endpointUrl = `https://itunes.apple.com/search?term=${searchInput}&media=music&limit=5`;
      axios.get(endpointUrl)
        .then(response => {
          let resultsArr = response.data.results.map(value => {
            return({
                    trackName: value.trackName,
                    artistName: value.artistName,
                    artwork: value.artworkUrl60,
                    album: value.collectionName,
                    minutes: Math.floor(value.trackTimeMillis/60000),
                    seconds: Math.floor((value.trackTimeMillis/1000) % 60)
            })
          });
          setSearchResults(resultsArr)
        })
    }

    const returnSearchResultChecked = (indexOfResult) => {
      const newSong = searchResults.filter((song, index) => index === indexOfResult);
      return newSong[0]
    }

    const addToPlaylistQueue = (indexOfResult) => {
      setPlaylistQueue(prevPlaylistQueue => {
        return [...prevPlaylistQueue, returnSearchResultChecked(indexOfResult)]
      })
    }

    const removeFromPlaylistQueue = (indexOfResult) => {
      setPlaylistQueue(prevPlaylistQueue => {
        return prevPlaylistQueue.filter(song => song !== returnSearchResultChecked(indexOfResult))
      })
    }

    const modifyPlaylistHelper = (edit, playlistWithNewInfo) => {
      const determinePlaylistToEdit = (edit) => {
        if(edit === 'Add') {
          return playlistSelectedInDropdown
        } else {
          return playlistDisplayed
        }
      }

      const modifiedPlaylistsObject = playlists.filter((value, index) => index !== determinePlaylistToEdit(edit))
      modifiedPlaylistsObject.splice(determinePlaylistToEdit(edit), 0, playlistWithNewInfo)

      setPlaylists(modifiedPlaylistsObject)
    }

    const addToSelectedPlaylist = () => {
      const modifiedPlaylist = playlists[playlistSelectedInDropdown].songs.concat(playlistQueue)
      const playlistWithNewInfo = {name: playlists[playlistSelectedInDropdown].name, songs: [...modifiedPlaylist]}
      modifyPlaylistHelper('Add', playlistWithNewInfo)
    }
  
    const removeFromPlaylist = (num) => {
      const modifiedPlaylist = playlists[playlistDisplayed].songs.filter((value, index) => index !== num)
      const playlistWithNewInfo = {name: playlists[playlistDisplayed].name, songs: modifiedPlaylist}
      modifyPlaylistHelper('Remove', playlistWithNewInfo)
    }
  
    const removeAllFromPlaylist = () => {
      const modifiedPlaylist = []
      const playlistWithNewInfo = {name: playlists[playlistDisplayed].name, songs: modifiedPlaylist}
      modifyPlaylistHelper('Remove', playlistWithNewInfo)
    }

    const updatePlaylistSelectedInDropdown = (e) => {
      setPlaylistSelectedInDropdown(+(e.target.value))
    }

    const inputNewPlaylistName = (e) => {
      setNewPlaylistName(e.target.value)
    }
  
    const addNewPlaylist = () => {
      setPlaylists(prevPlaylists => [...prevPlaylists, {name: newplaylistName, songs: []}])
    }
  
    const playlistToDisplay = (e) => {
      setPlaylistDisplayed(+(e.target.id))
    }
  
    const editPlaylistName = (playlistNumber) => {
      const newName = prompt('Change Playlist Name')
      const modifiedPlaylists = playlists.filter((value, index) => index !== playlistNumber)
      const playlistWithNewInfo = {name: newName, songs: playlists[playlistNumber].songs}
      modifiedPlaylists.splice(playlistNumber, 0, playlistWithNewInfo)
      setPlaylists(modifiedPlaylists)
    }

    const allPlaylistDropdowns = playlists.map((playlist, index) => {
      return <Playlist_dropdown_options playlistName={playlist.name} 
                                        key={index} 
                                        playlistNumber={index} 
              />
      }
    )

    return(
      <>
      <h1>Create your best playlists</h1>
      <input type="text" placeholder='Search song or artist...' onChange={handleSearchInput}/>
      <button onClick={handleSearchClick}>Search!</button>
      
      <main>
        <div id="main-container">
        <Search searchResults={searchResults} 
                addToPlaylistQueue={addToPlaylistQueue}
                removeFromPlaylistQueue={removeFromPlaylistQueue} 
        />
        <Playlist_container playlistSongListToShow={playlists[playlistDisplayed].songs}
                            removeFromPlaylist={removeFromPlaylist}
                            removeAllFromPlaylist={removeAllFromPlaylist}
                            addNewPlaylist={addNewPlaylist}
                            playlists={playlists}
                            inputNewPlaylistName={inputNewPlaylistName}
                            playlistToDisplay={playlistToDisplay}
                            editPlaylistName={editPlaylistName}
                            nameOfPlaylistToDisplay={playlists[playlistDisplayed].name}
                            playlistDisplayed={playlistDisplayed}
        />
        </div>
        
      
        <select id="dropdown" onChange={updatePlaylistSelectedInDropdown}>
          {allPlaylistDropdowns}
        </select>
        <button id="add-to-playlist" onClick={addToSelectedPlaylist} >Add To Playlist</button>
      </main>
      </>
    )
}

export default App