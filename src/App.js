// styles
import './styles/app.scss'
// components
import Library from './components/Library'
import Nav from './components/Nav'
import Player from './components/Player'
import Song from './components/Song'
//data
import NCS from './data'
import { useState, useRef } from 'react'

function App() {
   // Ref
   const audioRef = useRef(null)

   // State
   const [songs, setSongs] = useState(NCS())
   const [currentSong, setCurrentSong] = useState(songs[0])
   const [isPlaying, setIsPlaying] = useState(false)
   const [songInfo, setSongInfo] = useState({
      currentTime: '0',
      duration: '0',
      animationPercentage: 0,
   })
   const [libraryStatus, setLibraryStatus] = useState(false)

   // Event Handlers
   const timeUpdateHandler = (e) => {
      const current = e.target.currentTime
      const duration = e.target.duration
      // Calculate Percentage
      const roundedCurrent = Math.round(current)
      const roundedDuration = Math.round(duration)
      const animation = Math.round(
         (roundedCurrent / roundedDuration) * 100
      )
      setSongInfo({
         ...songInfo,
         currentTime: current,
         duration,
         animationPercentage: animation,
      })
   }

   const songEndHandler = async () => {
      let currentIndex = songs.findIndex(
         (song) => song.id === currentSong.id
      )
      await setCurrentSong(
         songs[(currentIndex + 1) % songs.length]
      )
      if (isPlaying) audioRef.current.play()
   }

   return (
      <div
         className={`App ${
            libraryStatus ? 'library-active' : ''
         }`}
      >
         <Nav
            libraryStatus={libraryStatus}
            setLibraryStatus={setLibraryStatus}
         />
         <Song
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
         />
         <Player
            currentSong={currentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioRef={audioRef}
            songInfo={songInfo}
            setSongInfo={setSongInfo}
            songs={songs}
            setCurrentSong={setCurrentSong}
            setSongs={setSongs}
         />
         <Library
            songs={songs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            setSongs={setSongs}
            libraryStatus={libraryStatus}
         />

         <audio
            onLoadedMetadata={timeUpdateHandler}
            onTimeUpdate={timeUpdateHandler}
            ref={audioRef}
            src={currentSong.audio}
            onEnded={songEndHandler}
         />
      </div>
   )
}

export default App
