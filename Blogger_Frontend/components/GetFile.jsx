import { useEffect, useState } from 'react'
import ShowVideo from './ShowVideo'
import ShowAudio from './ShowAudio'

export default function GetFile() {
  const formData = new FormData();
  const [title, setTitle] = useState('')
  const [file, setFile] = useState(null)
  const [showAudio, setShowAudio] = useState(false)
  const videoRegex = /video\/(mp4|webm|ogg)/
  const audioRegex = /audio\/(mp3|wav|ogg|mpeg)/
  const [showVideo, setShowVideo] = useState(false)
  const [VideoTranscript, setVideoTranscript] = useState('')

  const handleSubmit = (e) => {
    formData.append('title', title);
    formData.append('video_file', file);
    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(data => setVideoTranscript(data.videoTranscribe))}
  useEffect(() => {
    if (file) {
      console.log(file)
      if (videoRegex.test(file.type)) {
        console.log('video')
        setShowVideo(true)
      }
      else if (audioRegex.test(file.type)) {
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
      <div>{title}</div>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input type={"file"} onChange={(e) => { setFile(e.target.files[0]) }} />
      {VideoTranscript && <div>{VideoTranscript}</div>}
      <button onClick={handleSubmit}>Submit</button>
    </div >
  )
}
