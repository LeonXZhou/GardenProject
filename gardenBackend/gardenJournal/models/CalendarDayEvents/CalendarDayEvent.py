from django.db import models

# Create your models here.
class CalendarDayEvent(models.Model):
    date = models.DateField()
    type = models.IntegerField()
    eventDetailsId = models.BigIntegerField()

    def __str__(self):
        return self.name
