# Generated by Django 3.0.7 on 2020-10-29 15:48

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("posthog", "0096_plugins"),
    ]

    operations = [
        migrations.AddField(
            model_name="organizationinvite",
            name="emailing_attempt_made",
            field=models.BooleanField(default=False),
        ),
    ]
