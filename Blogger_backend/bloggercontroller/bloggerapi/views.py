from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import TranscribeSerializer
from .models import VideoTranscribe
# import whisper

# model = whisper.load_model("large")
# result = model.transcribe("audio.mp3")

# # Create your views here.
# def main(request):
#     return HttpResponse(result["text"])
class TranscribeView(generics.CreateAPIView):
    queryset = VideoTranscribe.objects.all
    serializer_class = TranscribeSerializer