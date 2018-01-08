from django.shortcuts import render
from projects.models import ProjectCategory
from stuff.models import StuffImage
from replies.models import RepliesImage

def interior(request):
    categories = ProjectCategory.objects.filter(is_active=True)
    replies = RepliesImage.objects.all()
    stuff = StuffImage.objects.all()
    return render(request, 'interior/index.html', locals())