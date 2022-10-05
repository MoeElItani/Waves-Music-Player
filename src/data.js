// Music provided by NoCopyrightSounds
// Free Download/Stream: http://ncs.io/Hyperphantasia
// Watch: http://youtu.be/

import { v4 as uuid } from 'uuid'
function NCS() {
   return [
      {
         name: 'Symphony',
         cover: 'https://linkstorage.linkfire.com/medialinks/images/6da8f4d1-115c-44f7-8b14-94bd2e46d0b1/artwork-440x440.jpg',
         artist: 'Donna Tella, Arc North',
         color: ['#70C0C7', '#874A22'],
         audio: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/009/symphony-1631872836-pRVujQOZN4.mp3',
         id: uuid(),
         active: true,
      },
      {
         name: 'Crazy',
         cover: 'https://linkstorage.linkfire.com/medialinks/images/04a5dbe0-416c-41db-afac-2d8667982439/artwork-440x440.jpg',
         artist: 'Frizzy The Streetz, Simbai',
         color: ['#D3CC25', '#2F2F2F'],
         audio: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/989/crazy-1628499636-F933qiPFG2.mp3',
         id: uuid(),
         active: false,
      },
      {
         name: "Where'd You Go",
         cover: 'https://linkstorage.linkfire.com/medialinks/images/c8320bde-406b-40c2-baf3-789551b1b814/artwork-440x440.jpg',
         artist: 'Luna Lark, Julius Dreisig',
         color: ['#733760', '#D08E74'],
         audio: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/762/whered-you-go-1597319289-bxkvg3b8Bd.mp3',
         id: uuid(),
         active: false,
      },
      {
         name: 'Red Line',
         cover: 'https://linkstorage.linkfire.com/medialinks/images/5b85341a-f7e6-494c-bc75-3037c34b0a1c/artwork-440x440.jpg',
         artist: 'Anna Yvette',
         color: ['#F34C78', '#462479'],
         audio: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/652/red-line-1586958912-sdkTWUMTUV.mp3',
         id: uuid(),
         active: false,
      },
      {
         name: 'Limbo',
         cover: 'https://linkstorage.linkfire.com/medialinks/images/7db7f525-67ef-47e0-968b-18b5e3f22b68/artwork-440x440.jpg',
         artist: 'Floatinurboat, ELLIØT',
         color: ['#160D2A', '#F0F0F0'],
         audio: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/529/limbo-feat-elliot-1586955697-wCf7DYFWYL.mp3',
         id: uuid(),
         active: false,
      },
      {
         name: 'Lose Me Too',
         cover: 'https://linkstorage.linkfire.com/medialinks/images/e5e9fa28-b9b8-47c2-92c6-8272295ed3e5/artwork-440x440.jpg',
         artist: 'Zeus X Crona',
         color: ['#D56798', '#A9520E'],
         audio: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/695/lose-me-too-1586960092-sEkftU4A3D.mp3',
         id: uuid(),
         active: false,
      },
   ]
}

export default NCS