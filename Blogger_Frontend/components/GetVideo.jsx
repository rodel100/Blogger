import { useState } from 'react'
import {ShowVideo} from './ShowVideo'

function GrabVideo() {
    const [title, setTitle] = useState('')
    const [file, setFile] = useState(null)

    const handleSubmit = (e) => {
        fetch('http://localhost:3000/api/upload', {
            method: 'POST',
            mode: 'cors',

            body: JSON.stringify({title,video_file})})}

  return(
    <div>
        <ShowVideo file={file} />
        <div>Enter Title and File</div>
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input type={"file"} onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={handleSubmit}>Submit</button>
    </div >
  )
}

export default GrabVideo
