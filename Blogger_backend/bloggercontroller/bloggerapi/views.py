from django.http import JsonResponse,HttpResponse
from rest_framework import generics
from .serializers import TranscribeSerializer
from .models import VideoTranscribe
import whisper
import numpy as np
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.views.decorators.csrf import csrf_exempt

# Create your views here
@csrf_exempt
def upload_video(request):
    model = whisper.load_model("base")
    video_file = request.FILES.get('video_file')
    if video_file:
        file_name = video_file.name
        file_path = default_storage.save('temp/' + file_name, ContentFile(video_file.read()))
    title = request.POST.get('title')
    transcription_text = model.transcribe(file_path)
    results = transcription_text['text']

    transcription = VideoTranscribe(
        title=title,
        videoTranscribe=results,
        video_file=video_file,
    )
    transcription.save()

    return JsonResponse(TranscribeSerializer(transcription).data)
def testwhisper(request):
    model = whisper.load_model("base")
    results = model.transcribe('audio.mp3')
    return HttpResponse(results['text'])

class TranscribeView(generics.CreateAPIView):
    queryset = VideoTranscribe.objects.all
    serializer_class = TranscribeSerializer
    