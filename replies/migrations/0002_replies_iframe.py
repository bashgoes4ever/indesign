# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('replies', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='replies',
            name='iframe',
            field=models.TextField(blank=True, null=True, default=None),
        ),
    ]
