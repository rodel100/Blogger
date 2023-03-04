from rest_framework import serializers
from .models import VideoTranscribe

class TranscribeSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoTranscribe
        fields = ('id', 'title', 'videoTranscribe', 'created_at', 'video_file')