var  playlist = {
  'hey jude':
  'yesterday'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = 'Slowdive'
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete 'Phil Ochs'['Slowdive'];
  return playlist;
}
