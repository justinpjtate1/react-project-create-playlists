import React, { Component } from "react";

class Add_To_Playlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            check: false
        }
    }

    check = () => {
        this.setState({
                check: !this.state.check
            },
            () => this.state.check ? this.props.addToPlaylistQueue() : this.props.removeFromPlaylistQueue()
        )
    
    }

    render() {
        return(
            <>
                <input type="checkbox"  className="song-checkbox" id="song-checkbox-search" onClick={this.check}/>
            </>
        )
    }
}

// const Add_To_Playlist = (props) => {
//     const [check, setCheck] = useState(false)

//     const toggleCheck = () => {
//         setCheck(prevCheck => !prevCheck);
//     }
//     // useEffect(() => check ? props.addToPlaylistQueue() : props.removeFromPlaylistQueue())
//     useEffect(() => toggleCheck(), check ? props.addToPlaylistQueue() : props.removeFromPlaylistQueue())

    

//     return(
//         <input type="checkbox"  className="song-checkbox" id="song-checkbox-search" onClick={() => toggleCheck()}/>
//     )
// }

export default Add_To_Playlist;