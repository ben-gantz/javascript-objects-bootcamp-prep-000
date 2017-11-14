var playlist = {Radiohead: "Paranoid Android"}

function updatePlaylist({}, artistName, songTitle) {
  playlist.artistName = `${songTitle}`
  return playlist
}

function removeFromPlaylist({}, artistName) {
  delete playlist.artistName
  return playlist
}
