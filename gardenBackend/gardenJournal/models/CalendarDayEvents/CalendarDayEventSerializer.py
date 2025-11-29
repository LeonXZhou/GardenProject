from rest_framework import serializers

from .CalendarDayEvent import CalendarDayEvent

class CalendarDayEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = CalendarDayEvent
        fields = '__all__'