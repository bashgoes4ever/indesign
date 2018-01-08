from django.db import models

class Replies(models.Model):
    name = models.CharField(max_length=64, blank=True, null=True, default=None)
    description = models.CharField(max_length=128, blank=True, null=True, default=None)
    text = models.TextField(blank=True, null=True, default=None)
    iframe = models.TextField(blank=True, null=True, default=None)

    def __str__(self):
        return '%s' % self.name

    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'

class RepliesImage(models.Model):
    reply = models.ForeignKey(Replies, blank=True, null=True, default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='static/img/replies')

    def __str__(self):
        return '%s' % self.id

    class Meta:
        verbose_name = 'Фото на отзыв'
        verbose_name_plural = 'Фото на отзывы'
