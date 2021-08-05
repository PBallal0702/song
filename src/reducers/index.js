import {combineReducers} from 'redux';

const songReducer=()=>{
    return [
        {title:'no Scrubs' , duration:'4:05'},
        {title:'Mancarena' , duration:'2:30'},
        {title:'All Star' , duration:'3:15'},
        {title:'I want it That Way' , duration:'1:45'}
    ];
};

const selecctedsongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong; 
}

export default combineReducers({
    songs:songReducer,
    selectedSong:selecctedsongReducer
});