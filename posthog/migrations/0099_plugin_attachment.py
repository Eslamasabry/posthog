# Generated by Django 3.0.7 on 2020-11-04 14:54

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("posthog", "0098_events_property_usage"),
    ]

    operations = [
        migrations.CreateModel(
            name="PluginAttachment",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("key", models.CharField(max_length=200)),
                ("content_type", models.CharField(max_length=200)),
                ("file_name", models.CharField(max_length=200)),
                ("file_size", models.IntegerField()),
                ("contents", models.BinaryField()),
                (
                    "plugin_config",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="posthog.PluginConfig",
                    ),
                ),
                (
                    "team",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="posthog.Team",
                    ),
                ),
            ],
        ),
    ]
