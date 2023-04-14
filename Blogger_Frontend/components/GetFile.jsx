import { useEffect, useState } from 'react'
import ShowVideo from './ShowVideo'
import ShowAudio from './ShowAudio'

export default function GetFile() {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState(null)
  const [showAudio, setShowAudio] = useState(false)
  const videoRegex = /video\/(mp4|webm|ogg)/
  const audioRegex = /audio\/(mp3|wav|ogg|mpeg)/
  const [showVideo, setShowVideo] = useState(false)

  const handleSubmit = (e) => {
    fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      mode: 'cors',

      body: JSON.stringify({ title, video_file })
    })
  }
  useEffect(() => {
    if (file) {
      console.log(file)
      if (videoRegex.test(file.type)) {
        console.log('video')
        setShowVideo(true)
      }
      else if (audioRegex.test(file.type)){
        console.log('audio')
        setShowAudio(true)
      }
    }
  }, [file])

  return (
    <div>
      {showVideo && <ShowVideo file={file} />}
      {showAudio && <ShowAudio file={file} />}
      <div>Enter Title and File</div>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input type={"file"} onChange={(e) => { setFile(e.target.files[0]) }} />
      <button onClick={handleSubmit}>Submit</button>
    </div >
  )
}
