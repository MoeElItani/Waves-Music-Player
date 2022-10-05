import React from 'react'

const LibrarySong = ({
   song,
   songs,
   setCurrentSong,
   audioRef,
   isPlaying,
   setIsPlaying,
   id,
   setSongs,
}) => {
   const songSelectHandler = async () => {
      await setCurrentSong(song)
      // add active state
      const newSongs = songs.map((song) => {
         if (song.id === id) {
            return { ...song, active: true }
         } else {
            return { ...song, active: false }
         }
      })
      setSongs(newSongs)
      isPlaying
         ? audioRef.current.play()
         : audioRef.current.pause()
   }
   return (
      <div
         onClick={songSelectHandler}
         className={`library-song ${
            song.active ? 'selected' : ''
         }`}
      >
         <img src={song.cover} alt={song.name} />
         <div className='song-description'>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
         </div>
      </div>
   )
}

export default LibrarySong