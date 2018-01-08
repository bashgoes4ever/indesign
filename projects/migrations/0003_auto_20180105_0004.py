# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_auto_20180104_1613'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectImage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('image', models.ImageField(upload_to='static/img/portfolio/')),
                ('category', models.ForeignKey(blank=True, null=True, default=None, to='projects.ProjectCategory')),
            ],
            options={
                'verbose_name': 'Проект в портфолио',
                'verbose_name_plural': 'Проекты в портфолио',
            },
        ),
        migrations.RemoveField(
            model_name='project',
            name='category',
        ),
        migrations.DeleteModel(
            name='Project',
        ),
    ]
