from django.contrib import admin
from .models import dishes, feedback, Staff, people
# Register your models here.

admin.site.register(dishes)
admin.site.register(feedback)
admin.site.register(Staff)
admin.site.register(people)