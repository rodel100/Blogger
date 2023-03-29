from django.urls import path,include
from .views import TranscribeView,upload_video

urlpatterns = [
    path('', TranscribeView.as_view()),
    path('upload', upload_video)
]