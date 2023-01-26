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
            // () => {
            //         if(this.state.check === true) {
            //             this.props.addToPlaylistQueue()
            //         } else if(this.state.check === false) {
            //             this.props.removeFromPlaylistQueue()
            //         }         
            // }
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

//     // useEffect(() => check ? props.addToPlaylistQueue() : props.removeFromPlaylistQueue())

//     const toggleCheck = () => {
//         setCheck(prevCheck => !prevCheck);
//     }

//     return(
//         <input type="checkbox"  className="song-checkbox" id="song-checkbox-search" onClick={() => {
//             toggleCheck()
//             check ? console.log('true') : console.log('false')
//         }}/>
//     )
// }

export default Add_To_Playlist;