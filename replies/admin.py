from django.contrib import admin
from .models import *

class RepliesImageInline(admin.TabularInline):
    model = RepliesImage
    extra = 0

class RepliesAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Replies._meta.fields]
    inlines = [RepliesImageInline]

    class Meta:
        model = Replies

admin.site.register(Replies, RepliesAdmin)

class RepliesImageAdmin(admin.ModelAdmin):
    list_display = [field.name for field in RepliesImage._meta.fields]

    class Meta:
        model = RepliesImage

admin.site.register(RepliesImage, RepliesImageAdmin)
