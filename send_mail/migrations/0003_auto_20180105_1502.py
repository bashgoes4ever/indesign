# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('send_mail', '0002_order_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='text',
            field=models.CharField(max_length=256, blank=True, null=True, default=None),
        ),
    ]
