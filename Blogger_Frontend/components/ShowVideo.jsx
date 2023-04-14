import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import { useEffect, useState } from "react";

export default function ShowVideo({file}) {
    const [ready, setReady] = useState(false);
    return (
        <div>
            <h1>Video</h1>
            <video controls width="250" 
            src={URL.createObjectURL(file)}/>
        </div>
    )
}