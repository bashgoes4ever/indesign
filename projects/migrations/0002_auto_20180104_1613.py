# Generated by Django 2.0.1 on 2018-01-04 06:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(upload_to='static/img/portfolio/'),
        ),
    ]
