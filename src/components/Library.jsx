import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({
   songs,
   setCurrentSong,
   audioRef,
   isPlaying,
   setIsPlaying,
   setSongs,
   libraryStatus,
}) => {
   return (
      <div className={`library ${libraryStatus? 'active-library' : ''}`}>
         <h2>Library</h2>
         <div className='library-songs'>
            {songs.map((song) => {
               return (
                  <LibrarySong
                     songs={songs}
                     setCurrentSong={setCurrentSong}
                     song={song}
                     key={song.id}
                     id={song.id}
                     audioRef={audioRef}
                     isPlaying={isPlaying}
                     setIsPlaying={setIsPlaying}
                     setSongs={setSongs}
                  />
               )
            })}
         </div>
      </div>
   )
}

export default Library
