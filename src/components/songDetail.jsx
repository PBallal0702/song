import React from 'react';
import {connect} from 'react-redux';

const SongDetail =(props)=>{
    if(props.song == null){
        return <div><h1>Select a song </h1></div>
    }
    return (
        <div>
            <h1>{props.song.title}</h1>
            <h1>{props.song.duration}</h1>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return{song:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);