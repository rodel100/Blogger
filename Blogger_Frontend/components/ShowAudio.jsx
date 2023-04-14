export default function ShowAudio({file}) {    
    return (
        <div>
            <h1>Audio</h1>
            <audio controls width="250" 
            src={URL.createObjectURL(file)}/>
        </div>
    )
}