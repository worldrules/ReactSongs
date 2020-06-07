import { combineReducers } from "redux";

const songsReducer = (song) => {
  return [
    { title: "No scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Stars", duration: "3:20" },
    { title: "Byob", duration: "1:55" },
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
});
