# Generated by Django 4.0.4 on 2022-05-09 15:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('maibeauty', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lips',
            name='description',
        ),
        migrations.RemoveField(
            model_name='lips',
            name='photo_url',
        ),
        migrations.RemoveField(
            model_name='makeup',
            name='type',
        ),
        migrations.AddField(
            model_name='lips',
            name='makeup',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='lips', to='maibeauty.makeup'),
        ),
        migrations.CreateModel(
            name='Lipstick',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('photo_url', models.TextField()),
                ('lips', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='lips', to='maibeauty.lips')),
            ],
        ),
        migrations.CreateModel(
            name='Face',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('makeup', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='face', to='maibeauty.makeup')),
            ],
        ),
        migrations.CreateModel(
            name='Eyes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('makeup', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='eyes', to='maibeauty.makeup')),
            ],
        ),
        migrations.AddField(
            model_name='bronzer',
            name='face',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bronzer', to='maibeauty.face'),
        ),
        migrations.AddField(
            model_name='brows',
            name='makeup',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='eyes', to='maibeauty.eyes'),
        ),
        migrations.AddField(
            model_name='foundation',
            name='face',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='face', to='maibeauty.face'),
        ),
    ]
