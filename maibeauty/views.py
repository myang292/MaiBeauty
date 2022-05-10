from rest_framework import generics
from .serializers import MakeupSerializer, FaceSerializer, FoundationSerializer, BronzerSerializer, EyeSerializer, BrowSerializer, LipSerializer, LipstickSerializer
from .models import Makeup, Face, Foundation, Bronzer, Eye, Brow, Lip, Lipstick

class MakeupList(generics.ListCreateAPIView):
    queryset = Makeup.objects.all()
    serializer_class = MakeupSerializer

class MakeupDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Makeup.objects.all()
    serialize_class = MakeupSerializer


class FaceList(generics.ListCreateAPIView):
    queryset = Face.objects.all()
    serializer_class = FaceSerializer

class FaceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Face.objects.all()
    serialize_class = FaceSerializer


class FoundationList(generics.ListCreateAPIView):
    queryset = Foundation.objects.all()
    serializer_class = FoundationSerializer

class FoundationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Foundation.objects.all()
    serialize_class = FoundationSerializer


class BronzerList(generics.ListCreateAPIView):
    queryset = Bronzer.objects.all()
    serializer_class = BronzerSerializer

class ronzerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bronzer.objects.all()
    serialize_class = BronzerSerializer


class EyeList(generics.ListCreateAPIView):
    queryset = Eye.objects.all()
    serializer_class = EyeSerializer

class EyeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Eye.objects.all()
    serialize_class = EyeSerializer


class BrowList(generics.ListCreateAPIView):
    queryset = Brow.objects.all()
    serializer_class = BrowSerializer

class BrowDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brow.objects.all()
    serialize_class = BrowSerializer


class LipList(generics.ListCreateAPIView):
    queryset = Lip.objects.all()
    serializer_class = LipSerializer

class LipDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lip.objects.all()
    serialize_class = LipSerializer


class LipstickList(generics.ListCreateAPIView):
    queryset = Lipstick.objects.all()
    serializer_class = LipstickSerializer

class LipstickDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lipstick.objects.all()
    serialize_class = LipstickSerializer