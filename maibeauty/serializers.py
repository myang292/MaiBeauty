from rest_framework import serializers
from .models import Makeup, Face, Foundation, Bronzer, Eye, Brow, Lip, Lipstick

class MakeupSerializer(serializers.HyperlinkedModelSerializer):
    faces = serializers.HyperlinkedRelatedField(
        view_name='face_detail',
        many=True,
        read_only=True
    )
    makeup_url = serializers.ModelSerializer.serializer_url_field(
        view_name='makeup_detail'
    )
    class Meta:
        model = Makeup
        fields = '__all__'

class FaceSerializer(serializers.HyperlinkedModelSerializer):
    makeup = serializers.HyperlinkedRelatedField(
        view_name='makeup_detail',
        many=True,
        read_only=True
    )
    class Meta:
        model = Face
        fields = ('name', 'makeup')

class FoundationSerializer(serializers.HyperlinkedModelSerializer):
    face = serializers.HyperlinkedRelatedField(
        view_name='makeup_detail',
        many=True,
        read_only=True
    )
    face_id = serializers.PrimaryKeyRelatedField(
        queryset=Face.objects.all(),
        source='face'
    )
    class Meta:
        model = Foundation
        fields = ('name', 'description', 'photo_url', 'face', 'face_id')

class BronzerSerializer(serializers.HyperlinkedModelSerializer):
    face = serializers.HyperlinkedRelatedField(
        view_name='makeup_detail',
        many=True,
        read_only=True
    )
    face_id = serializers.PrimaryKeyRelatedField(
        queryset=Face.objects.all(),
        source='face'
    )
    class Meta:
        model = Bronzer
        fields = ('name', 'description', 'photo_url', 'face', 'face_id')

class EyeSerializer(serializers.HyperlinkedModelSerializer):
    makeup = serializers.HyperlinkedRelatedField(
        view_name='makeup_detail',
        many=True,
        read_only=True
    )
    class Meta:
        model = Eye
        fields = ('name', 'makeup')

class BrowSerializer(serializers.HyperlinkedModelSerializer):
    eyes = serializers.HyperlinkedRelatedField(
        view_name='makeup_detail',
        many=True,
        read_only=True
    )
    eye_id = serializers.PrimaryKeyRelatedField(
        queryset=Eye.objects.all(),
        source='eye'
    )
    class Meta:
        model = Brow
        fields = ('name', 'description', 'photo_url', 'eye', 'eye_id')

class LipSerializer(serializers.HyperlinkedModelSerializer):
    makeup = serializers.HyperlinkedRelatedField(
        view_name='makeup_detail',
        many=True,
        read_only=True
    )
    class Meta:
        model = Lip
        fields = ('name', 'makeup')

class LipstickSerializer(serializers.HyperlinkedModelSerializer):
    lips = serializers.HyperlinkedRelatedField(
        view_name='makeup_detail',
        many=True,
        read_only=True
    )
    lip_id = serializers.PrimaryKeyRelatedField(
        queryset=Lip.objects.all(),
        source='lip'
    )
    class Meta:
        model = Lipstick
        fields = ('name', 'description', 'photo_url', 'lips', 'lip_id')