from django.db import models

class Order(models.Model):
    name = models.CharField(max_length=128, blank=True, null=True, default=None)
    phone = models.CharField(max_length=24, blank=True, null=True, default=None)
    type = models.CharField(max_length=64, blank=True, null=True, default=None)
    is_processed = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    text = models.CharField(max_length=256, blank=True, null=True, default=None)
    square = models.CharField(max_length=24, blank=True, null=True, default=None)
    float_type = models.CharField(max_length=24, blank=True, null=True, default=None)
    services = models.CharField(max_length=512, blank=True, null=True, default=None)
    style = models.CharField(max_length=24, blank=True, null=True, default=None)

    def __str__(self):
        return '%s - %s' % (self.name, self.phone)

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'
