var playlist = {Radiohead: "Paranoid Android"}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songtitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}
