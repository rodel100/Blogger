import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
export default function ShowVideo(file) {
    const [ready, setReady] = useState(false);
    const ffmpeg = createFFmpeg({ log: true });
    const load = async () => {
        await ffmpeg.load();
        setReady(true);
    }
    useEffect(() => {
        load();
    }, []);
    return ready ? (
        <div>
            <h1>Video</h1>
            <video controls width="250" 
            src={URL.createObjectURL(file)}/>
        </div>
    ): ( <p>Loading...</p> );

}