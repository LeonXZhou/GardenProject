from django.urls import path
from .views import get_all_events, create_event

urlpatterns = [
    path('events/', get_all_events),
    path('events/create', create_event)
]