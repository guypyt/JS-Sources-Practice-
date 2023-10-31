var artistName = "John Doe";
var albumName = "My Album";

var areNamesEqual = artistName === albumName;

console.log(areNamesEqual);

var artist = {
  name: "John Doe",
  age: 30,
  details: "Singer-songwriter from New York.",
  songs: ["Song 1", "Song 2"],
};

function addSong(artist, songName) {
  artist.songs.push(songName);
}
// const addSong = (artist, songName) => {
//     artist.songs.push(songName);
// }

// addSong(artist, "Song 1");
// addSong(artist, "song 2");

console.log(artist.songs);

// Create a function to delete song names
function removeSong(artist, songName) {
  var index = artist.songs.indexOf(songName);
  if (index != -1) {
    artist.songs.splice(index, 1);
  }
}
removeSong(artist, "Song 1"); // Activate the function to delete song names.

console.log(artist.songs);
