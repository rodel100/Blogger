from django.db import models

# Create your models here.
class VideoTranscribe(models.Model):
    code = models.CharField(max_length=8, unique=True)
    title = models.CharField(max_length=255, unique=True)
    videoTranscribe = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    video_file = models.FileField(upload_to='videos/')