var playlist = { artistName: "songTitles" } ; 

function updatePlaylist(playlist, artistName, songTitle) {playlist[artistName] = songTitle

  return playlist
  }
  
function removeFromPlaylist(playlist, artistName) {
  // console.log(playlist.keys)

<<<<<<< HEAD
  delete playlist[artistName];
  
  return playlist
=======
  delete playlist.artistName;
  
  // return playlist
>>>>>>> 9416ab5203d17b43e4eb8f8d3a95a95b0c3b1443
}