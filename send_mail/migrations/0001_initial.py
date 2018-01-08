# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('name', models.CharField(max_length=128, blank=True, null=True, default=None)),
                ('phone', models.CharField(max_length=24, blank=True, null=True, default=None)),
                ('is_processed', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('text', models.TextField(blank=True, null=True, default=None)),
                ('square', models.CharField(max_length=24, blank=True, null=True, default=None)),
                ('float_type', models.CharField(max_length=24, blank=True, null=True, default=None)),
                ('services', models.CharField(max_length=256, blank=True, null=True, default=None)),
                ('style', models.CharField(max_length=24, blank=True, null=True, default=None)),
            ],
            options={
                'verbose_name': 'Заявка',
                'verbose_name_plural': 'Заявки',
            },
        ),
    ]
