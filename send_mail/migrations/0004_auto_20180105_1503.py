# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('send_mail', '0003_auto_20180105_1502'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='services',
            field=models.CharField(max_length=512, blank=True, null=True, default=None),
        ),
    ]
