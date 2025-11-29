from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models.CalendarDayEvents.CalendarDayEvent import CalendarDayEvent
from .models.CalendarDayEvents.CalendarDayEventSerializer import CalendarDayEventSerializer
from rest_framework.exceptions import ValidationError

@api_view(['GET'])
def get_all_events(request):
    allEvents = CalendarDayEvent.objects.all()
    return Response(CalendarDayEventSerializer(allEvents, many = True).data)



@api_view(['POST'])
def create_event(request):
    serializedRequest = CalendarDayEventSerializer(data = request.data)
    serializedRequest.is_valid(raise_exception=True)
    serializedRequest.save()
    return Response(serializedRequest.data, status=status.HTTP_200_OK)