from django.shortcuts import render
from django.http import HttpResponse
import whisper

model = whisper.load_model("large")
result = model.transcribe("audio.mp3")

# Create your views here.
def main(request):
    return HttpResponse(result["text"])
    