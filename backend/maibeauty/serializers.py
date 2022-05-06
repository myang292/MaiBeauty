from rest_framework import serializers
from .models import Foundation, Bronzer, Brows, Lips, Makeup

class MakeupSerializer(serializers.HyperlinkedModelSerializer):
    foundations = serializers.HyperlinkedRelatedField(
        view_name='foundation_detail',
        many=True,
        read_only=True
    )
    class Meta:
        model = Makeup
        fields = ('name')

class FoundationSerializer(serializers.HyperlinkedModelSerializer):
    makeup = serializers.HyperlinkedrelatedField(
        view_name='makeup_detail',
        read_only=True
    )
    class Meta:
        model = Foundation
        fields = ('name', 'description', 'photo_url')

class BronzerSerializer(serializers.HyperlinkedModelSerializer):
    makeup = serializers.HyperlinkedrelatedField(
        view_name='makeup_detail',
        read_only=True
    )
    class Meta:
        model = Foundation
        fields = ('name', 'description', 'photo_url')

class BrowsSerializer(serializers.HyperlinkedModelSerializer):
    makeup = serializers.HyperlinkedrelatedField(
        view_name='makeup_detail',
        read_only=True
    )
    class Meta:
        model = Foundation
        fields = ('name', 'description', 'photo_url')

class LipsSerializer(serializers.HyperlinkedModelSerializer):
    makeup = serializers.HyperlinkedrelatedField(
        view_name='makeup_detail',
        read_only=True
    )
    class Meta:
        model = Foundation
        fields = ('name', 'description', 'photo_url')