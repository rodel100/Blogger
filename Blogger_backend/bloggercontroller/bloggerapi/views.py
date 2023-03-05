from django.http import JsonResponse
from rest_framework import generics
from .serializers import TranscribeSerializer
from .models import VideoTranscribe
import whisper

# Create your views here
def upload_video(request):
    model = whisper.load_model("medium")
    video_file = request.FILES.get('video_file')
    title = request.POST.get('title')

    transcription_text = model.transcribe(video_file)

    transcription = VideoTranscribe(
        title=title,
        transcription_text=transcription_text,
        video_file=video_file,
    )
    transcription.save()

    return JsonResponse(TranscribeSerializer(transcription).data)

class TranscribeView(generics.CreateAPIView):
    queryset = VideoTranscribe.objects.all
    serializer_class = TranscribeSerializer
    