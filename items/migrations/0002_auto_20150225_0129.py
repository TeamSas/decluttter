# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='claimer_id',
            new_name='claimer',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='poster_id',
            new_name='poster',
        ),
    ]
