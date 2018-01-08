from django.contrib import admin
from .models import *

class ProjectsImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 4

class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = [field.name for field in ProjectCategory._meta.fields]
    inlines = [ProjectsImageInline]

    class Meta:
        model = ProjectCategory

admin.site.register(ProjectCategory, ProjectCategoryAdmin)

class ProjectImageAdmin(admin.ModelAdmin):
    list_display = [field.name for field in ProjectImage._meta.fields]

    class Meta:
        model = ProjectImage

admin.site.register(ProjectImage, ProjectImageAdmin)