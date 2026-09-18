/* ============================================================
   YOUR SONG LIST
   ============================================================

   This is the only file you need to edit to add or remove songs.

   HOW TO ADD A SONG
   1. Put the audio file inside the /audio folder (e.g. audio/song.mp3)
   2. (Optional) put a square cover image inside /covers (e.g. covers/song.jpg)
   3. Copy one of the blocks below, paste it into the list, and edit the
      title, artist, src and cover.

   HOW TO REMOVE A SONG
   Just delete its block below (and the file from /audio if you want).

   Notes:
   - "src" and "cover" are file paths relative to this folder.
   - "cover" is optional — leave it as "" and a plain record will show.
   - The order here is the order songs play in.
   ============================================================ */

const SONGS = [
  {
    title: "Track One",
    artist: "Artist Name",
    src: "audio/track-one.mp3",
    cover: "covers/track-one.jpg"
  },
  {
    title: "Track Two",
    artist: "Artist Name",
    src: "audio/track-two.mp3",
    cover: ""
  }
];
