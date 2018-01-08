# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Replies',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('name', models.CharField(max_length=64, blank=True, null=True, default=None)),
                ('description', models.CharField(max_length=128, blank=True, null=True, default=None)),
                ('text', models.TextField(blank=True, null=True, default=None)),
            ],
            options={
                'verbose_name': 'Отзыв',
                'verbose_name_plural': 'Отзывы',
            },
        ),
        migrations.CreateModel(
            name='RepliesImage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('image', models.ImageField(upload_to='static/img/replies')),
                ('reply', models.ForeignKey(blank=True, null=True, default=None, to='replies.Replies')),
            ],
            options={
                'verbose_name': 'Фото на отзыв',
                'verbose_name_plural': 'Фото на отзывы',
            },
        ),
    ]
