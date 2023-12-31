# Generated by Django 3.2.16 on 2023-05-11 11:04

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("posthog", "0313_early_access_feature"),
    ]

    operations = [
        migrations.AddField(
            model_name="sharingconfiguration",
            name="recording",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="sharing_configurations",
                to="posthog.sessionrecording",
                to_field="session_id",
            ),
        ),
    ]
