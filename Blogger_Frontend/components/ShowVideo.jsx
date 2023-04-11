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
    ): (<div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
      </div>);
}