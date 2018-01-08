from django.db import models

class ProjectCategory(models.Model):
    name = models.CharField(max_length=64, blank=True, null=True, default=None)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return "%s" % self.name

    class Meta:
        verbose_name = 'Категория в портфолио'
        verbose_name_plural = 'Категории в портфолио'

class ProjectImage(models.Model):
    category = models.ForeignKey(ProjectCategory, blank=True, null=True, default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='static/img/portfolio/')

    def __str__(self):
        return '%s' % self.id

    class Meta:
        verbose_name = 'Проект в портфолио'
        verbose_name_plural = 'Проекты в портфолио'