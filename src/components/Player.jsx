import React from 'react'

const Player = ({
   currentSong,
   isPlaying,
   setIsPlaying,
   audioRef,
   songInfo,
   setSongInfo,
   songs,
   setSongs,
   setCurrentSong,
}) => {
   const activeLibraryHandler = (nextPrev) => {
      const newSongs = songs.map((song) => {
         if (song.id === nextPrev.id) {
            return { ...song, active: true }
         } else {
            return { ...song, active: false }
         }
      })
      setSongs(newSongs)
   }
   // Event Handlers
   const playSongHandler = () => {
      setIsPlaying(!isPlaying)
      isPlaying
         ? audioRef.current.pause()
         : audioRef.current.play()
   }

   const getTime = (time) => {
      return (
         Math.floor(time / 60) +
         ':' +
         ('0' + Math.floor(time % 60)).slice(-2)
      )
   }

   const dragHandler = (e) => {
      audioRef.current.currentTime = e.target.value
      setSongInfo({ ...songInfo, currentTime: e.target.value })
   }

   const skipTrackHandler = async (direction) => {
      let currentIndex = songs.findIndex(
         (song) => song.id === currentSong.id
      )
      if (direction === 'skip-back') {
         if (currentIndex === 0) {
            await setCurrentSong(songs[songs.length - 1])
            activeLibraryHandler(songs[songs.length - 1])
         } else {
            await setCurrentSong(
               songs[(currentIndex - 1) % songs.length]
            )
            activeLibraryHandler(
               (currentIndex - 1) % songs.length
            )
         }
      } else {
         await setCurrentSong(
            songs[(currentIndex + 1) % songs.length]
         )
         activeLibraryHandler((currentIndex + 1) % songs.length)
      }
      isPlaying
         ? audioRef.current.play()
         : audioRef.current.pause()
   }
   // Add the styles
   const trackAnim = {
      transform: `translateX(${songInfo.animationPercentage}%)`,
   }
   return (
      <div className='player'>
         <div className='time-control'>
            <p>{getTime(songInfo.currentTime)}</p>
            <div
               style={{
                  background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
               }}
               className='track'
            >
               <input
                  min={0}
                  max={songInfo.duration || 0}
                  value={songInfo.currentTime}
                  onChange={dragHandler}
                  type='range'
               />
               <div
                  style={trackAnim}
                  className='animate-track'
               ></div>
            </div>
            <p>
               {songInfo.duration
                  ? getTime(songInfo.duration)
                  : '0:00'}
            </p>
         </div>
         <div className='play-control'>
            <i
               onClick={() => skipTrackHandler('skip-back')}
               className='fa-solid fa-chevron-left'
            />
            <i
               onClick={playSongHandler}
               className={
                  isPlaying
                     ? 'fa-solid fa-pause'
                     : 'fa-solid fa-play'
               }
            />
            <i
               onClick={() => skipTrackHandler('skip-forward')}
               className='fa-solid fa-chevron-right'
            />
         </div>
      </div>
   )
}

export default Player
