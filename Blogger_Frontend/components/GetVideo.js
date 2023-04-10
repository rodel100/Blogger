import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function GrabVideo() {
    const [title, setTitle] = useState('')
    const [file, setFile] = useState(null)

    const handleSubmit = (e) => {
        fetch('http://localhost:3000/api/upload', {
            method: 'POST',
            body: JSON.stringify({title,file})})}

  return(
    <div>
        <div>Enter Title and file</div>
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input type={"file"} onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={handleSubmit}>Submit</button>
    </div >
  )
}

export default GrabVideo
