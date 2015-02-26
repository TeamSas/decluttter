# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('item_name', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=500)),
                ('created', models.DateField(auto_now_add=True)),
                ('image', models.CharField(max_length=100, null=True, blank=True)),
                ('availability', models.BooleanField(default=True)),
                ('category', models.CharField(max_length=50, choices=[(b'BOOKS', b'Books'), (b'ENTERTAINMENT', b'Movies, Music, and Games'), (b'ELECTRONICS', b'Electronics and Computers'), (b'HOME', b'Home'), (b'GARDEN', b'Garden and Tools'), (b'BEAUTY', b'Beauty and Health'), (b'TOYS', b'Toys, Kids and Baby'), (b'CLOTHING', b'Clothing, Shoes and Jewelry'), (b'SPORTS', b'Sports and Outdoors'), (b'AUTOMOTIVE', b'Automotive')])),
                ('claimer', models.ForeignKey(related_name='claimed_items', blank=True, to=settings.AUTH_USER_MODEL, null=True)),
                ('poster', models.ForeignKey(related_name='posted_items', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Item',
                'verbose_name_plural': 'Items',
            },
            bases=(models.Model,),
        ),
    ]
