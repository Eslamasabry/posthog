# Generated by Django 3.2.16 on 2022-11-18 15:53

from django.db import migrations, models


# :KLUDGE: Work around test_migrations_are_safe
class RenameFieldSafe(migrations.RenameField):
    def describe(self):
        return super().describe() + " -- rename-ignore"


class Migration(migrations.Migration):
    dependencies = [
        ("posthog", "0279_recording_playlist_item_model"),
    ]

    operations = [
        migrations.AlterField(
            model_name="asyncdeletion",
            name="team",
            field=models.IntegerField(),
        ),
        RenameFieldSafe(  # This is a small table so it should be safe to rename the column
            model_name="asyncdeletion",
            old_name="team",
            new_name="team_id",
        ),
    ]