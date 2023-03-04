from django.urls import path,include
from .views import TranscribeView

urlpatterns = [
    path('', TranscribeView.as_view())
]