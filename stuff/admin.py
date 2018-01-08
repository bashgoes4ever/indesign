from django.contrib import admin
from .models import *

class StuffImageInline(admin.TabularInline):
    model = StuffImage
    extra = 0

class StuffAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Stuff._meta.fields]
    inlines = [StuffImageInline]

    class Meta:
        model = Stuff

admin.site.register(Stuff, StuffAdmin)

class StuffImageAdmin(admin.ModelAdmin):
    list_display = [field.name for field in StuffImage._meta.fields]

    class Meta:
        model = StuffImage

admin.site.register(StuffImage, StuffImageAdmin)