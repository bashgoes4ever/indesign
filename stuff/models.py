from django.db import models

class Stuff(models.Model):
    name = models.CharField(max_length=128, blank=True, null=True, default=None)
    post = models.CharField(max_length=128, blank=True, null=True, default=None)
    description = models.TextField(blank=True, null=True, default=None)

    def __str__(self):
        return '%s' % self.name

    class Meta:
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'

class StuffImage(models.Model):
    stuff = models.ForeignKey(Stuff, blank=True, null=True, default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='static/img/stuff/')

    def __str__(self):
        return '%s' % self.id

    class Meta:
        verbose_name = 'Фото струдника'
        verbose_name_plural = 'Фото сотрудников'
